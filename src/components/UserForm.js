import React from "react";
import Card from "../UI/Card";
import SignForm from "./SignForm";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  return (
    <Card maxWidth="400px">
      <div className={styles.useFormTitle}>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.userFormWrap}>
        <SignForm title={props.title} onSignHandler={props.onSignHandler} />
      </div>
    </Card>
  );
};

export default UserForm;
