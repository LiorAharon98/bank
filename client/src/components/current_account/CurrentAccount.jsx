import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./current_account.module.css"
import { useLocation } from "react-router-dom";
import UserPage from "../../pages/user_page/UserPage";
const CurrentAccount = () => {
  const { state } = useLocation();
  const { balance, expense, income } = state;
  const { changeLanguage } = useDataProvider();
  return (
    <UserPage>
      <div>
        <h1>
          {changeLanguage("balance")} : {balance}₪
        </h1>
        <h1>
          {changeLanguage("income")} : {income}₪
        </h1>
        <div className={styles.expense_container}>
          {expense.length !== 0 &&
            expense.map((expense,index) => {
              return <h3 key={index}> {changeLanguage('transfer')} : {expense}</h3>;
            })}
        </div>
      </div>
    </UserPage>
  );
};

export default CurrentAccount;
