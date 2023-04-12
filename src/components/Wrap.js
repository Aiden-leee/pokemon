import React from "react";
import styles from "./Wrap.module.css";
const Wrap = (props) => {
  return (
    <div className={`${styles.wrap} ${props.className}`}>{props.children}</div>
  );
};

export default Wrap;
