import axios from 'axios';

const getPokemon = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getPokemon };