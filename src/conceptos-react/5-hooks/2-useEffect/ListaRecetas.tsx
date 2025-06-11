import React, { useEffect, useState } from "react";

interface RecetaType {
  id: number;
  name: string;
  cuisine: string;
  caloriesPerServing: number;
  image: string;
}

const ListaRecetas = () => {
  const [recetas, setRecetas] = useState<RecetaType[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((datos) => {
        console.log(datos);
        setRecetas(datos.recipes);
      });
  }, []);

  return (
    <div>
      <h1>ListaRecetas</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {recetas.map((receta) => {
          return (
            <div key={receta.id} className="card-receta">
              <img
                src={receta.image}
                alt={receta.name}
                className="card-receta__image"
              />
              <div className="card-receta__info">
                <p className="card-receta__titulo">{receta.name}</p>
                <p className="card-receta__descripcion">{receta.cuisine}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListaRecetas;
