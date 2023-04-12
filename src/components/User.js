import { deleteUser, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import styles from "./User.module.css";
import { useSelector } from "react-redux";

const User = (props) => {
  const { user } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  const onLogout = () => {
    //
    if (!window.confirm("Sign Out 하시겠습니까?")) return;
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDeleteUser = () => {
    if (!window.confirm("탈퇴하시겠습니까?")) return;
    try {
      deleteUser(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  return (
    <>
      {userInfo && (
        <div className={styles["user-wrap"]}>
          <div className={styles["user-container"]}>
            <div className={styles["user-image"]}>
              <img src={userInfo.photoURL} alt="" className={styles.round} />
            </div>
            <div className={styles["user-info"]}>
              <div>{userInfo.displayName}</div>
              <div>{userInfo.email}</div>
              <button onClick={onLogout} className={styles.logout}>
                로그아웃
              </button>
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
