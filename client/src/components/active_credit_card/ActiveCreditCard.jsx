import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./active_credit_card.module.css";
const ActiveCreditCard = ({ creditCard }) => {
  const { changeLanguage } = useDataProvider();
  return (
    <>
      <p className={styles.credit_card_details}>
        {changeLanguage("card number")} :{" "}
        {`${creditCard.cardNumber[0]}-${creditCard.cardNumber[1]}-${creditCard.cardNumber[2]}-${creditCard.cardNumber[3]}`}
      </p>
      <p className={styles.credit_card_details}>
        {changeLanguage("expiration date")} : {`${creditCard.expireData.month}/${creditCard.expireData.year}`}
      </p>
      <p className={styles.credit_card_details}>cvv : {creditCard.cvv}</p>
    </>
  );
};

export default ActiveCreditCard;
