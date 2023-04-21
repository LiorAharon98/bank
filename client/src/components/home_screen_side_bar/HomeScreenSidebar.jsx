import React from "react";
import styles from "./home_screen_side_bar.module.css";
import { useDataProvider } from "../../context/Data";
import SideBarTag from "../side_bar_tag/SideBarTag";
import { useNavigate } from "react-router-dom";
const HomeScreenSidebar = ({ toggleSidebar, onToggleSidebar }) => {
  const navigate = useNavigate();

  const { user } = useDataProvider();

  const handleTo = (to, e) => {
    e.preventDefault();
    onToggleSidebar();

    if (to === "/") return navigate("/");
    else if (to === "/sign-up") return navigate("/sign-up");
    else if (to === "/business") return navigate("/business");
    navigate(Object.keys(user).length > 0 ? to : "sign-in");
  };
  const buttons = [
    { text: "Home", to: "/" },
    {
      text: Object.keys(user).length > 0 ? "Personal" : "Enter",
      to: "/user/current-account",
    },
    { text: "Create new account", to: "/sign-up" },
    { text: "Loan", to: "/user/loan" },
    { text: "Transfer", to: "/user/transfer-money" },
    { text: "Current account", to: "/user/current-account" },
    { text: "Business", to: "/business" },
  ];
  return (
    <div>
      <div className={toggleSidebar ? styles.background : undefined}></div>
      <div className={toggleSidebar ? styles.container : styles.container_inactive}>
        {toggleSidebar && (
          <>
            {buttons.map((button, index) => {
              if (button.text === "Create new account" && Object.keys(user).length > 0) return;
              return <SideBarTag key={index} {...button} onClick={handleTo.bind(this, button.to)} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeScreenSidebar;
