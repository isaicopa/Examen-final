import { CartProductType } from "@/modules/carrito/types/cartProductTypes";
import { createContext, ReactNode, useState } from "react";

interface CarritoContextType {
  carritoProductos: CartProductType[];
  totalProductos: number;
  agregarProducto: (producto: CartProductType) => void;
}

export const CarritoContext = createContext<CarritoContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

const CarritoProvider = ({ children }: Props) => {
  const [carritoProductos, setCarritoProductos] = useState<CartProductType[]>(
    []
  );

  const totalProductos = carritoProductos.reduce(
    (total, producto) => total + producto.quantity,
    0
  );

  const agregarProducto = (producto: CartProductType) => {
    setCarritoProductos((productos) => {
      const existeProducto = productos.find((p) => p.id === producto.id);

      if (existeProducto) {
        const listaActualizada = productos.map((p) => {
          if (p.id === producto.id) {
            return {
              ...p,
              quantity: p.quantity + producto.quantity,
            };
          }
          return p;
        });
        return listaActualizada;
      } else {
        return [...productos, producto];
      }
    });
  };

  const contexto: CarritoContextType = {
    carritoProductos,
    totalProductos,
    agregarProducto,
  };

  return <CarritoContext value={contexto}>{children}</CarritoContext>;
};

export default CarritoProvider;
