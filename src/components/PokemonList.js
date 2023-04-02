import React from "react";
import { Link } from "react-router-dom";
import styles from "./PokemonList.module.css";

const PokemonList = ({ pokemons }) => {
  const pokemon = pokemons.map((pokemon) => (
    <li key={pokemon.id}>
      <Link to={`/${pokemon.id}`}>
        <div>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <span>
          {pokemon.id}. {pokemon.name}
        </span>
      </Link>
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
