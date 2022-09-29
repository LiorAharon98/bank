import Input from "../input/Input";
import UserPage from "../../pages/user_page/UserPage";
import { useDataProvider } from "../../context/Data";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const TransferMoney = () => {
  const navigate = useNavigate();
  const [error,setError] = useState('')
  const { state } = useLocation();
  const { username,password } = state;
  const { transferMoney} = useDataProvider();
  const handleClick = (data) => {
    const { price, usernameToTransfer } = data;
    if (price ==='' || price<0) return setError("error been taken")
    transferMoney(username, Number(price), usernameToTransfer);
    navigate("/user/current-account", { state: state });
  };
  const inp = [
    { name: "username", type: "text" },
    { name: "price", type: "number" },
  ];
  return (
    <UserPage>
      <Input inpData={inp} onClick={handleClick} inpNumber={2}  error ={error}/>
    </UserPage>
  );
};

export default TransferMoney;
