import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import IconoCarrito from "@/modules/carrito/components/IconoCarrito";
import { useCarrito } from "@/hooks/useCarrito";

const Header = () => {
  const { totalProductos } = useCarrito();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ecommerce App
          </Typography>
          <Box mr={50}>
            <IconoCarrito cantidad={totalProductos} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
