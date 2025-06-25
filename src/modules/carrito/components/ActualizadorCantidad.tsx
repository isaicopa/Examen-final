import { Paper, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";

interface ActualizadorCantidadProps {
  value: number;
  //   onChange: (quantity: number) => void;
  //   onDelete: VoidFunction;
}

const ActualizadorCantidad = ({
  value,
}: //   onChange,
//   onDelete,
ActualizadorCantidadProps) => {
  const [quantity, setQuantity] = useState(0);
  const enableDelete = quantity === 1;

  const increment = () => {
    setQuantity(quantity + 1);
    // onChange(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    if (enableDelete) {
      //   onDelete();
    } else {
      //   onChange(quantity - 1);
    }
  };
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
      <IconButton size="small" onClick={decrement}>
        {enableDelete ? <DeleteOutlineIcon /> : <RemoveIcon />}
      </IconButton>
      <Typography fontWeight={"bold"} textAlign={"center"} sx={{ width: 56 }}>
        {value}
      </Typography>
      <IconButton size="small" onClick={increment}>
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

export default ActualizadorCantidad;
