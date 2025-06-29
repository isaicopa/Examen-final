import { createContext, ReactNode, useState } from "react";

interface SearchContextType {
  busqueda: string;
  actualizarBusqueda: (busqueda: string) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

const SearchProvider = ({ children }: Props) => {
  const [busqueda, setBusqueda] = useState("");

  const actualizarBusqueda = (busqueda: string) => {
    setBusqueda(busqueda);
  };

  const contexto: SearchContextType = {
    busqueda,
    actualizarBusqueda,
  };

  return <SearchContext value={contexto}>{children}</SearchContext>;
};

export default SearchProvider;
