import Input from "../../components/input/Input";
import UserPage from "../../pages/user_page/UserPage";
import { useDataProvider } from "../../context/Data";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useState } from "react";
import styles from "./transfer_money.module.css";
const TransferMoney = () => {
  const { transferMoney, user, scrollToTop } = useDataProvider();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(false);
  const toggleFunc = (value) => {
    setToggle(value);
  };
  const { balance, expense, _id } = user;
  const handleClick = async (data) => {
    const { price, usernameToTransfer } = data;
    if (price === "" || price < 0) return setError("please fill data");
    // if (price > balance) return setError("we not allowed to be at overdraft");
    const user = await transferMoney(_id, Number(price), usernameToTransfer, expense);
    if (!user) {
      return [setError("users not found"), toggleFunc(false)];
    }

    navigate("/user/current-account");
    scrollToTop();
  };
  const inp = [
    { name: "usernameToTransfer", type: "text" },
    { name: "price", type: "number" },
  ];
  return (
    <UserPage>
      <div className={styles.container}>
      <p>your income : {user.balance}</p> 
          <Input
            toggle={toggle}
            toggleFunc={toggleFunc}
            text={"transfer"}
            inpData={inp}
            onClick={handleClick}
            inpNumber={2}
            error={error}
          />
        <div>
          <Button text={"transfer"} onClick={toggleFunc.bind(this, true)} />
        </div>
     
     </div>
    </UserPage>
  );
};

export default TransferMoney;
