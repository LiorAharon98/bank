import React from "react";
import Input from "../../components/input/Input";
import UserPage from "../../pages/user_page/UserPage";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDataProvider } from "../../context/Data";
const Loan = () => {
  const navigate = useNavigate();
  const { loanMoney } = useDataProvider();
  const { state } = useLocation();
  const { username, income } = state;
  const [error, setError] = useState("");
  const inpData = [{ name: "price", type: "number" }];
  const maxLoan = Math.floor((income * 70) / 100);
  const handleClick = (data) => {
    if (data.price > maxLoan) return setError("request has been declined");
    loanMoney(username, Number(data.price));
    navigate("/user/current-account", { state: state });
  };
  return (
    <UserPage>
      <Input
        inpNumber={1}
        inpData={inpData}
        error={error}
        onClick={handleClick}
        rules={{ required: "fill please", minLength: { value: 2, message: "must be at least 2 char" } }}
      />
      <h2>max loan is {maxLoan} ₪</h2>
    </UserPage>
  );
};

export default Loan;
