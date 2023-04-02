import React from "react";
import styles from "./Division.module.css";

const DivisionLayout = (props) => {
  return <div className={styles.division}>{props.children}</div>;
};

export default DivisionLayout;
