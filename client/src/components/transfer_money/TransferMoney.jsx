import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import UserPage from "../../pages/user_page/UserPage";
import { useDataProvider } from "../../context/Data";
import { useLocation } from "react-router-dom";
const TransferMoney = () => {
  const { state } = useLocation();
  const { username} = state;
  const { transferMoney } = useDataProvider();
  const [usernameToTransfer, setUsernameToTransfer] = useState("");
  const [price, setPrice] = useState("");
  const handleClick = () => {
    transferMoney(username, price, usernameToTransfer);
  };
  return (
    <UserPage>
      <Input
        onChange={(e) => {
          setUsernameToTransfer(e.target.value);
        }}
        type={"text"}
        placeHolder="username"
      />
      <Input
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        type={"number"}
        placeHolder="price"
      />
      <Button text={"transfer"} onClick={handleClick} />
    </UserPage>
  );
};

export default TransferMoney;
