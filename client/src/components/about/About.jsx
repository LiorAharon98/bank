import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./about.module.css";
const About = () => {
  const { changeLanguage } = useDataProvider();
  return (

    <div className={styles.about}>
      <h2>{changeLanguage("about")}</h2>
      <p>a new bank by the ceo : lior aharon!</p>
      <p>we happy to announce the new bank a new way to transfer money and pay bills</p>
    </div>
  );
};

export default About;
