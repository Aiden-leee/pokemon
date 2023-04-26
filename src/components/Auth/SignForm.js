import React from "react";
import styles from "./SignForm.module.css";
import { GoogleButton } from "react-google-button";

const SignForm = (props) => {
  const onUserSubmit = (event) => {
    event.preventDefault();
    props.onSignHandler();
  };

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={onUserSubmit} className={styles["sign-form"]}>
        <div className={styles["btn-wrap"]}>
          <button>
            <GoogleButton />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignForm;
