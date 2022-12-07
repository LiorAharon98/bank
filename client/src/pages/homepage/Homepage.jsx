import React from "react";
import styles from "./homepage.module.css";
import { useDataProvider } from "../../context/Data";
const Homepage = () => {
  const {changeLanguage } = useDataProvider();
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.welcome_tag}>{changeLanguage("welcome")}!</h1>
      </div>
    </>
  );
};

export default Homepage;
