import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./user_page.module.css";
import UserMenu from "../../components/user_menu/UserMenu";
import { useDataProvider } from "../../context/Data";
import { AiOutlineArrowRight } from "react-icons/ai";
const UserPage = ({ children, text }) => {
  const { logoutUser, scrollToTop } = useDataProvider();
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = () => {
    scrollToTop();
    setToggleMenu((prev) => {
      return !prev;
    });
  };
  const toggleOptionFunc = (li) => {
    if (li.label === "Logout") {
      navigate("/");
      logoutUser();
      return;
    }
    setToggleMenu(false);
    navigate(`/user${li.to}`);
  };
  return (
    <>
      <div className={styles.profile_container}></div>
      <UserMenu toggleOptionFunc={toggleOptionFunc} toggle={toggleMenu} />
      <div style={{ display: toggleMenu ? "none" : undefined }} className={styles.test}>
        {!toggleMenu && (
          <div className={styles.icon_container}>
            <AiOutlineArrowRight onMouseEnter={toggle} className={styles.icon} />
          </div>
        )}
      </div>
      <div className={styles.container}>
        <div></div>
        <div className={styles.middle_container} style={{ height: text ? "max-content" : undefined }}>
          {children}
        </div>
        <div className={styles.right_bar}></div>
      </div>
    </>
  );
};

export default UserPage;
