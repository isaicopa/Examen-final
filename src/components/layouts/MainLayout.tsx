import { Container, Drawer } from "@mui/material";
import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "../ui/Header";
import SidebarCarrito from "@/modules/carrito/components/SidebarCarrito";

interface MainLayoutProps {
  children: ReactNode;
  titulo: string;
}

const MainLayout = ({ children, titulo }: MainLayoutProps) => {
  const open = true;

  return (
    <div>
      <Head>
        <title>{titulo}</title>
      </Head>
      <Header />
      <Container maxWidth="xl">{children}</Container>
      <Drawer open={open} anchor="right" variant="persistent">
        <SidebarCarrito />
      </Drawer>
    </div>
  );
};

export default MainLayout;
