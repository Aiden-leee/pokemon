import React from "react";
import Card from "../UI/Card";
import styles from "./PokemonCard.module.css";
import { CgCloseO } from "react-icons/cg";

const PokemonCardBox = (props) => {
  const onConfirm = props.confirm ? (
    <button onClick={props.confirm} className={styles.closeIcon}>
      <CgCloseO size={20} color="#6a4600" />
    </button>
  ) : null;

  return (
    <>
      <Card width={props.width}>
        <div className={styles.pokemonTitle}>
          <h2>{props.currentName}</h2>
          {onConfirm}
        </div>
        {props.children}
      </Card>
    </>
  );
};

export default PokemonCardBox;
