import React from "react";
import styles from "./modal_style.module.css";
import Button from "../button/Button";
import { useDataProvider } from "../../context/Data";
const ModalStyle = ({ action, func, toggleFunc, toggle }) => {
  const { changeLanguage } = useDataProvider();
  const clickHandler = (e, value) => {
    e.preventDefault();

    if (!value) return toggleFunc(false);
    func();
  };
  return (
    <div className={toggle ? styles.container : styles.container_inactive}>
      {toggle && (
        <div className={styles.container_action}>
          <div className={styles.action}>
            <p>{changeLanguage(`${action}-page`)}</p>
            <div style={{ display: "flex" }}>
              <Button
                onClick={(e) => {
                  clickHandler(e, false);
                }}
                to={"/"}
                text={changeLanguage("Cancel")}
              />
              <Button
                onClick={(e) => {
                  clickHandler(e, true);
                }}
                to={"/"}
                text={changeLanguage("approve")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalStyle;
