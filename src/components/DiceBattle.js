import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import Dice from "../UI/Dice";
import styles from "./DiceBattle.module.css";
import pokeball from "../assets/images/pokeball.png";
import { useDispatch } from "react-redux";
import { pocketActions } from "../store/pocket-slice";
import { useNavigate } from "react-router-dom";

let wildPokemonAttack;

const DiceBattle = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { targetPokemon, isRefresh, setIsRefresh, setIsBattlingStatus } = props;
  const [attackNumber, setAttackNumber] = useState(); // 내 공격
  const [battleStates, setBattleStates] = useState({
    touchedDice: false, // 주사위 굴림 여부
    isWin: false, // 승부상태
    isShowMessage: false, // 상태 메시지
    isBattling: false, // 배틀중 여부
  });
  const { touchedDice, isWin, isShowMessage, isBattling } = battleStates;

  const onRandomDiceHandler = () => {
    let timer;
    clearTimeout(timer);
    setBattleStates((prev) => ({
      ...prev,
      touchedDice: true,
      isBattling: true,
      isShowMessage: false,
    }));
    setIsBattlingStatus(true);

    let randomDice = Math.ceil(Math.random() * 6);
    wildPokemonAttack = Math.ceil(Math.random() * 6);
    setAttackNumber(() => randomDice);

    console.log(wildPokemonAttack);
    console.log(randomDice);

    if (wildPokemonAttack < randomDice) {
      timer = setTimeout(() => {
        setBattleStates((prev) => ({
          ...prev,
          isWin: true,
          isShowMessage: true,
          touchedDice: false,
        }));
        setIsBattlingStatus(false);
      }, 4000);
    } else {
      timer = setTimeout(() => {
        setBattleStates((prev) => ({
          ...prev,
          isShowMessage: true,
        }));
        setIsBattlingStatus(false);
      }, 4000);
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
    setBattleStates((prev) => ({
      ...prev,
      touchedDice: false,
      isWin: false,
      isShowMessage: false,
      isBattling: false,
    }));
  };

  useEffect(() => {
    if (isRefresh) {
      initBattleState();
      setIsRefresh(false);
    }
  }, [isRefresh, setIsRefresh]);

  // 공격 메세지
  const attackMessage = isBattling ? (
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
    isWin && isShowMessage ? (
      <p className={`${styles.battleMessage} ${styles.winMessage}`}>My Win!</p>
    ) : !isWin && isShowMessage ? (
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
                battleStates={battleStates}
                setBattleStates={setBattleStates}
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
