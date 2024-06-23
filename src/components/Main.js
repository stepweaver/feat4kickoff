import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getPokemon } from '../services/Dataservice';
import Pokemon from './Pokemon';

function Main() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [search, setSearch] = useState('');

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

  const handleSearch = () => {
    const foundPokemon = pokemonList.find((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    if (foundPokemon) {
      fetchPokemonDetails(foundPokemon.url);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Search for a Pokémon'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
      {selectedPokemon ? <Pokemon pokemon={selectedPokemon} /> : null}
    </div>
  );
}

export default Main;
