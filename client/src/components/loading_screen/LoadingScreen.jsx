import React from "react";
import styles from "./loading_screen.module.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDataProvider } from "../../context/Data";

const LoadingScreen = ({ text }) => {
  const { changeLanguage } = useDataProvider();

  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <div className={styles.loading_tag} >
        <div className={styles.text} >

        <p>
          {changeLanguage(text)}  
        </p>
        <p>
        <AiOutlineLoading3Quarters className={styles.icon}/>
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
