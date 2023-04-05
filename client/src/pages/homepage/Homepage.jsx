import React, { useState } from "react";
import styles from "./homepage.module.css";
import { useDataProvider } from "../../context/Data";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Flag from "react-world-flags"
const Homepage = () => {
  const { changeLanguage } = useDataProvider();
  // const [index, setIndex] = useState(0);

  // const images = [
  //   "/pictures/img1.jpg",
  //   "/pictures/logo_img.jpg",
  //   "/pictures/img1.jpg",
  //   "/pictures/img2.jpg",
  //   "/pictures/img3.jpg",
  //   "/pictures/img4.jpg",
  //   "/pictures/img5.jpg",
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (index === images.length - 1) return setIndex(0);
  //     setIndex(index + 1);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // });




  return (
  <>
      <div className={styles.container}>
        <div className={styles.side_bar}>
        </div>
      
      
      </div>
      <Footer/>
  </>
 
  );
};

export default Homepage;
