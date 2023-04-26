import React from "react";
import styles from "./Division.module.css";

const DivisionLayout = (props) => {
  return (
    <div className={`${styles.division} ${styles[`${props.className}`]}`}>
      {props.children}
    </div>
  );
};

export default DivisionLayout;
