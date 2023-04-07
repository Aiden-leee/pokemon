import React, { useEffect, useState } from "react";
import styles from "./Dice.module.css";

const Dice = (props) => {
  const { battleStates, setBattleStates, attackNumber, isRefresh } = props;
  const { touchedDice } = battleStates;
  const [currentDice, setCurrentDice] = useState("");

  const transformDice = (number) => {
    switch (number) {
      case 1:
        setCurrentDice(() => styles.one);
        break;
      case 2:
        setCurrentDice(() => styles.two);
        break;
      case 3:
        setCurrentDice(() => styles.three);
        break;
      case 4:
        setCurrentDice(() => styles.four);
        break;
      case 5:
        setCurrentDice(() => styles.five);
        break;
      case 6:
        setCurrentDice(() => styles.six);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isRefresh) {
      transformDice(1);
    }
  }, [isRefresh, attackNumber]);

  useEffect(() => {
    if (!touchedDice) {
      return;
    }
    const timer = setTimeout(() => {
      transformDice(attackNumber);
      setBattleStates((prev) => ({
        ...prev,
        touchedDice: false,
      }));
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [attackNumber, touchedDice, setBattleStates]);

  return (
    <div
      className={`${styles.dice} ${currentDice} ${
        touchedDice ? styles.roll : ""
      }`}
    >
      <div className={`${styles["dice-face"]} ${styles.front}`}></div>
      <div className={`${styles["dice-face"]} ${styles.back}`}></div>
      <div className={`${styles["dice-face"]} ${styles.top}`}></div>
      <div className={`${styles["dice-face"]} ${styles.bottom}`}></div>
      <div className={`${styles["dice-face"]} ${styles.left}`}></div>
      <div className={`${styles["dice-face"]} ${styles.right}`}></div>
    </div>
  );
};

export default Dice;
