import React, { useState } from "react";
import styles from "./homepage.module.css";
import { useDataProvider } from "../../context/Data";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Flag from "react-world-flags";
const Homepage = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.side_bar}></div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
