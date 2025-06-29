import { useBusqueda } from "@/hooks/useBusqueda";
import { useCarrito } from "@/hooks/useCarrito";
import IconoCarrito from "@/modules/carrito/components/IconoCarrito";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

const Header = () => {
  const { totalProductos } = useCarrito();
  const { actualizarBusqueda } = useBusqueda();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ecommerce App
            </Typography>
          </Box>
          <SearchBar onSearch={actualizarBusqueda} />
          <IconoCarrito cantidad={totalProductos} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
