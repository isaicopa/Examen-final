import { Typography } from "@mui/material";

export interface TareaType {
  nombre: string;
  completada: boolean;
}

const Home = () => {
  return (
    <div>
      <Typography variant="h1" align="center">
        Curso de React con TypeScript v3.0
      </Typography>
    </div>
  );
};

export default Home;
