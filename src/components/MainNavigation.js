import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import logo from "../assets/images/main_logo.png";
import encyclopedia from "../assets/images/encyclopedia.png";
import pikachu from "../assets/images/pikachu.png";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { pokeId } = useParams();

  return (
    <header className={styles.header}>
      <div className={styles["header-wrap"]}>
        <h1>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </h1>
        <nav>
          <ul className={styles["nav-ul"]}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive || pokeId ? styles.isActive : undefined
                }
                end
              >
                <img src={encyclopedia} alt="" width="35px" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catch"
                className={({ isActive }) =>
                  isActive ? styles.isActive : undefined
                }
              >
                <img src={pikachu} alt="" width="35px" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
