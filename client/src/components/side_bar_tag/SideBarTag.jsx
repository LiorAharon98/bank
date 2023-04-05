import React from "react";
import { Link } from "react-router-dom";
import { useDataProvider } from "../../context/Data";
import styles from "./side_bar_tag.module.css";
const SideBarTag = ({ onClick, to, className, style, text }) => {
  const { changeLanguage } = useDataProvider();
  return (
    <div className={styles.container}>
   
      <Link to={to} onClick={onClick} className={styles.button}>
        {changeLanguage(text)}
      </Link>
    </div>
  );
};

export default SideBarTag;
