import React, { useState } from "react";
import styles from "./header.module.css";
import LanguageSelect from "../language_select/LanguageSelect";
import { useDataProvider } from "../../context/Data";
import HamburgerMenu from "../hamburger_menu/HamburgerMenu";
import { AiOutlineClose,AiOutlineBank } from "react-icons/ai";
import { Animate } from "react-simple-animate";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
const Header = () => {
  const { changeLanguage, onToggleSidebar, hamburgerToggle } = useDataProvider();

  const clickHandler = () => {
    onToggleSidebar();
  };
  const closeMenu = () => {
    onToggleSidebar();
  };
  const [toggleModal, setToggleModal] = useState(false);
  const { i18n } = useTranslation();
  const handleEvent = (e) => {
    i18n.changeLanguage(e);
    setToggleModal(false);
  };
  const handleModal = () => {
    setToggleModal((prev) => !prev);
  };
  return (
    <>
      {toggleModal && (
        <div className={styles.modal_container}>
          <div className={styles.container}>
            <Flag className={styles.icon} onClick={handleEvent.bind(this, "en")} code="us" />
            <Flag className={styles.icon} onClick={handleEvent.bind(this, "he")} code="isr" />
          </div>
        </div>
      )}
      <div className={styles.page_container}>
        {!hamburgerToggle ? (
          <Animate play start={{ height: 100 }} end={{ height: 30 }}>
            <HamburgerMenu onClick={clickHandler} style={{ backgroundColor: "rgb(0, 130, 255)" }} />
          </Animate>
        ) : (
          <AiOutlineClose onClick={closeMenu} className={styles.close_icon} />
        )}
        <LanguageSelect handleModal={handleModal} />
        <AiOutlineBank style={{color: 'rgb(0, 110, 255)'}} size={27}/>
      </div>
    </>
  );
};

export default Header;
