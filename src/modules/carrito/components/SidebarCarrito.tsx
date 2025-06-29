import { useCarrito } from "@/hooks/useCarrito";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import ProductoCarrito from "./ProductoCarrito";

const SidebarCarrito = () => {
  const {
    carritoProductos,
    precioTotal,
    actualizarCantidad,
    eliminarProducto,
  } = useCarrito();

  return (
    <div>
      <Box textAlign={"center"} px={1} py={2}>
        <Typography variant="body2" fontWeight={"medium"}>
          Subtotal
        </Typography>
        <Typography
          variant="body1"
          fontWeight={"bold"}
          color="error"
          gutterBottom
        >
          ${precioTotal}
        </Typography>
        <Button variant="outlined">Go to Cart</Button>
      </Box>
      <Divider />
      <Stack spacing={1} divider={<Divider />}>
        {carritoProductos.map((producto) => (
          <ProductoCarrito
            key={producto.id}
            cartProduct={producto}
            onUpdateQuantity={actualizarCantidad}
            onDelete={eliminarProducto}
          />
        ))}
      </Stack>
    </div>
  );
};

export default SidebarCarrito;
