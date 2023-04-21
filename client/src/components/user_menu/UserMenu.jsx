import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./user_menu.module.css";
import SideBarTag from "../side_bar_tag/SideBarTag";
const UserMenu = ({ toggleOptionFunc, toggle }) => {
  const li = [
    { label: "Current account", to: "/user/current-account" },
    { label: "Credit card", to: "/user/credit-card" },
    { label: "Transfer money", to: "/user/transfer-money" },
    { label: "Loan", num: 4, to: "/user/loan" },
    { label: "Update details", num: 2, to: "/user/update-user-details" },
    { label: "Logout", to: "/" },
  ];
  const { changeLanguage, user } = useDataProvider();
  return (
    <div className={toggle ? styles.user_menu_container : styles.user_menu_inactive}>
      {toggle && (
        <>
          <div  className={styles.container_user_info}>
            {user.profilePicture && <img className={styles.profile_image} src={user.profilePicture} alt="error" />}
          </div>
          <div className={styles.option_container}>
            <h2 id={styles.welcome_message}>{user.username}</h2>
            {li.map((li, index) => {
              return (
                <SideBarTag
                  key={index}
                  to={li.to}
                  onClick={toggleOptionFunc.bind(this, li)}
                  text={changeLanguage(li.label)}
                ></SideBarTag>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;
