import React, { useEffect, useState } from 'react';
import './App.scss';
import Filter from './components/filter';
import CharacterList from './components/characterList';
import getDataFromApi from './services/getDataFromApi';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './components/characterDetail';
import PropTypes from 'prop-types';


function App() {
  const [character, setCharacter] = useState([]);
  const [characterFilter, setCharacterFilter] = useState([]);
  const [inputText, setInputText] = useState('');
  useEffect(() => {
    // localStorage.setItem('search', '')
    getDataFromApi().then(data => { setCharacter(data); setCharacterFilter(data) })
  }, []);


  // const lastSearch = localStorage.getItem('search');

  const preventDefault = (ev) => {
    ev.preventDefault();
  }

  const handleInput = (ev) => {
    let inputText = ev.target.value;
    setInputText(inputText);

    let charactersSelected = character.filter(character => character.name.toUpperCase().includes(inputText.toUpperCase()))
    if (charactersSelected.length === 0) {
      alert(`No hay ningún personaje que coincida con la palabra ` + inputText)
    }
    else {
      setCharacterFilter(charactersSelected);
    }

  }

  return (
    <Switch>
      <Route exact path='/' render={() =>
        <main className="App">
          <Filter lastSearch={inputText} defaultFunction={preventDefault} inputFunction={handleInput} />
          <CharacterList characters={characterFilter} />

        </main>
      }></Route>
      <Route
        path='/CharacterDetail/:id'
        render={routerProps => (
          <CharacterDetail characters={character} match={routerProps.match}
          />
        )}
      ></Route>
    </Switch>
  );
}

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      characterId: PropTypes.string,
    }),
  }),
}
export default App;
