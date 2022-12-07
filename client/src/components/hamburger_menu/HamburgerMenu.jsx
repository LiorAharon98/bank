import React from "react";
import styles from "./hamburger_menu.module.css";
const HamburgerMenu = ({ onClick , style,className }) => {
  const arr = new Array(3).fill(1);
  return (
    <div  onClick={onClick} className={ className ? styles.container_user : styles.container}>
      {arr.map((val, index) => {
        return <div style={style} key={index} className={styles.hamburger}></div>;
      })}
    </div>
  );
};

export default HamburgerMenu;
