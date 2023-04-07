import React from "react";
import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div
      className={`${styles.card} ${props.className ? props.className : ""}`}
      style={{
        width: props.width,
        height: props.height,
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,
        overflow: props.overflow,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
