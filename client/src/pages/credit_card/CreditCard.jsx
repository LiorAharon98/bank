import React from "react";
import { useDataProvider } from "../../context/Data";
import UserPage from "../user_page/UserPage";
import ModalStyle from "../../components/modal_style/ModalStyle";
import ActiveCreditCard from "../../components/active_credit_card/ActiveCreditCard";
import { useState } from "react";
import InactiveCreditCard from "../../components/inactive_credit_card/InactiveCreditCard";
const CreditCard = () => {
  const { user } = useDataProvider();
  const [toggleModal, setToggleModal] = useState(false);
  const { username, creditCard } = user;

  const clickHandler = async () => {
    await user.method.addCreditCard(username);
    setToggleModal(false);
  };
  const toggleModalFunc = (value, e) => {
    if (value) e.preventDefault();
    setToggleModal(value);
  };

  return (
    <UserPage>
      <ModalStyle
        toggleFunc={toggleModalFunc.bind(this, false)}
        action={"order"}
        toggle={toggleModal}
        func={clickHandler}
      />

      {!creditCard ? (
        <InactiveCreditCard toggleModalFunc={toggleModalFunc.bind(this, true)} />
      ) : (
        <ActiveCreditCard creditCard={creditCard} />
      )}
    </UserPage>
  );
};

export default CreditCard;
