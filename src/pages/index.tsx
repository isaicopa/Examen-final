import { Header2 } from "@/conceptos-react/1-componente-funcional/ComponenteFuncional";
import { Perfil } from "@/conceptos-react/2-uso-propiedades/Perfil";
import {
  Tarea,
  Item,
  Task,
} from "@/conceptos-react/3-renderizado-condicional/Tarea";
import { ListaCientificos } from "@/conceptos-react/4-renderizado-listas/ListaCientificos";
import Contador from "@/conceptos-react/5-hooks/1-useState/Contador";
import PerfilUsuario from "@/conceptos-react/5-hooks/1-useState/PerfilUsuario";
import Concepto from "@/conceptos-react/5-hooks/2-useEffect/Concepto";
import ListaRecetas from "@/conceptos-react/5-hooks/2-useEffect/ListaRecetas";
import HeaderTareas from "@/conceptos-react/5-hooks/3-estado-por-paso-propiedades/HeaderTareas";
import ListaTareas from "@/conceptos-react/5-hooks/3-estado-por-paso-propiedades/ListaTareas";
import HeaderTareas2 from "@/conceptos-react/5-hooks/4-useContext/HeaderTareas";
import ListaTareas2 from "@/conceptos-react/5-hooks/4-useContext/ListaTareas";
import { useState } from "react";

export interface TareaType {
  nombre: string;
  completada: boolean;
}

const Home = () => {
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
      <div style={{ height: "100px" }} />
    </div>
  );
};

export default Home;
