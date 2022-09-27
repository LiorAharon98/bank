import React from "react";
import styles from "./homepage.module.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useDataProvider } from "../../context/Data";
const Homepage = () => {
  const navigate = useNavigate();
  const { changeLanguage } = useDataProvider();
  const buttons = [
    { text: "enter account", to: "/sign-in" },
    { text: "create new account", to: "/sign-up" },
    { text: "business", to: "/business" },
  ];
  const navigateFunc = (value) => {
    navigate(value);
  };

  return (
    <div className={styles.container}>
      <h1>{changeLanguage("welcome")}</h1>
      {buttons.map((button, index) => {
        return <Button key={index} onClick={navigateFunc.bind(this, button.to)} {...button} />;
      })}
    </div>
  );
};

export default Homepage;
