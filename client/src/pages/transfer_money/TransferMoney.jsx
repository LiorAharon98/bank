import Input from "../../components/input/Input";
import UserPage from "../../pages/user_page/UserPage";
import { useDataProvider } from "../../context/Data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const TransferMoney = () => {
  const { transferMoney,user } = useDataProvider();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { username, balance } = user;
  const handleClick = async(data)=> {
    const { price, usernameToTransfer } = data;
    if (price === "" || price < 0) return setError("cannot be empty!");
    if (price > balance) return setError("we not allowed to be at overdraft");
    const user = await transferMoney(username, Number(price), usernameToTransfer);
    if (!user) return setError('users not found')
    
    navigate("/user/current-account");
  };
  const inp = [
    { name: "usernameToTransfer", type: "text" },
    { name: "price", type: "number" },
  ];
  return (
    <UserPage>
      <Input text={"transfer"} inpData={inp} onClick={handleClick} inpNumber={2} error={error} />
    </UserPage>
  );
};

export default TransferMoney;
