import React from 'react';

function Pokemon({ pokemon }) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <h2>#{pokemon.id.toString().padStart(4, '0')}</h2>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <div>
        <h2>Type</h2>
        {pokemon.types.map((type, index) => (
          <p key={index}>{type.type.name}</p>
        ))}
        <h2>Stats</h2>
        {pokemon.stats.map((stat, index) => (
          <p key={index}>
            {stat.stat.name}: {stat.base_stat}
          </p>
        ))}
        <h2>Abilities</h2>
        {pokemon.abilities.map((ability, index) => (
          <p key={index}>{ability.ability.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
