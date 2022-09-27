import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
export const DataContext = createContext();
export const useDataProvider = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const baseUrl = "http://localhost:5000/bank";
  const { t } = useTranslation();

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setUsers(response.data);
    });
  }, []);

  const addUser = (username, password, email, income) => {
    const user = { username, password, email, balance: 5000, income, expense: [] };
    axios.post(`${baseUrl}/sign-up`, user).then((response) => {
      console.log(response.data[0]);
    });
  };
  const changeLanguage = (value) => {
    return t(value);
  };
  const specificUser = (username, password) => {
    const check = users.find((user) => {
      return user.username === username && user.password === password;
    });
    return check;
  };
  const isUserExist = (username, password) => {
    const check = users.find((user) => {
      return user.username === username && user.password === password;
    });
    return check;
  };

  const duplicateUsers = (username) => {
    const check = users.find((user) => {
      return user.username === username;
    });
    return check;
  };

  const transferMoney = (username, price, usernameToTransfer) => {
    const details = { username, price, usernameToTransfer };
    axios.post(`${baseUrl}/user/transfer-money`, details);
  };
  const loanMoney = (username, price) => {
    const user = { username, price };
    axios.post(`${baseUrl}/user/loan`, user);
  };

  const value = {
    setUsers,
    users,
    addUser,
    specificUser,
    transferMoney,
    changeLanguage,
    isUserExist,
    duplicateUsers,
    loanMoney,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default DataProvider;
