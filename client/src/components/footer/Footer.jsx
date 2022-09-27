import React, { useState, useEffect } from "react";
import styles from "./footer.module.css";
import About from "../about/About";
import { useDataProvider } from "../../context/Data";
const Footer = () => {
  const { changeLanguage } = useDataProvider();
  const images = [
    "/pictures/img1.jpg",
    "/pictures/logo_img.jpg",
    "/pictures/img1.jpg",
    "/pictures/img2.jpg",
    "/pictures/img3.jpg",
    "/pictures/img4.jpg",
    "/pictures/img5.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) return setIndex(0);
      setIndex(index + 1);
    }, 2000);
    return () => clearInterval(interval);
  });
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className={styles.container}>
        <About />
        <div className={styles.div}>
          <div>
            <h2> {changeLanguage("support")}</h2>
            <p>contact with our service at 053123543</p>
            <p>you also can send a message via whatsapp</p>
          </div>
        </div>
        <img className={styles.img} src={images[index]} alt="" />
      </div>

      <p id={styles.copyright}>copyright 2022 lior aharon</p>
    </>
  );
};

export default Footer;
