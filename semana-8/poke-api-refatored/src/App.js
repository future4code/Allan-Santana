import React, { Component, useEffect, useState } from 'react'
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

function App() {

  const [pokeList, updatePokeList] = useState([])
  const [pokeName, updatePokeName] = useState("")

  function getAllPokemons(){
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      updatePokeList( response.data.results );
    })
    .catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    getAllPokemons()
  }, [pokeName])

  function changePokeName(event) {
    updatePokeName(event.target.value);
  };

  return (
    <div className="App">

      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
          );
        })}
      </select>

      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  )
}

export default App
