import React from "react";
import style from "./hamburger_menu.module.css";
const HamburgerMenu = ({ onClick }) => {
  const arr = new Array(3).fill(1);
  return (
    <div onClick={onClick} className={style.container}>
      {arr.map((val, index) => {
        return <div key={index} className={style.hamburger}></div>;
      })}
    </div>
  );
};

export default HamburgerMenu;
