import React from "react";
import styles from "./button.module.css";
import { useDataProvider } from "../../context/Data";
const Button = ({ text, onClick }) => {
  const {changeLanguage} = useDataProvider()
  return (
    <div className={styles.container} >
      <button onClick={onClick} className={styles.button}>
        {changeLanguage(text)}
      </button>
    </div>
  );
};

export default Button;
