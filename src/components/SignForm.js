import React from "react";
import styles from "./SignForm.module.css";
import { GoogleButton } from "react-google-button";

const SignForm = (props) => {
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);

  const onUserSubmit = (event) => {
    event.preventDefault();
    props.onSignHandler();
    // const email = emailRef.current.value;
    // const password = passwordRef.current.value;
    // const userInputs = {
    //   email,
    //   password,
    // };
    // props.onSignHandler(userInputs);
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
