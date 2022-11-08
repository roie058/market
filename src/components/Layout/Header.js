import React from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.topHeader}>
          <Link to={"/"}>
            <img src="retail-logo.png" alt="logo"></img>
          </Link>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
        <div className={styles.nav}>
          <ul className={styles.navLinks}>
            <li className={`${styles.navItem}`}>
              <NavLink
                to="/sales"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Sales
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink
                to="/produce"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Fresh Produce
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink
                to="/meat"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Meat
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink
                to="/fish"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Fish
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink
                to="/diary"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dairy
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink
                to="/bakery"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Bakery
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
