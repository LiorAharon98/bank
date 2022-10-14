import { useContext, createContext, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
export const DataContext = createContext();
export const useDataProvider = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const baseUrl = "https://nodejs-bank.herokuapp.com/bank";
  const localhostUrl = "http://localhost:8000/bank";
  const [user, setUser] = useState([]);

  const { t } = useTranslation();

  const addUser = (data) => {
    const user = { ...data, balance: 5000, expense: [] };
    axios.post(`${baseUrl}/sign-up`, user).then(() => {});
  };

  const specificUser = async (username, password) => {
    const user = { username, password };
    const response = await axios.post(`${baseUrl}/sign-in`, user).then((response) => {
      setUser(response.data[0]);
      return response.data[0];
    });
    return response;
  };
  const transferMoney = async (username, price, usernameToTransfer) => {
    const details = { username, money: { price, moneyType: "transfer", date: getDate() }, usernameToTransfer };
    const response = await axios.post(`${baseUrl}/user/transfer-money`, details).then((res) => {
      setUser(res.data[0]);
      return res.data[0];
    });
    return response;
  };
  const loanMoney = (username, price) => {
    const user = { username, money: { price, moneyType: "loan", date: getDate() } };
    axios.post(`${baseUrl}/user/loan`, user).then((res) => {
      setUser(res.data[0]);
    });
  };
  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const changeLanguage = (value) => {
    return t(value);
  };

  const value = {
    baseUrl,
    localhostUrl,
    user,
    addUser,
    specificUser,
    transferMoney,
    changeLanguage,

    loanMoney,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default DataProvider;
