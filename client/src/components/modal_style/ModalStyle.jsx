import React from "react";
import styles from "./modal_style.module.css";
import Button from "../button/Button";
import { useDataProvider } from "../../context/Data";
import { IoMdClose } from "react-icons/io";
import {} from "react-icons/io";
const ModalStyle = ({ action, func, toggleFunc, toggle }) => {
  const { changeLanguage } = useDataProvider();
  const clickHandler = (e, value) => {
    e.preventDefault();
    if (!value) return toggleFunc(false);
    func();
  };
  return (
    <div
      onClick={(e) => {
        clickHandler(e, false);
      }}
      className={toggle ? styles.container : styles.container_inactive}
    >
      {toggle && (
        <div className={styles.container_action}>
          <div
            onClick={(e) => {
              clickHandler(e, false);
            }}
            className={styles.exit}
          >
            {<IoMdClose />}
          </div>
          <div className={styles.action}>
            <p>{changeLanguage(action === "loan" ? "loan-page" : "transfer-page")}?</p>
            <Button
              onClick={(e) => {
                clickHandler(e, true);
              }}
              to={"/"}
              text={changeLanguage(action)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalStyle;
