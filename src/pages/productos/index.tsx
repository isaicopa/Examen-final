import CardProducto from "@/modules/producto/components/CardProducto";
import { ProductType } from "@/modules/producto/types/productTypes";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Productos = () => {
  const [productos, setProductos] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((datos) => {
        console.log(datos.products);
        setProductos(datos.products);
      });
  }, []);

  return (
    <Container maxWidth={"xl"}>
      <Box mb={4}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Results
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Check each product page for other buying options
        </Typography>
      </Box>
      <Stack spacing={4}>
        {productos.map((producto) => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </Stack>
    </Container>
  );
};

export default Productos;
