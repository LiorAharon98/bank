import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import LanguageSelect from "../language_select/LanguageSelect";
import { useDataProvider } from "../../context/Data";
import HamburgerMenu from "../hamburger_menu/HamburgerMenu";
const Header = () => {
  const { changeLanguage, onToggleSidebar } = useDataProvider();


  return (
    <div className={styles.page_container}>

      <LanguageSelect />

      <HamburgerMenu onClick={onToggleSidebar} style={{ backgroundColor: "rgb(0, 130, 255)" }} />
    </div>
  );
};

export default Header;
