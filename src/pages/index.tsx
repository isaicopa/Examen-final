import { Header2 } from "@/conceptos-react/1-componente-funcional/ComponenteFuncional";
import { Perfil } from "@/conceptos-react/2-uso-propiedades/Perfil";
import {
  Item,
  Tarea,
  Task,
} from "@/conceptos-react/3-renderizado-condicional/Tarea";
import { ListaCientificos } from "@/conceptos-react/4-renderizado-listas/ListaCientificos";
import Contador from "@/conceptos-react/5-hooks/1-useState/Contador";
import PerfilUsuario from "@/conceptos-react/5-hooks/1-useState/PerfilUsuario";
import Concepto from "@/conceptos-react/5-hooks/2-useEffect/Concepto";
import ListaRecetas from "@/conceptos-react/5-hooks/2-useEffect/ListaRecetas";
import React from "react";

const Home = () => {
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
    </div>
  );
};

export default Home;
