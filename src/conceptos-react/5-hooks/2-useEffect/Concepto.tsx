import React, { useEffect, useState } from "react";

const Concepto = () => {
  const [nroLanzamientos, setNroLanzamientos] = useState(0);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  //   CASO1: La logica se ejecuta cada vez que se renderiza el componente
  //   useEffect(() => {
  //     console.warn("Ejecutando logica...");
  //     // setMostrarDescripcion(!mostrarDescripcion);
  //   });

  // CASO2: La logica se ejecuta solo en el primer renderizado
  useEffect(() => {
    console.warn("Ejecutando logica con dependencias vacias...");
  }, []);

  //   CASO3: La logica se ejecuta cuando cambia la dependencia
  useEffect(() => {
    console.warn("Ejecutando logica con DEPENDENCIAS...");
  }, [nroLanzamientos]);

  return (
    <div>
      <h4>🚀Nro Lanzamientos: {nroLanzamientos}</h4>
      {mostrarDescripcion && <p>Lanzamientos de Space X</p>}
      <button onClick={() => setNroLanzamientos(nroLanzamientos + 1)}>
        Lanzar
      </button>
      <button
        onClick={() => {
          setMostrarDescripcion(!mostrarDescripcion);
        }}
      >
        {mostrarDescripcion ? "Ocultar descripcion" : "Mostrar descripcion"}
      </button>
    </div>
  );
};

export default Concepto;
