import React, { useState } from "react";

const usuarioLogeado = {
  id: 1,
  name: "Joe Done",
  rol: "Frontend Developer",
  urlImage: "https://i.pravatar.cc/150?img=12",
};

interface UsuarioType {
  id: number;
  name: string;
  rol: string;
  urlImage: string;
}

const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState<UsuarioType | null>(null);

  return (
    <div style={{ marginTop: "20px" }}>
      {usuario && (
        <div className="profile">
          <img src={usuario?.urlImage} className="profile__avatar" />
          <div className="profile__info">
            <p className="profile__name">{usuario?.name}</p>
            <p className="profile__title">{usuario?.rol}</p>
          </div>
        </div>
      )}
      {usuario ? (
        <button
          onClick={() => {
            setUsuario(null);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setUsuario(usuarioLogeado);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default PerfilUsuario;
