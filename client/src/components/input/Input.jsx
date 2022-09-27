import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./input.module.css"
const Input = ({ type, placeHolder, onChange }) => {
  const {changeLanguage} = useDataProvider()
  return <input className={styles.input} type={type} placeholder={changeLanguage(placeHolder)} onChange={onChange} />;
};

export default Input;
