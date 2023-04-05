import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./active_credit_card.module.css";
import {RiVisaFill} from "react-icons/ri"
const ActiveCreditCard = ({ creditCard }) => {
  const { user } = useDataProvider();
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <div className={styles.credit_card_container}>
          <div className={styles.credit_card_header}>
            <p className={styles.credit_card_details}> {user.username}</p>
          </div>
          <div>
         
            <div>
              <p className={styles.credit_card_details}>
                {`${creditCard.cardNumber[0]}-${creditCard.cardNumber[1]}-${creditCard.cardNumber[2]}-${creditCard.cardNumber[3]}`}
              </p>
              <p className={styles.credit_card_details}>
                 {`${creditCard.expireData.month}/${creditCard.expireData.year}`}
              </p>
            </div>
            <div className={styles.visa_container}>
              <p className={styles.credit_card_details}>cvv : {creditCard.cvv}</p> 

             <RiVisaFill className={styles.icon} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCreditCard;
