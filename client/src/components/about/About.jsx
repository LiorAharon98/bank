import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./about.module.css";
const About = () => {
  const { changeLanguage } = useDataProvider();
  return (
    <>
      <div className={styles.about}>
        <div className={styles.container_tag}>
          <p>{changeLanguage("support")}</p>
          <p>{changeLanguage("contact")}</p>
          <p>{changeLanguage("help")}</p>
          <p>{changeLanguage("chat")}</p>
        </div>
        <div className={styles.container_tag}>
          <p>{changeLanguage("services")}</p>
          <p>{changeLanguage("credit card")}</p>
          <p>{changeLanguage("branches")}</p>
          <p>{changeLanguage("about")}</p>
        </div>
        <div className={styles.container_tag}>
          <p>{changeLanguage("accessibility")}</p>
          <p>{changeLanguage("business")}</p>
          <p>{changeLanguage("students")}</p>
          <p>{changeLanguage("support")}</p>
        </div>
      </div>
    </>
  );
};

export default About;
