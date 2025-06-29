import { Paper, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { use, useEffect, useState } from "react";

interface ActualizadorCantidadProps {
  value: number;
  onUpdateQuantity: (cantidad: number) => void;
  onDelete: () => void;
}

const ActualizadorCantidad = ({
  value,
  onUpdateQuantity,
  onDelete,
}: ActualizadorCantidadProps) => {
  const [quantity, setQuantity] = useState(value);
  const esCantidadUnica = quantity === 1;

  const increment = () => {
    setQuantity(quantity + 1);
    onUpdateQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    onUpdateQuantity(quantity - 1);
  };

  useEffect(() => {
    setQuantity(value);
  }, [value]);

  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        borderColor: "secondary.main",
        borderWidth: 3,
        borderRadius: 5,
      }}
    >
      {esCantidadUnica ? (
        <IconButton size="small" onClick={onDelete}>
          <DeleteOutlineIcon />
        </IconButton>
      ) : (
        <IconButton size="small" onClick={decrement}>
          <RemoveIcon />
        </IconButton>
      )}
      <Typography fontWeight={"bold"} textAlign={"center"} sx={{ width: 56 }}>
        {quantity}
      </Typography>
      <IconButton size="small" onClick={increment}>
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

export default ActualizadorCantidad;
