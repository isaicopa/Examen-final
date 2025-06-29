import { Box, Container, Drawer } from "@mui/material";
import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "../ui/Header";
import SidebarCarrito from "@/modules/carrito/components/SidebarCarrito";
import { useCarrito } from "@/hooks/useCarrito";

const SIDEBAR_WITH = "160px";
interface MainLayoutProps {
  children: ReactNode;
  titulo: string;
}

const MainLayout = ({ children, titulo }: MainLayoutProps) => {
  const { totalProductos } = useCarrito();
  const open = totalProductos > 0;

  return (
    <div>
      <Head>
        <title>{titulo}</title>
      </Head>
      <Box
        sx={{
          marginRight: open ? SIDEBAR_WITH : 0,
        }}
      >
        <Header />
        <Container maxWidth="xl">{children}</Container>
      </Box>
      <Drawer
        open={open}
        anchor="right"
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            width: SIDEBAR_WITH,
          },
        }}
      >
        <SidebarCarrito />
      </Drawer>
    </div>
  );
};

export default MainLayout;
