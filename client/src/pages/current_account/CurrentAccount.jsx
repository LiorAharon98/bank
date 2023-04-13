import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./current_account.module.css";
import UserPage from "../../pages/user_page/UserPage";
import { Animate } from "react-simple-animate";

const CurrentAccount = () => {
  const { changeLanguage, user } = useDataProvider();

  const { balance, expense, income } = user;
  expense.sort((a, b) => {
    if (a.id > b.id) return -1;
    if (a.id < b.id) return 1;
    return 0;
  });

  return (
    <UserPage text={true}>
      <div className={styles.header_container}>
        <div>
          <p className={styles.current_income}>
            {changeLanguage("balance")} : {balance}₪
          </p>
          <p
            className={styles.balance_indicator}
            style={{ backgroundColor: user.balance < 0 ? "red" : "rgb(0, 204, 0)" }}
          ></p>
        </div>
        <p className={styles.current_income}>
          {changeLanguage("income")} : {income}₪
        </p>
      </div>
      <Animate play duration={0.5} start={{ height: 0 }} end={{ height: "100%", width: "100%" }}>
        <div className={styles.expense_container}>
          <div className={styles.container1}>
            <div className={styles.container2}>
              <p>{changeLanguage("action")}</p>
              <p>{changeLanguage("date")}</p>
              <p>{changeLanguage("price")}</p>
              <p>{changeLanguage("status")}</p>
            </div>
          </div>
          <div className={styles.test}>
            <div className={styles.test2}>
              {expense.map((expense, index) => {
                const { date, price, moneyType } = expense;
                return (
                  <Animate key={index} play duration={0.7} start={{ height: 0 }} end={{ height: 70 }}>
                    <div className={styles.money_container}>
                      <p className={`${styles.money_details} ${moneyType === "transfer" && styles.negative}`}>
                        {" "}
                        {changeLanguage(moneyType.trim())}
                      </p>

                      <p className={styles.date}>{date}</p>
                      <p className={styles.price}>{price}₪</p>
                      <div className={styles.status}>
                        <div
                          style={{
                            backgroundColor: moneyType === "transfer" ? "red" : "rgb(0, 204, 0)",
                            height: 10,
                            width: 35,
                            borderRadius: 5,
                          }}
                        ></div>
                      </div>
                    </div>
                  </Animate>
                );
              })}
            </div>
          </div>
        </div>
      </Animate>
    </UserPage>
  );
};

export default CurrentAccount;
