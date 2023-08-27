import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { useCookies } from "react-cookie";
export const DataContext = createContext();
export const useDataProvider = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [cookies, setCookies] = useCookies("");
  const [user, setUser] = useState(() => {
    const data = JSON.parse(sessionStorage.getItem("key"));
    return data ? { ...data, method: userMethod } : {};
  });

  const serverUrl = process.env.NODE_ENV === "development" ? process.env.REACT_APP_Local : process.env.React_App_Server;
  const { t } = useTranslation();
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      sessionStorage.setItem("key", JSON.stringify(user));
    }
  }, [user]);

  function userMethod() {
    return {
      changeDetails: changeDetails.bind(this),

      loan: loanMoney.bind(this),
      addCreditCard: addCreditCard.bind(this),
      transferMoney: transferMoney.bind(this),
    };
  }
  const addUser = async (data) => {
    const maxLoan = Math.floor((data.income * 70) / 100);

    const user = { ...data, balance: 5000, expense: [], maxLoan };
    try {
      const response = await axios.post(`${serverUrl}/sign-up`, user);
      return response.data ? true : false;
    } catch (error) {
      console.log(error);
    }
  };
  async function specificUser(username, password) {
    const user = { username, password };
    try {
      const response = await axios.post(`${serverUrl}/sign-in`, user);
      if (response.data) {
        const responseUser = { ...response.data[0], method: userMethod, jwt: response.data[1] };

        setUser(responseUser);
        setCookies("jwt", response.data[1]);

        sessionStorage.setItem("key", JSON.stringify(responseUser));
      }
      return response.data ? [0] : "";
    } catch (error) {
      console.log(error);
    }
  }
  async function transferMoney(price, usernameToTransfer) {
    const details = {
      money: { price, moneyType: "transfer", date: getDate(), id: this.expense.length },
      usernameToTransfer,
      token: this.jwt,
    };
    try {
      const response = await axios.post(`${serverUrl}/user/transfer-money`, details);

      if (!response.data) return false;
      setUser({ ...response.data, method: userMethod, jwt: this.jwt });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async function loanMoney(price) {
    if (cookies.jwt) {
      console.log(cookies);
    }

    const user = {
      id: this._id,
      money: { price, moneyType: "loan", date: getDate(), id: this.expense.length },
      token: this.jwt,
    };
    try {
      const response = await axios.post(`${serverUrl}/user/loan`, user);
      setUser({ ...response.data, method: userMethod, jwt: this.jwt });
    } catch (error) {
      console.log(error);
    }
  }
  async function addCreditCard() {
    const date = new Date();
    const creditCard = {
      cardHolder: this.username,
      cardNumber: [0, 0, 0, 0],
      expireData: {
        month: date.getMonth().toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
        year: new Date().getFullYear(),
      },
      cvv: 0,
    };
    try {
      const response = await axios.post(`${serverUrl}/user/credit-card`, creditCard);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function changeDetails(data) {
    const details = { ...data, token: this.jwt };
    try {
      const response = await axios.post(`${serverUrl}/user/update-user-details`, details);
      setUser({ ...response.data, method: userMethod, jwt: this.jwt });
    } catch (error) {
      console.log(error);
    }
  }
  const addPicture = async (picture) => {
    const storageRef = ref(storage, `/profile-images/${picture.name}`);
    try {
      await uploadBytes(storageRef, picture);

      const pictureUrl = await getDownloadURL(storageRef);
      const userInfo = { profilePicture: pictureUrl, token: cookies.jwt };
      const response = await axios.put(`${serverUrl}/user/update-user-details`, userInfo);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const logoutUser = () => {
    setCookies("jwt", "");
    sessionStorage.removeItem("key");
    setUser({});
  };

  const getDate = () => {
    const date = new Date();
    const day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth().toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const changeLanguage = (value) => {
    return t(value);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const value = {
    addPicture,
    scrollToTop,
    serverUrl,
    user,
    addUser,
    specificUser,
    transferMoney,
    changeLanguage,
    logoutUser,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default DataProvider;
