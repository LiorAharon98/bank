import React from "react";
import styles from "./homepage.module.css";
import Button from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDataProvider } from "../../context/Data";
const Homepage = () => {
  const navigate = useNavigate();
  const { changeLanguage } = useDataProvider();
  const buttons = [
    { text: "enter account", to: "/sign-in" },
    { text: "create new account", to: "/sign-up" },
    { text: "business", to: "/business" },
  ];

  return (
    <div className={styles.container}>
      <h1 id={styles.welcome_tag}>{changeLanguage("welcome")}</h1>
      {buttons.map((button, index) => {
        return <Button to={button.to} key={index} {...button} />;
      })}
    </div>
  );
};

export default Homepage;
