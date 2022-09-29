import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import UserPage from "../../pages/user_page/UserPage";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDataProvider } from "../../context/Data";
const Loan = () => {
  const navigate = useNavigate();
  const { loanMoney } = useDataProvider();
  const { state } = useLocation();
  const { username } = state;
  const inpData = [{ name: "price", type: "number" }];
  const handleClick = (data) => {
    loanMoney(username, data.price);
    navigate("/user/current-account", { state: state });
  };
  return (
    <UserPage>
      <Input inpNumber={1} inpData={inpData} onClick={handleClick} />
    </UserPage>
  );
};

export default Loan;
