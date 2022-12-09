import React from "react";
import styles from "./sign_card.module.css";
const SignCard = ({ children ,page }) => {
  return (
    <div className={styles.container}>
      <div style={{ height: page === "sign in" && "75%" }} className={styles.authentication_container}>
        {children}
      </div>
    </div>
  );
};

export default SignCard;
