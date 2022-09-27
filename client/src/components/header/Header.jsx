import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import LanguageSelect from "../language_select/LanguageSelect";
import { useDataProvider } from "../../context/Data";
const Header = () => {
  const { changeLanguage } = useDataProvider();
  const links = [
    { label: "home", to: "/" },
    { label: "private", to: "/private" },
    { label: "business", to: "/business" },
  ];
  return (
    <div className={styles.page_container}>
      {links.map((link, index) => {
        return (
          <Link   style={{textDecoration : 'none'}} key={index} to={link.to}>
            <li  >{changeLanguage(link.label)}</li>
          </Link>
        );
      })}
      <LanguageSelect />
    </div>
  );
};

export default Header;
