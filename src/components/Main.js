import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getPokemon } from '../services/Dataservice';
import Pokemon from './Pokemon';

function Main() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemonList(data.results);
    };

    fetchData();
  }, []);

  const fetchPokemonDetails = async (url) => {
    try {
      const response = await axios.get(url);
      setSelectedPokemon(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <select onChange={(e) => fetchPokemonDetails(e.target.value)} defaultValue=''>
        <option value='' disabled>Select a Pokémon</option>
        {pokemonList.map((pokemon, index) => (
          <option key={index} value={pokemon.url}>{pokemon.name}</option>
        ))}
      </select>
      {selectedPokemon ? <Pokemon pokemon={selectedPokemon} /> : 'Please select a Pokémon'}
    </div>
  );
}

export default Main;
