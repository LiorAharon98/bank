import React from "react";
import styles from "./sign_card.module.css";
const SignCard = ({ children ,page }) => {
  return (
    <div className={styles.container}>
      <div style={{ height: page === "sign in" && "85%" , margin : page === 'sign in' && '0px'}}  className={styles.authentication_container}>
        {children}
      </div>
    </div>
  );
};

export default SignCard;
