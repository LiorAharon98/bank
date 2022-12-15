import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./about.module.css";
const About = () => {
  const { changeLanguage } = useDataProvider();
  return (
    <>
      <div className={styles.about}>
        <div>
          <h2>{changeLanguage("about")}</h2>
          <p>a new bank by the ceo : lior aharon!</p>
          <p>we happy to announce the new bank a new way to transfer money and pay bills</p>
        </div>
        <div className={styles.container_tag}>
          <p>support</p>
          <p>contact</p>
          <p>help</p>
          <p>chat</p>
        </div>
        <div className={styles.container_tag}>
          <p>support</p>
          <p>contact</p>
          <p>help</p>
          <p>chat</p>
        </div>
      </div>
    </>
  );
};

export default About;
