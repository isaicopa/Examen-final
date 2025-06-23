import MainLayout from "@/components/layouts/MainLayout";
import CardProducto from "@/modules/producto/components/CardProducto";
import { ProductType } from "@/modules/producto/types/productTypes";
import { Box, Pagination, Stack, Typography, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DEFAULT_LIMIT = 10;
const DEFAULT_PAGE = 1;

// "total": 194,
// "skip": 0,

//skip->pagina
//   0->1
//   10->2
//   20->3

// totalPaginas = total/limite        totalPaginas = 194/10 = 19.4
// skip         = (pagina-1)*limite   skip =(3-1)*10 = 20

const calcularTotalPaginas = (total: number, limite: number) => {
  return Math.ceil(total / limite);
};

const calcularSkip = (pagina: number, limite: number) => {
  return (pagina - 1) * limite;
};

const Productos = () => {
  const [productos, setProductos] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagina, setPagina] = useState(DEFAULT_PAGE);
  const [totalPaginas, setTotalPaginas] = useState(0);

  const [busqueda, setBusqueda] = useState("");

  const router = useRouter();

  useEffect(() => {
    const skip = calcularSkip(pagina, DEFAULT_LIMIT);

    setLoading(true);
    fetch(
      `https://dummyjson.com/products/search?limit=${DEFAULT_LIMIT}&skip=${skip}&q=${busqueda}`
    )
      .then((res) => res.json())
      .then((datos) => {
        setProductos(datos.products);
        const total = calcularTotalPaginas(datos.total, DEFAULT_LIMIT);
        setTotalPaginas(total);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pagina, busqueda]);

  return (
    <MainLayout titulo="Productos">
      <Box my={4}>
        <TextField
          id="buscarProducto"
          variant="outlined"
          placeholder="Buscar producto"
          fullWidth
          onChange={(e) => {
            setPagina(DEFAULT_PAGE);
            setBusqueda(e.target.value);
          }}
        />
      </Box>
      <Box mb={4}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Results
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Check each product page for other buying options
        </Typography>
      </Box>
      {loading && <Typography>Cargando productos...</Typography>}
      {!loading && (
        <>
          <Stack spacing={4}>
            {productos.map((producto) => (
              <CardProducto
                key={producto.id}
                producto={producto}
                onClick={(id) => {
                  router.push(`/productos/${id}`);
                }}
              />
            ))}
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 4,
            }}
          >
            <Pagination
              count={totalPaginas}
              variant="outlined"
              shape="rounded"
              onChange={(e, pagina) => setPagina(pagina)}
            />
          </Box>
        </>
      )}
    </MainLayout>
  );
};

export default Productos;
