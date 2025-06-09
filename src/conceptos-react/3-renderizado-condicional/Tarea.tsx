interface TareaProps {
  nombre: string;
  completada: boolean;
}

export const Tarea = (props: TareaProps) => {
  return (
    <>
      {props.completada ? <li>{props.nombre} ✅</li> : <li>{props.nombre}</li>}
    </>
  );
};

export const Item = (props: TareaProps) => {
  return (
    <>
      <li>
        {props.nombre} {props.completada && "✅"}
      </li>
    </>
  );
};

export const Task = (props: TareaProps) => {
  if (props.completada) {
    return <li>{props.nombre} ✅</li>;
  } else {
    return <li>{props.nombre}</li>;
  }
};
