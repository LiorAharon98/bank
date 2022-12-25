import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import LanguageSelect from "../language_select/LanguageSelect";
import { useDataProvider } from "../../context/Data";
import HamburgerMenu from "../hamburger_menu/HamburgerMenu";
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react";
const Header = () => {
  const { changeLanguage, onToggleSidebar } = useDataProvider();
const [hamburgerToggle,setHamburgerToggle] = useState(false)
  const clickHandler = ()=>{
    onToggleSidebar()
    setHamburgerToggle(true)

  }
  const closeMenu =()=>{
    setHamburgerToggle(false)
    onToggleSidebar()
  }
  return (
    <>
      <div className={styles.page_container}>
        <p className={styles.bank_title}>{changeLanguage("Bank")}</p>
        <LanguageSelect />
        {!hamburgerToggle ?
        <HamburgerMenu onClick={clickHandler} style={{ backgroundColor: "rgb(0, 130, 255)" }} />
         : <AiOutlineClose onClick={closeMenu} className={styles.close_icon}/>
        }
      </div>
    </>
  );
};

export default Header;
