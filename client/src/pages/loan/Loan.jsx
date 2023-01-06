import Input from "../../components/input/Input";
import UserPage from "../../pages/user_page/UserPage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDataProvider } from "../../context/Data";
import Button from "../../components/button/Button";

const Loan = () => {
  const navigate = useNavigate();
  const { loanMoney, changeLanguage, user, scrollToTop } = useDataProvider();

  const {  expense, maxLoan,_id } = user;

  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(false);
  const inpData = [{ name: "price", type: "number" }];
  const toggleFunc = (value) => {
    setToggle(value);
  };
  const handleClick = (data) => {
    if (data.price > maxLoan) return [setError("request has been declined"), toggleFunc(false)];
    loanMoney(_id, Number(data.price), expense);
    navigate("/user/current-account");
    scrollToTop();
  };
  return (
    <UserPage>
      <Input
        toggle={toggle}
        toggleFunc={toggleFunc}
        text={"loan"}
        inpNumber={1}
        inpData={inpData}
        error={error}
        onClick={toggle ? handleClick : toggleFunc.bind(this, true)}
        rules={{ required: "fill please", minLength: { value: 2, message: "must be at least 2 char" } }}
      />
       <Button text={'loan'} onClick={toggleFunc.bind(this, true)} />
      <h2>
        {changeLanguage("max loan")} {maxLoan} ₪
      </h2>
    </UserPage>
  );
};

export default Loan;
