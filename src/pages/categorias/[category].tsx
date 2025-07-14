import MainLayout from "@/components/layouts/MainLayout";
import { useCarrito } from "@/hooks/useCarrito";
import CardProducto from "@/modules/producto/components/CardProducto";
import CardProducto2 from "@/modules/producto/components/CardProducto2";
import { ProductType } from "@/modules/producto/types/productTypes";
import { Box, Pagination, Typography, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DEFAULT_LIMIT = 10;
const DEFAULT_PAGE = 1;

const calcularTotalPaginas = (total: number, limite: number) => {
  return Math.ceil(total / limite);
};

const calcularSkip = (pagina: number, limite: number) => {
  return (pagina - 1) * limite;
};

const ProductosPorCategoria = () => {
  const [productos, setProductos] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagina, setPagina] = useState(DEFAULT_PAGE);
  const [totalPaginas, setTotalPaginas] = useState(0);

  const router = useRouter();
  const { category } = router.query;

  const { agregarProducto } = useCarrito();

  useEffect(() => {
    if (!category) return;

    const skip = calcularSkip(pagina, DEFAULT_LIMIT);
    setLoading(true);

    fetch(
      `https://dummyjson.com/products/category/${category}?limit=${DEFAULT_LIMIT}&skip=${skip}`
    )
      .then((res) => res.json())
      .then((datos) => {
        setProductos(datos.products);
        const total = calcularTotalPaginas(datos.total, DEFAULT_LIMIT);
        setTotalPaginas(total);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pagina, category]);

  return (
    <MainLayout titulo={`Categoría: ${category}`}>
      <Box mb={4}>
        <Typography variant="h5" fontWeight="bold">
          Categoría: {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explora los productos disponibles
        </Typography>
      </Box>

      {loading && <Typography>Cargando productos...</Typography>}

      {!loading && (
        <>
          <Grid container spacing={3}>
            {productos.map((producto) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                <CardProducto2
                  producto={producto}
                  onClick={(id) => {
                    router.push(`/productos/${id}`);
                  }}
                  onAddToCart={(producto) => {
                    agregarProducto({
                      id: producto.id,
                      title: producto.title,
                      price: producto.price,
                      image: producto.thumbnail,
                      quantity: 1,
                    });
                  }}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <Pagination
              count={totalPaginas}
              variant="outlined"
              shape="rounded"
              page={pagina}
              onChange={(e, newPage) => setPagina(newPage)}
            />
          </Box>
        </>
      )}
    </MainLayout>
  );
};

export default ProductosPorCategoria;
