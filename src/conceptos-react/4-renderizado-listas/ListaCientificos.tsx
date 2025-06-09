interface Cientifico {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
  imageUrl: string;
}

export const cientificos: Cientifico[] = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
    imageUrl: "https://i.imgur.com/MK3eW3As.jpg",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
    imageUrl: "https://i.imgur.com/mynHUSas.jpg",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
    imageUrl: "https://i.imgur.com/bE7W1jis.jpg",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
    imageUrl: "https://i.imgur.com/IOjWm71s.jpg",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
    imageUrl: "https://i.imgur.com/lrWQx8ls.jpg",
  },
];

export const ListaCientificos = () => {
  return (
    <>
      <h2>Lista de cientificos</h2>
      {cientificos.map((cientifico) => {
        return (
          <div key={cientifico.id} className="card">
            <img src={cientifico.imageUrl} className="card__image" />
            <p>
              <b>{cientifico.name}</b>
              <br />
              {cientifico.profession}
            </p>
          </div>
        );
      })}
    </>
  );
};
