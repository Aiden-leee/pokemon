import React from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import Card from "UI/Card";
import styles from "./EncounterScreen.module.css";

const EncounterScreen = (props) => {
  const { targetPokemon, isbattlingStatus } = props;

  const onRefresh = () => {
    props.refresh();
  };

  return (
    <Card width="70%" height="calc(100% - 34px)">
      <div className={styles.EncounterTitle}>
        <h2>Catch Pokemons</h2>
        <button onClick={onRefresh} disabled={isbattlingStatus}>
          <HiOutlineRefresh size={20} color="#6a4600" />
        </button>
      </div>
      <div className={styles.battleScreen}>
        <div className={styles["wild-pokemon-wrap"]}>
          <div className={styles["wild-pokemon"]}>
            <div className={styles.message}>
              <h3>야생의 {targetPokemon.name}(이)가 나타났다!</h3>
            </div>
            <div className={styles["wild-pokemon-image"]}>
              <img src={targetPokemon.image} alt="" />
              <div className={styles["wild-pokemon-name"]}>
                {targetPokemon.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EncounterScreen;
