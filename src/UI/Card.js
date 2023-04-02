import React from "react";
import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div
      className={styles.card}
      style={{ width: props.width, height: props.height }}
    >
      {props.children}
    </div>
  );
};

export default Card;
