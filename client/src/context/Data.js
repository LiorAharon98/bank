import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
export const DataContext = createContext();
export const useDataProvider = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const baseUrl = "https://nodejs-bank.herokuapp.com/bank";


  const [users, setUsers] = useState([]);
  const { t } = useTranslation();

  const fetchUsers = () => {
    axios({
      method: "GET",
      url: baseUrl,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = (data) => {
    const user = { ...data, balance: 5000, expense: [] };
    axios.post(`${baseUrl}/sign-up`, user).then(() => {
      fetchUsers();
    });
  };
  const changeLanguage = (value) => {
    return t(value);
  };
  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const specificUser = (username, password) => {
    const check = users.find((user) => {
      return user.username === username && user.password === password;
    });
    return check;
  };

  const isUsernameExist = (username) => {
    const check = users.find((user) => {
      return user.username === username;
    });
    return check;
  };

  const transferMoney = (username, price, usernameToTransfer) => {
    const details = { username, money: { price, moneyType: "transfer", date: getDate() }, usernameToTransfer };
    axios.post(`${baseUrl}/user/transfer-money`, details).then((res) => {
      fetchUsers();
    });
  };
  const loanMoney = (username, price) => {
    const user = { username, money: { price, moneyType: "loan", date: getDate() } };
    axios.post(`${baseUrl}/user/loan`, user).then((res) => {
      fetchUsers();
    });
  };

  const value = {
    setUsers,
    addUser,
    specificUser,
    transferMoney,
    changeLanguage,
    isUsernameExist,
    loanMoney,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default DataProvider;
