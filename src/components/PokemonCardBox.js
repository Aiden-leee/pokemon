import React from "react";
import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import styles from "./PokemonCard.module.css";
const PokemonCardBox = (props) => {
  const params = useParams();
  const { pokeId } = params;

  return (
    <>
      <Card width="50%">
        <div className={styles.pokemonTitle}>
          <h2>{props.pokemon[pokeId - 1]}</h2>
        </div>
        {props.children}
      </Card>
    </>
  );
};

export default PokemonCardBox;
