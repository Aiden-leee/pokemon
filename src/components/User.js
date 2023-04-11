import { deleteUser } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import styles from "./User.module.css";
const User = (props) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onDeleteUser = () => {
    if (!window.confirm("탈퇴하시겠습니까?")) return;
    try {
      deleteUser(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user && (
        <div className={styles["user-wrap"]}>
          <div className={styles["user-container"]}>
            <div className={styles["user-image"]}>
              <img src={user.photoURL} alt="" className={styles.round} />
            </div>
            <div className={styles["user-info"]}>
              <div>{user.displayName}</div>
              <div>{user.email}</div>
              <button onClick={onDeleteUser} className={styles.delete}>
                회원탈퇴
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
