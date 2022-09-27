import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import UserPage from "../../pages/user_page/UserPage";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDataProvider } from "../../context/Data";
const Loan = () => {
  const [priceInp, setPriceInp] = useState();
  const { loanMoney } = useDataProvider();
  const { state } = useLocation();
  const { username } = state;
const handleClick =()=>{
  loanMoney(username,priceInp)
}
  return (
    <UserPage>
      <Input
        onChange={(e) => {
          setPriceInp(e.target.value);
        }}
        placeHolder={"price"}
      />
      <Button onClick={handleClick} text={"loan"} />
    </UserPage>
  );
};

export default Loan;
