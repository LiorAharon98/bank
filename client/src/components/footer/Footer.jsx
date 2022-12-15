import React, { useState, useEffect } from "react";
import styles from "./footer.module.css";
import About from "../about/About";
import { useDataProvider } from "../../context/Data";
const Footer = () => {
  const { changeLanguage } = useDataProvider();

  return (
    <>
      <div className={styles.container}>
        <About />
      </div>

      <p id={styles.copyright}>{changeLanguage("copyright")}</p>
    </>
  );
};

export default Footer;
