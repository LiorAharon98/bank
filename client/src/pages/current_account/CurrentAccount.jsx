import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./current_account.module.css";
import { useLocation } from "react-router-dom";
import UserPage from "../../pages/user_page/UserPage";
const CurrentAccount = () => {
  const { changeLanguage, specificUser } = useDataProvider();
  const { state } = useLocation();

  const { username, password } = state;

  if (!specificUser(username, password)) return;
  const { balance, expense, income } = specificUser(username, password);

  return (
    <UserPage text={"current"}>
        <h2>
          {changeLanguage("balance")} : {balance}₪
        </h2>
        <h2>
          {changeLanguage("income")} : {income}₪
        </h2>
        <div className={styles.expense_container}>
          {expense.length !== 0 &&
            expense.map((expense, index) => {
              const {date,price,moneyType} = expense
              return (
                <div key={index} className={styles.money_container} >
                <p >{date}</p>   
                <p className={styles.money_details} style={{ backgroundColor: moneyType === "loan" ? "rgb(0,200,0)" : 'rgb(250,0,0)' }}>
                  {" "}
                  {changeLanguage(moneyType)} : {price} ₪
                </p>
                </div>
              );
            })}
        </div>
    </UserPage>
  );
};

export default CurrentAccount;
