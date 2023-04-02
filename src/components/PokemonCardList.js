import React from "react";
import Card from "../UI/Card";
import styles from "./PokemonList.module.css";

const PokemonCardList = (props) => {
  return (
    <Card width="50%">
      <div className={styles.pokemonTitle}>
        <h2>Pokemons</h2>
      </div>
      {props.children}
    </Card>
  );
};

export default PokemonCardList;
