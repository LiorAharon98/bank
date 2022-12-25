import React from "react";
import { useDataProvider } from "../../context/Data";

const ActiveCreditCard = ({ creditCard }) => {
    const {changeLanguage} = useDataProvider()
  return (
    <>
      <h2>
        {changeLanguage('card number')} :{" "}
        {`${creditCard.cardNumber[0]}-${creditCard.cardNumber[1]}-${creditCard.cardNumber[2]}-${creditCard.cardNumber[3]}`}
      </h2>
      <h2>{changeLanguage('expiration date')} : {`${creditCard.expireData.month}/${creditCard.expireData.year}`}</h2>
      <h2>cvv : {creditCard.cvv}</h2>
    </>
  );
};

export default ActiveCreditCard;
