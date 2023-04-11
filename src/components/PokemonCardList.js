import React from "react";
import Card from "../UI/Card";
import styles from "./PokemonList.module.css";

const PokemonCardList = (props) => {
  const title = props.title || "Pokemons";
  return (
    <Card width={props.width} maxWidth={props.maxWidth}>
      <div className={styles.pokemonTitle}>
        <h2>{title}</h2>
      </div>
      {props.children}
    </Card>
  );
};

export default PokemonCardList;
