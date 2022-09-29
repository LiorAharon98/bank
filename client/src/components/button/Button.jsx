import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";
import { useDataProvider } from "../../context/Data";
const Button = ({ text, onClick,to }) => {
  const { changeLanguage } = useDataProvider();
  return (
    <div className={styles.container}>
      <Link to ={to} onClick={onClick} className={styles.button}>
        {changeLanguage(text)}
      </Link>
    </div>
  );
};

export default Button;
