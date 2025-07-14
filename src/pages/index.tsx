// src/pages/index.tsx
import { useRouter } from "next/router";
import HomePage from "@/components/HomePage";
import { Typography, Box, Button } from "@mui/material";

const Home = () => {
  const router = useRouter();

  return (
    <Box style={{ textAlign: "center" }}>
      <HomePage></HomePage>
    </Box>
  );
};

export default Home;
