import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/main_logo.png";
import encyclopedia from "../assets/images/encyclopedia.png";
import pikachu from "../assets/images/pikachu.png";
import mypokemons from "..//assets/images/mypokemons.png";
import styles from "./MainNavigation.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase";
import signout from "../assets/images/signout.png";
import player from "../assets/images/player.png";
import { useSelector } from "react-redux";

const MainNavigation = () => {
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

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  return (
    <header className={styles.header}>
      <div className={styles["header-wrap"]}>
        <h1>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </h1>
        <nav className={styles.nav}>
          <ul className={styles["nav-ul"]}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? styles.isActive : null
                }
              >
                <img src={encyclopedia} alt="" width="35px" />
              </NavLink>
            </li>
            {userInfo && (
              <li>
                <NavLink
                  to="/catch"
                  className={({ isActive }) =>
                    isActive ? styles.isActive : null
                  }
                >
                  <img src={pikachu} alt="" width="35px" />
                </NavLink>
              </li>
            )}
            {userInfo && (
              <li>
                <NavLink
                  to="/mypokemons"
                  className={({ isActive }) =>
                    isActive ? styles.isActive : null
                  }
                >
                  <img src={mypokemons} alt="" width="35px" />
                </NavLink>
              </li>
            )}
            {!userInfo ? (
              <li className={styles.right}>
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    isActive ? styles.isActive : null
                  }
                  end
                >
                  <img src={player} alt="SignIn" width="35px" title="Sign In" />
                </NavLink>
              </li>
            ) : (
              <>
                <li className={styles.right}>
                  <NavLink
                    to="/mypage"
                    className={({ isActive }) =>
                      isActive ? styles.isActive : null
                    }
                  >
                    <img
                      src={userInfo.photoURL}
                      alt="Sign out"
                      width="32px"
                      title="my page"
                      className={styles.round}
                    />
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={onLogout} title="Sign Out">
                    <img
                      src={signout}
                      alt="Sign out"
                      width="32px"
                      title="Sign out"
                    />
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
