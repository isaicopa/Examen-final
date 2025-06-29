import { CartProductType } from "@/modules/carrito/types/cartProductTypes";
import { createContext, ReactNode, useState } from "react";

interface CarritoContextType {
  carritoProductos: CartProductType[];
  totalProductos: number;
  precioTotal: string;
  agregarProducto: (producto: CartProductType) => void;
  actualizarCantidad: (idProducto: number, cantidad: number) => void;
  eliminarProducto: (idProducto: number) => void;
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

  const precioTotal = carritoProductos.reduce(
    (total, producto) => total + producto.price * producto.quantity,
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

  const actualizarCantidad = (idProducto: number, cantidad: number) => {
    setCarritoProductos((productos) => {
      const listaActualizada = productos.map((p) => {
        if (p.id === idProducto) {
          return {
            ...p,
            quantity: cantidad,
          };
        }
        return p;
      });
      return listaActualizada;
    });
  };

  const eliminarProducto = (idProducto: number) => {
    const listaActualizada = carritoProductos.filter(
      (producto) => producto.id !== idProducto
    );
    setCarritoProductos(listaActualizada);
  };

  const contexto: CarritoContextType = {
    carritoProductos,
    totalProductos,
    precioTotal: precioTotal.toFixed(2),
    agregarProducto,
    actualizarCantidad,
    eliminarProducto,
  };

  return <CarritoContext value={contexto}>{children}</CarritoContext>;
};

export default CarritoProvider;
