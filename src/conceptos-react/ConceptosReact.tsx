import React, { useState } from "react";
import { Header2 } from "./1-componente-funcional/ComponenteFuncional";
import { Item, Tarea, Task } from "./3-renderizado-condicional/Tarea";
import { Perfil } from "./2-uso-propiedades/Perfil";
import { ListaCientificos } from "./4-renderizado-listas/ListaCientificos";
import Contador from "./5-hooks/1-useState/Contador";
import PerfilUsuario from "./5-hooks/1-useState/PerfilUsuario";
import Concepto from "./5-hooks/2-useEffect/Concepto";
import ListaRecetas from "./5-hooks/2-useEffect/ListaRecetas";
import HeaderTareas from "./5-hooks/3-estado-por-paso-propiedades/HeaderTareas";
import ListaTareas from "./5-hooks/3-estado-por-paso-propiedades/ListaTareas";
import HeaderTareas2 from "./5-hooks/4-useContext/HeaderTareas";
import ListaTareas2 from "./5-hooks/4-useContext/ListaTareas";
import { Button } from "@mui/material";
import { TareaType } from "@/pages";

const ConceptosReact = () => {
  const [tareas, setTareas] = useState<TareaType[]>([]);
  const cantidadTareas = tareas.length;

  const agregarTarea = (tarea: TareaType) => {
    setTareas([...tareas, tarea]);
  };
  return (
    <div>
      <Header2 />
      <h1>Manejo de propiedades</h1>
      <Perfil
        urlImage="https://i.pravatar.cc/150?img=12"
        name="Joe Done"
        rol="Frontend Developer"
      />
      <h1>Renderizado condicional</h1>
      <ul>
        <Tarea nombre="Comprar leche" completada={false} />
        <Tarea nombre="Comprar pan" completada={true} />
        <Tarea nombre="Comprar pollo" completada={true} />
        <Item nombre="Comprar laptop" completada={false} />
        <Item nombre="Comprar teclado" completada={true} />
        <Task nombre="Comprar revista" completada={false} />
        <Task nombre="Comprar libro" completada={true} />
      </ul>
      <h1>Renderizado de listas</h1>
      <ListaCientificos />
      <h1>useState</h1>
      <Contador />
      <PerfilUsuario />
      <h1>useEffect</h1>
      <Concepto />
      <ListaRecetas />
      <h1>Compartir estado con props</h1>
      <HeaderTareas cantidadTareas={cantidadTareas} />
      <ListaTareas tareas={tareas} agregarTarea={agregarTarea} />
      <h1>useContext</h1>
      <HeaderTareas2 />
      <ListaTareas2 />
      <Button variant="contained">Comprar producto</Button>
      <div style={{ height: "100px" }} />
    </div>
  );
};

export default ConceptosReact;
