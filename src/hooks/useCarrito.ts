import { CarritoContext } from "@/context/CarritoProvider";
import { useContext } from "react";

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe estar dentro de un CarritoProvider");
  }
  return context;
};
