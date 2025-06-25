import {
  Card,
  Box,
  CardContent,
  Typography,
  Rating,
  Button,
} from "@mui/material";
import React from "react";
import { ProductType } from "../types/productTypes";

interface CardProductoProps {
  producto: ProductType;
  onClick: (idProducto: number) => void;
  onAddToCart: (producto: ProductType) => void;
}

const CardProducto = ({
  producto,
  onClick,
  onAddToCart,
}: CardProductoProps) => {
  return (
    <Card variant="outlined" sx={{ display: "flex", gap: 1, borderRadius: 2 }}>
      <Box
        component={"img"}
        src={producto.thumbnail}
        sx={{
          width: "240px",
          bgcolor: "divider",
          cursor: "pointer",
        }}
        onClick={() => onClick(producto.id)}
      />
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          onClick={() => onClick(producto.id)}
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
              color: "primary.main",
            },
          }}
        >
          {producto.title}
        </Typography>
        <Rating
          name="read-only"
          value={producto.rating}
          precision={0.5}
          readOnly
          size="small"
        />
        <Typography variant="body2" color="text.secondary">
          {producto.shippingInformation}
        </Typography>
        <Typography variant="body2">{producto.brand}</Typography>
        <Typography variant="h4" fontWeight={"medium"}>
          ${producto.price}
        </Typography>
        <Typography variant="body2">{producto.warrantyInformation}</Typography>
        <Button variant="contained" onClick={() => onAddToCart(producto)}>
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardProducto;
