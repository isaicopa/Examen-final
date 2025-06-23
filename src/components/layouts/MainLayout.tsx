import { Container } from "@mui/material";
import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "../ui/Header";

interface MainLayoutProps {
  children: ReactNode;
  titulo: string;
}

const MainLayout = ({ children, titulo }: MainLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{titulo}</title>
      </Head>
      <Header />
      <Container maxWidth="xl">{children}</Container>
    </div>
  );
};

export default MainLayout;
