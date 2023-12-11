import Character from "./Character";

const Characters = ({ characters }) => {
  return (
    <section>
      <div className="title">
        <h2>Rick and Morty Characters</h2>
        <div className="underline"></div>
      </div>
      <div className="gallery">
        {characters.map((character) => {
          return <Character key={character.id} {...character} />;
        })}
      </div>
    </section>
  );
};
export default Characters;
