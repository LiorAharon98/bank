import React from "react";
import styles from "./sign_card.module.css";
const SignCard = ({ children, page }) => {
  return (
    <div className={styles.container}>
      <div style={{width : page === 'sign in' ? '50%' : undefined}} className={styles.side_bar}></div>
      <div
        className={
          page === "sign in" ? styles.sign_in_authentication_container : styles.sign_up_authentication_container
        }
      >
        
        {children}
      </div>
    </div>
  );
};

export default SignCard;
