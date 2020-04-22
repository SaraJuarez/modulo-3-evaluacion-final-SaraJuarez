import React, { useEffect, useState } from 'react';
import './App.scss';
import Filter from './components/filter';
import CharacterList from './components/characterList';
import getDataFromApi from './services/getDataFromApi';

function App() {
  const [character, setCharacter] = useState([]);
  const [characterFilter, setCharacterFilter] = useState([]);
  useEffect(() => {
    console.log('useEffect se ejecuta')
    getDataFromApi().then(data => { setCharacter(data); setCharacterFilter(data) })
  }, []);

  const handleInput = (ev) => {
    let inputText = ev.target.value;
    let charactersSelected = character.filter(character => character.name.toUpperCase().includes(inputText.toUpperCase()))
    setCharacterFilter(charactersSelected);

  }

  return (
    <div className="App">
      <Filter inputFunction={handleInput} />
      <CharacterList characters={characterFilter} />

    </div>
  );
}

export default App;
