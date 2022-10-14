import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import styles from "./user_page.module.css";
import HamburgerMenu from "../../components/hamburger_menu/HamburgerMenu";
import UserMenu from "../../components/user_menu/UserMenu";
import { useDataProvider } from "../../context/Data";
const UserPage = ({ children, text }) => {
  const { changeLanguage,user  } = useDataProvider();
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggle = () => {
    setToggleMenu((prev) => {
      return !prev;
    });
  };
  const toggleOptionFunc = (li) => {
    if (li.label === "logout") return navigate("/");
    navigate(`/user${li.to}`);
  };
  return (
    <>
      <HamburgerMenu onClick={toggle} />

      <h1 id={styles.welcome_message}>
        {changeLanguage("hello")} {user.username}{" "}
      </h1>
      <div className={styles.container}>
        <UserMenu toggleOptionFunc={toggleOptionFunc} toggle={toggleMenu} />
        <div className={styles.middle_container} style={{height : text ? 'max-content' : '450px'}} >{children}</div>
        <div className={styles.right_bar}></div>
      </div>
    </>
  );
};

export default UserPage;
