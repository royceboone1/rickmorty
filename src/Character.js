const Character = ({ id, image, name, status, species, episode }) => {
  return (
    <article className="single-character">
      <img src={image} alt={name} className="img" />
      <h1>{name}</h1>
    </article>
  );
};
export default Character;
