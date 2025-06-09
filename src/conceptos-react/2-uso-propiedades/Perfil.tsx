interface PerfilProps {
  urlImage: string;
  name: string;
  rol: string;
}

export const Perfil = (props: PerfilProps) => {
  return (
    <div className="profile">
      <img
        src={props.urlImage}
        alt="Avatar de usuario"
        className="profile__avatar"
      />
      <div className="profile__info">
        <h2 className="profile__name">{props.name}</h2>
        <p className="profile__title">{props.rol}</p>
      </div>
    </div>
  );
};
