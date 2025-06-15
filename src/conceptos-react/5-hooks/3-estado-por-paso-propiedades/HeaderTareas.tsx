import React from "react";

interface HeaderTareasProps {
  cantidadTareas: number;
}

const HeaderTareas = ({ cantidadTareas }: HeaderTareasProps) => {
  return (
    <div>
      <h3>Todo App</h3>
      <p>{cantidadTareas} 📄</p>
    </div>
  );
};

export default HeaderTareas;
