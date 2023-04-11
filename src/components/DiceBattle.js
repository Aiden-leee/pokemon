import React, { useEffect, useReducer, useState } from "react";
import Card from "../UI/Card";
import Dice from "../UI/Dice";
import styles from "./DiceBattle.module.css";
import pokeball from "../assets/images/pokeball.png";
import { useDispatch } from "react-redux";
import { pocketActions } from "../store/pocket-slice";
import { useNavigate } from "react-router-dom";

let wildPokemonAttack;
const diceInitState = {
  startBattle: false,
  touchedDice: false, // 주사위 굴림 여부
  isWin: false, // 승부상태
  isShowMessage: false, // 상태 메시지
  isBattling: false, // 배틀중 여부
};

const diceReducer = (state, action) => {
  switch (action.type) {
    case "DICE_TOUCHED":
      return {
        ...state,
        startBattle: true,
        touchedDice: true,
        isBattling: true,
      };
    case "DICE_BATTLE_NEXT":
      return {
        ...state,
        startBattle: true,
        touchedDice: false,
        isBattling: false,
      };
    case "DICE_WIN":
      return {
        ...state,
        startBattle: true,
        isWin: true,
        isBattling: false,
        isShowMessage: true,
      };
    case "DICE_LOSE":
      return {
        ...state,
        isWin: false,
        isBattling: false,
        isShowMessage: true,
      };
    case "DICE_INIT":
      return {
        ...state,
        startBattle: false,
        touchedDice: false,
        isWin: false,
        isShowMessage: false,
        isBattling: false,
      };
    default:
      return state;
  }
};

const DiceBattle = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { targetPokemon, isRefresh, setIsRefresh, setIsBattlingStatus } = props;
  const [attackNumber, setAttackNumber] = useState(); // 내 공격
  const [diceReducerState, diceReducerDispatch] = useReducer(
    diceReducer,
    diceInitState
  );
  const { startBattle, touchedDice, isWin, isShowMessage, isBattling } =
    diceReducerState;

  const onRandomDiceHandler = () => {
    let timer;
    clearTimeout(timer);

    diceReducerDispatch({ type: "DICE_TOUCHED" });

    setIsBattlingStatus(true);

    let randomDice = Math.ceil(Math.random() * 6);
    wildPokemonAttack = Math.ceil(Math.random() * 6);
    setAttackNumber(() => randomDice);

    console.log(wildPokemonAttack);
    console.log(randomDice);

    if (wildPokemonAttack < randomDice) {
      timer = setTimeout(() => {
        diceReducerDispatch({ type: "DICE_WIN" });
        setIsBattlingStatus(false);
      }, 3000);
    } else {
      timer = setTimeout(() => {
        diceReducerDispatch({ type: "DICE_LOSE" });
        setIsBattlingStatus(false);
      }, 3000);
    }
  };

  const getPokemonHandler = () => {
    //
    console.log(targetPokemon);
    if (!window.confirm(`${targetPokemon.name} 을 잡겠습니까?`)) {
      return;
    }

    dispatch(pocketActions.catchPokemon(targetPokemon));

    navigate("/mypokemons");
  };

  const initBattleState = () => {
    diceReducerDispatch({ type: "DICE_INIT" });
  };

  useEffect(() => {
    if (isRefresh) {
      initBattleState();
      setIsRefresh(false);
    }
  }, [isRefresh, setIsRefresh]);

  // 공격 메세지
  const attackMessage = startBattle ? (
    <p>
      {targetPokemon.name} 의 공격 <strong>{wildPokemonAttack}</strong>
    </p>
  ) : (
    <p>{targetPokemon.name} 와(과)의 대결!</p>
  );

  // 공격 버튼 or 포켓몬 잡기
  const buttonAction = !isWin ? (
    <button
      className={`${styles.button} ${styles.attackButton}`}
      disabled={touchedDice}
      onClick={onRandomDiceHandler}
    >
      Attack!
    </button>
  ) : (
    <button
      className={`${styles.button} ${styles.getButton}`}
      onClick={getPokemonHandler}
    >
      Get Pokemon <img src={pokeball} alt="" width="30px" />
    </button>
  );

  // 배틀 결과
  const battleResult =
    !isBattling && isWin && isShowMessage ? (
      <p className={`${styles.battleMessage} ${styles.winMessage}`}>My Win!</p>
    ) : !isBattling && !isWin && isShowMessage ? (
      <p className={`${styles.battleMessage} ${styles.failedMessage}`}>
        failed!
      </p>
    ) : (
      <p className={`${styles.battleMessage} ${styles.battlingdMessage}`}>
        Battling..
      </p>
    );

  return (
    <Card width="30%">
      <div className={styles.diceBattleTitle}>
        <h2>Battle</h2>
      </div>
      <div className={styles.diceBattleWrap}>
        <div className={styles.diceBattleInfo}>
          <div className={styles.diceBattleInfoWrap}>
            <div className={styles.attackFromPokemon}>{attackMessage}</div>
            <div className={styles.DiceBox}>
              <Dice
                battleStates={diceReducerState}
                diceReducerDispatch={diceReducerDispatch}
                attackNumber={attackNumber}
                isRefresh={isRefresh}
              />
              {buttonAction}
            </div>
            {battleResult}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DiceBattle;
