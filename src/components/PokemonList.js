import React from "react";

import styles from "./PokemonList.module.css";

const PokemonList = ({ pokemons, onSelectPokemon }) => {
  const pokemon = pokemons.map((pokemon) => (
    <li key={pokemon.id}>
      <button onClick={() => onSelectPokemon(pokemon.name)}>
        <div>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <span>
          {pokemon.id}. {pokemon.name}
        </span>
      </button>
    </li>
  ));
  return (
    <div className={styles.pokemonList}>
      <div className={styles.pokemonListWrap}>
        <ul className={styles["pokemonList-ul"]}>{pokemon}</ul>
      </div>
    </div>
  );
};

export default PokemonList;
