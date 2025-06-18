import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
// import Link from "next/link";

export interface TareaType {
  nombre: string;
  completada: boolean;
}

const Home = () => {
  const router = useRouter();
  return (
    <Box style={{ textAlign: "center" }}>
      <Typography variant="h1" align="center" gutterBottom>
        Curso de React con TypeScript v3.0
      </Typography>
      <Button variant="contained" onClick={() => router.push("/productos")}>
        Ir a productos
      </Button>
      {/* <Link href="/productos">Navegar a productos</Link> */}
    </Box>
  );
};

export default Home;
