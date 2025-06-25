import { Box, Typography, Select, MenuItem, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import React from "react";
import { CartProductType } from "../types/cartProductTypes";
import ActualizadorCantidad from "./ActualizadorCantidad";

interface ProductoCarritoProps {
  cartProduct: CartProductType;
  //   onDelete: VoidFunction;
  //   onUpdateQuantity: (quantity: number) => void;
}

const ProductoCarrito = ({
  cartProduct,
}: //   onUpdateQuantity,
//   onDelete,
ProductoCarritoProps) => {
  return (
    <Box textAlign={"center"} p={1}>
      <Image
        src={cartProduct.image}
        alt={cartProduct.title}
        width={120}
        height={120}
      />
      <Typography fontWeight={"bold"} mb={2}>
        ${cartProduct.price}
      </Typography>
      <ActualizadorCantidad value={cartProduct.quantity} />
    </Box>
  );
};

export default ProductoCarrito;
