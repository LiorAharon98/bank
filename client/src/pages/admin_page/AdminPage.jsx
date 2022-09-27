import React from "react";
import { useDataProvider } from "../../context/Data";
import styles from "./admin_page.module.css";
const AdminPage = () => {
  const { users } = useDataProvider();
  return (
    <div className={styles.container}>
      <table className={styles.table_container}>
        <tbody>
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
