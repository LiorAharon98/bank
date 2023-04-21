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
            <p className={styles.action}>{changeLanguage("action")}</p>
            <p className={styles.action}>{changeLanguage("date")}</p>
            <p className={styles.action}>{changeLanguage("price")}</p>
            <p className={styles.action}>{changeLanguage("status")}</p>
          </div>
          {expense.map((expense, index) => {
            const { date, price, moneyType } = expense;
            return (
              <Animate key={index} play duration={0.7} start={{ height: 0 }} end={{ height: 70 }}>
                <div className={styles.money_container}>
                  <p className={`${styles.money_details} ${moneyType === "transfer" && styles.negative}`}>
                    {" "}
                    {changeLanguage(moneyType.trim())}
                  </p>

                  <p className={styles.money_details}>{date}</p>
                  <p className={styles.money_details}>{price}₪</p>
                  <div className={styles.money_details}>
                    <div className={styles.status_container}>
                      <p
                        style={{
                          background:
                            moneyType === "transfer"
                              ? "linear-gradient(to left, red,rgb(251, 152, 152)"
                              : "linear-gradient(to right, rgb(75, 255, 156),rgb(22, 250, 22))",
                        }}
                        className={styles.status}
                      ></p>
                    </div>
                  </div>
                </div>
              </Animate>
            );
          })}
        </div>
      </Animate>
    </UserPage>
  );
};

export default CurrentAccount;
