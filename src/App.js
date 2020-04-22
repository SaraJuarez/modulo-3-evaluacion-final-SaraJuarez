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


  const preventDefault = (ev) => {
    ev.preventDefault();
  }

  const handleInput = (ev) => {

    // cada vez que hago un cambio en el input, se ejecuta handleInput y se renueva el valor de characterSelect, filtrando el array character y guardando los cambios en characterFilter, que es lo que se pinta. Si yo escribo Rick, me salen los personajes que contienen esas letras(se filtra el array character guardando los resultados en characterFilter y pitando), si borro y escribo rock, vuelve a filtrar el array character y a buscar las letras que coincidan, guardando el resultado el characterFilter. Es decir, uso character como fuente de información y characterFilter como array donde se hacen los cambios y se pintan en pantalla.
    let inputText = ev.target.value;
    let charactersSelected = character.filter(character => character.name.toUpperCase().includes(inputText.toUpperCase()))
    setCharacterFilter(charactersSelected);

  }

  return (
    <div className="App">
      <Filter defaultFunction={preventDefault} inputFunction={handleInput} />
      <CharacterList characters={characterFilter} />

    </div>
  );
}

export default App;
