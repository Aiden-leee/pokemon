import React from "react";
import styles from "./PageContent.module.css";

const PageContent = (props) => {
  let bgStyle = {
    background: `url(${props.background}) no-repeat`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className={styles.page} style={bgStyle}>
        <div className={styles["page-wrap"]}>{props.children}</div>
      </div>
    </>
  );
};

export default PageContent;
