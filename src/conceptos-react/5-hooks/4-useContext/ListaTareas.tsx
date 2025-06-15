import { useState } from "react";
import { useTareas } from "./TareasProvider";

const ListaTareas2 = () => {
  const { tareas, agregarTarea } = useTareas();
  const [nombreTarea, setNombreTarea] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setNombreTarea(e.target.value);
        }}
      />
      <button
        onClick={() => {
          agregarTarea({ nombre: nombreTarea, completada: false });
        }}
      >
        Agregar tarea
      </button>
      <div>
        {tareas.map((tarea, index) => {
          return (
            <div key={index}>
              <p>
                {index + 1}. {tarea.nombre}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListaTareas2;
