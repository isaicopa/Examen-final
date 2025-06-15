import { TareaType } from "@/pages";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface TareasContextType {
  tareas: TareaType[];
  cantidad: number;
  agregarTarea: (tarea: TareaType) => void;
}

export const TareasContext = createContext<TareasContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

const TareasProvider = ({ children }: Props) => {
  const [tareas, setTareas] = useState<TareaType[]>([]);
  const cantidadTareas = tareas.length;

  const agregarTarea = (tarea: TareaType) => {
    setTareas([...tareas, tarea]);
  };

  const contexto: TareasContextType = {
    tareas: tareas,
    cantidad: cantidadTareas,
    agregarTarea: agregarTarea,
  };

  return <TareasContext value={contexto}>{children}</TareasContext>;
};

export default TareasProvider;

export const useTareas = () => {
  const context = useContext(TareasContext);
  if (!context) {
    throw new Error("useTareas debe estar dentro de un TareasProvider");
  }
  return context;
};
