import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/main_logo.png";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
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
              <NavLink to="/">Main</NavLink>
            </li>
            <li>
              <NavLink to="/">Catch</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
