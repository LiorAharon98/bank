import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./user_menu.module.css";
const UserMenu = ({ toggleOptionFunc}) => {
  const li = [
    { label: "current account", to: "/current-account" },
    { label: "update details", num: 2, to: "/update-user-details" },
    { label: "transfer money", to: "/transfer-money" },
    { label: "loan", num: 4, to: "/loan" },
    { label: "logout", to: "/" },
  ];
  const { changeLanguage } = useDataProvider();
  return (
    <div className={styles.user_menu_container}>
      {li.map((li, index) => {
        return (
          <li key={index} className={styles.li} onClick={toggleOptionFunc.bind(this, li)}>
            {changeLanguage(li.label)}
          </li>
        );
      })}
    </div>
  );
};

export default UserMenu;
