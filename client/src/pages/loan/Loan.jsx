import Input from "../../components/input/Input";
import UserPage from "../../pages/user_page/UserPage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDataProvider } from "../../context/Data";
import Button from "../../components/button/Button";
import styles from "./loan.module.css";
const Loan = () => {
  const navigate = useNavigate();
  const { changeLanguage, user, scrollToTop, cookies } = useDataProvider();
  const { maxLoan } = user;
  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(false);
  const inpData = [{ name: "price", type: "number" }];
  const toggleFunc = (value) => {
    setToggle(value);
  };
  const handleClick = async (data) => {
    if (data.price > maxLoan) return [setError("request has been declined"), toggleFunc(false)];
    await user.method().loan(Number(data.price));
    navigate("/user/current-account");
    scrollToTop();
  };
  return (
    <UserPage>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <p>
            {changeLanguage("your balance")} : {user.balance}₪
          </p>
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

          <Button text={"loan"} onClick={toggleFunc.bind(this, true)} />

          <h2>
            {changeLanguage("max loan")} {maxLoan} ₪
          </h2>
        </div>
      </div>
    </UserPage>
  );
};

export default Loan;
