import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./current_account.module.css";
import { useLocation } from "react-router-dom";
import UserPage from "../../pages/user_page/UserPage";
const CurrentAccount = () => {
  const { changeLanguage, specificUser } = useDataProvider();
  const { state } = useLocation();
  const { username, password } = state;
  const { balance, expense, income } = specificUser(username, password);

  return (
    <UserPage text={'current'} >
      <div>
        <h2>
          {changeLanguage("balance")} : {balance}₪
        </h2>
        <h2>
          {changeLanguage("income")} : {income}₪
        </h2>
        <div className={styles.expense_container}>
          {expense.length !== 0 &&
            expense.map((expense, index) => {
              return (
                <h3 key={index}>
                  {" "}
                  {changeLanguage("transfer")} : {expense} ₪
                </h3>
              );
            })}
        </div>
      </div>
    </UserPage>
  );
};

export default CurrentAccount;
