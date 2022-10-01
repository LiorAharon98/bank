import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./language_select.module.css";
const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const handleEvent = (e) => {
    i18n.changeLanguage(e);
  };
  return (

    <select className={styles.select}
      onChange={(e) => {
        handleEvent(e.target.value);
      }}
      >
      <option value="en">english</option>
      <option value="he">hebrew</option>
    </select>
  );
};

export default LanguageSelect;
