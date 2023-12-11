import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./Characters";
import Loading from "./Loading";
import Title from "./Title";

const charactersUrl = "https://rickandmortyapi.com/api/character";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(charactersUrl);
      const characters = await response.json();
      setCharacters(characters);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Characters characters={characters.results} />
    </main>
  );
}

export default App;
