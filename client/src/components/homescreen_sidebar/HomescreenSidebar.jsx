import React from "react";
import styles from "./homescreen_sidebar.module.css";
import Button from "../button/Button";
import { useDataProvider } from "../../context/Data";
const HomescreenSidebar = () => {
  const { toggleSidebar, user, onToggleSidebar } = useDataProvider();
  const buttons = [
    { text: "home", to: "/" },
    {
      text: Object.keys(user).length > 0 ? "personal" : "enter account",
      to: Object.keys(user).length > 0 ? "/user/current-account" : "/sign-in",
    },
    { text: "create new account", to: "/sign-up" },
    { text: "business", to: "/business" },
  ];
  return (
    <div className={toggleSidebar ? styles.container : styles.container_inactive}>
      {toggleSidebar && (
        <>
          {buttons.map((button, index) => {
            return <Button to={button.to} key={index} {...button} onClick={onToggleSidebar} />;
          })}
        </>
      )}
    </div>
  );
};

export default HomescreenSidebar;
