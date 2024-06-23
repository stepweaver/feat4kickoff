import React, { useState } from 'react';

function Pokemon({ pokemon }) {
  const [isFront, setIsFront] = useState(true);

  const toggleCard = () => setIsFront(!isFront);

  return (
    <div className='pokemon-card' onClick={toggleCard}>
      {isFront ? (
        <div className='card-front'>
          <img
            src={pokemon.sprites?.other?.dream_world?.front_default || ''}
            alt={pokemon.name}
          />
          <div className='card-info'>
            <h2>#{pokemon.id?.toString().padStart(4, '0')}</h2>
            <h1>{pokemon.name}</h1>
            <div className='pokemon-type'>
              {pokemon.types?.map((type, index) => (
                <p key={index}>{type.type.name}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='card-back'>
          <div className='pokemon-stats'>
            {pokemon.stats?.map((stat, index) => (
              <p key={index}>
                {stat.stat.name}: {stat.base_stat}
              </p>
            ))}
          </div>
          <div className='pokemon-abilities'>
            {pokemon.abilities?.map((ability, index) => (
              <p key={index}>{ability.ability.name}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokemon;