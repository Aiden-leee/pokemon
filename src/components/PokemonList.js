import React from "react";
import styles from "./PokemonList.module.css";
import modapi from "../assets/images/modapi.png";

const PokemonList = ({ pokemons, onSelectPokemon }) => {
  const pokemon = pokemons.map((pokemon) => (
    <li key={pokemon.id}>
      <button onClick={() => onSelectPokemon(pokemon.name)}>
        <div className={styles.img_box}>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <span>
          {pokemon.id}. {pokemon.name}
        </span>
      </button>
    </li>
  ));

  const emptyPokemon = (
    <div className={styles.empty}>
      <img src={modapi} alt="" width="50" />
      <p>포켓몬이 없습니다.</p>
    </div>
  );

  return (
    <div className={styles.pokemonList}>
      <div className={styles.pokemonListWrap}>
        {pokemons.length < 1 && emptyPokemon}
        {pokemons && <ul className={styles["pokemonList-ul"]}>{pokemon}</ul>}
      </div>
    </div>
  );
};

export default PokemonList;
