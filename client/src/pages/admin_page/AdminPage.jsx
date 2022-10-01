import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./admin_page.module.css";
const AdminPage = () => {
  const { users,changeLanguage } = useDataProvider();
  return (
    <div className={styles.container}>
      <table className={styles.table_container}>
        <tbody>
          <tr className={styles.tr_container}>
            <td> {changeLanguage('username')}</td>
            <td>{changeLanguage('password')}</td>
            <td>{changeLanguage('balance')}</td>
            <td>{changeLanguage('status')}</td>
          </tr>

          {users.map((user, index) => {
            const { password, username, balance } = user;
            return (
              <tr key={index} className={styles.tr_container}>
                <td key={index}>{username}</td>
                <td>{password}</td>
                <td>{balance}</td>
                <td style={{ backgroundColor: balance < 0 ? "red" : "green", width: "20%" }}> </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
