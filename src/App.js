import { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Characters';

function App() {

  const [characterList, setCharacterList]=useState([])
  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character/")
    .then((response)=> response.json())
    .then((response)=> setCharacterList(response.results))
    .catch((err)=> console.log(err))
  },[])
  return (
    <div className="App">
      <div className="App-header">
        <h1>Rick and Morty Personagens</h1>
        <Characters characterList={characterList}/>
      </div>
    </div>
  );
}

export default App;
