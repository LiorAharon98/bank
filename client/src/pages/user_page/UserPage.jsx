import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./user_page.module.css";
import HamburgerMenu from "../../components/hamburger_menu/HamburgerMenu";
import UserMenu from "../../components/user_menu/UserMenu";
import { useDataProvider } from "../../context/Data";
const UserPage = ({ children }) => {
  const { changeLanguage } = useDataProvider();
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const { state } = useLocation();
  const { username } = state;

  const toggle = () => {
    setToggleMenu((prev) => {
      return !prev;
    });
  };
  const toggleOptionFunc = (li) => {
    if (li.label === "logout") return navigate("/");
    navigate(`/user${li.to}`, { state: state });
  };
  return (
    <div>
      <HamburgerMenu onClick={toggle} />

      <h1 id={styles.welcome_message}>
        {changeLanguage("hello")} {username}{" "}
      </h1>
      <div className={styles.container}>
        <div className={styles.menu_container}>{toggleMenu && <UserMenu toggleOptionFunc={toggleOptionFunc} />}</div>
        <div className={styles.container_middle}>{children}</div>
        <div className={styles.container_end}></div>
      </div>
    </div>
  );
};

export default UserPage;
