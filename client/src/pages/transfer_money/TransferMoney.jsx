import Input from "../../components/input/Input";
import UserPage from "../../pages/user_page/UserPage";
import { useDataProvider } from "../../context/Data";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const TransferMoney = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { state } = useLocation();
  const { username, balance } = state;
  const { transferMoney, isUsernameExist } = useDataProvider();
  const handleClick = (data) => {
    const { price, usernameToTransfer } = data;
    if (price === "" || price < 0) return setError("cannot be empty!");
    if (price > balance) return setError("we not allowed to be at overdraft");
    if (!isUsernameExist(usernameToTransfer)) return setError("username not exist");
    transferMoney(username, Number(price), usernameToTransfer);
    navigate("/user/current-account", { state: state });
  };
  const inp = [
    { name: "usernameToTransfer", type: "text" },
    { name: "price", type: "number" },
  ];
  return (
    <UserPage>
      <Input inpData={inp} onClick={handleClick} inpNumber={2} error={error} />
    </UserPage>
  );
};

export default TransferMoney;
