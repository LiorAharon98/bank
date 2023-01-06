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
  const baseUrl = "https://nodejs-bank.herokuapp.com/bank";
  const localhostUrl = "http://localhost:8000/bank";
  const [user, setUser] = useState({});
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [cookies, setCookies] = useCookies("");

  const { t } = useTranslation();

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      sessionStorage.setItem("key", JSON.stringify(user));
    }
  }, [user]);
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("key"));
    if (data) {
      setUser(data);
    }
  }, []);


  const addUser = async (data) => {
    const maxLoan = Math.floor((data.income * 70) / 100);

    const user = { ...data, balance: 5000, expense: [], maxLoan };
    await axios.post(`${baseUrl}/sign-up`, user);
  };

  const specificUser = async (username, password) => {
    const user = { username, password };

    const response = await axios.post(`${baseUrl}/sign-in`, user);

    if (response.data) {
      setUser(response.data[0]);

      setCookies("jwt", response.data[1]);
      sessionStorage.setItem("key", JSON.stringify(response.data[0]));
    }
    return response.data ? [0] : "";
  };
  const transferMoney = async (_id, price, usernameToTransfer, expense) => {
    const details = {
      money: { price, moneyType: "transfer", date: getDate(), id: expense.length },
      usernameToTransfer,
      token: cookies.jwt,
    };
    const response = await axios.post(`${baseUrl}/user/transfer-money`, details);
    if (!response.data) return false;
    setUser(response.data);
    return response.data;
  };
  const loanMoney = async (id, price, expense) => {
    const user = { id, money: { price, moneyType: "loan", date: getDate(), id: expense.length }, token: cookies.jwt };
    const response = await axios.post(`${baseUrl}/user/loan`, user);
    setUser(response.data);
  };
  const addCreditCard = async (username, id) => {
    const creditCard = {
      cardHolder: username,
      cardNumber: [0, 0, 0, 0],
      expireData: { month: 8, year: 26 },
      cvv: 0,
    };

    const response = await axios.post(`${baseUrl}/user/credit-card`, creditCard);
    setUser(response.data[0]);
  };

  const changeDetails = async (data) => {
    const details = { ...data, token: cookies.jwt };
    const response = await axios.post(`${baseUrl}/user/update-user-details`, details);
    setUser(response.data);
  };
  const addPicture = async (picture) => {
    const storageRef = ref(storage, `/profile-images/${picture.name}`);

    await uploadBytes(storageRef, picture);

    const pictureUrl = await getDownloadURL(storageRef);
    const userInfo = { profilePicture: pictureUrl, token: cookies.jwt };
    const response = await axios.put(`${baseUrl}/user/update-user-details`, userInfo);
    setUser(response.data);
  };
  const logoutUser = () => {
    setCookies("jwt", "");
    sessionStorage.removeItem("key");
    setUser({});
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const onToggleSidebar = () => {
    setToggleSidebar((prev) => !prev);
    setHamburgerToggle((prev) => !prev);
  };

  const value = {
    hamburgerToggle,
    setHamburgerToggle,
    addPicture,
    changeDetails,
    addCreditCard,

    setUser,
    onToggleSidebar,
    toggleSidebar,
    scrollToTop,
    baseUrl,
    localhostUrl,
    user,
    addUser,
    specificUser,
    transferMoney,
    changeLanguage,
    logoutUser,

    loanMoney,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default DataProvider;
