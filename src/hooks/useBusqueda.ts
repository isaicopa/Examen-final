import { SearchContext } from "@/context/SearchProvider";
import { useContext } from "react";

export const useBusqueda = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useBusqueda debe estar dentro de un SearchProvider");
  }
  return context;
};
