import { useTareas } from "./TareasProvider";

const HeaderTareas2 = () => {
  const { cantidad } = useTareas();

  return (
    <div>
      <h3>Todo App</h3>
      <p>{cantidad} 📄</p>
    </div>
  );
};

export default HeaderTareas2;
