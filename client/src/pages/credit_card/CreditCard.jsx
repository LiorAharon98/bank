import React from "react";
import { useDataProvider } from "../../context/Data";
import UserPage from "../user_page/UserPage";
const CreditCard = () => {
  const { user } = useDataProvider();
  const { creditCard } = user;
  return <UserPage>{Object.keys(creditCard).length ===0 && <h1>dont have</h1>}</UserPage>;
};

export default CreditCard;
