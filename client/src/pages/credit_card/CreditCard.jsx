import React from "react";
import { useDataProvider } from "../../context/Data";
import UserPage from "../user_page/UserPage";
import Button from "../../components/button/Button";
import ModalStyle from "../../components/modal_style/ModalStyle";
import ActiveCreditCard from "../../components/active_credit_card/ActiveCreditCard";
import { useState } from "react";
import InactiveCreditCard from "../../components/inactive_credit_card/InactiveCreditCard";
const CreditCard = () => {
  const { user, addCreditCard } = useDataProvider();
  const [toggleModal, setToggleModal] = useState(false);
  const { username, creditCard } = user;

  const clickHandler = (e) => {
    addCreditCard(username);
  };
  const toggleModalFunc = (e) => {
    e.preventDefault();
    setToggleModal(true);
  };
  const toggleModalFunc2 = () => {
    setToggleModal(false);
  };
  return (
    <UserPage>
      <ModalStyle toggleFunc={toggleModalFunc2} action={"order"} toggle={toggleModal} func={clickHandler} />

      {!creditCard ? (
        <InactiveCreditCard toggleModalFunc={toggleModalFunc} />
      ) : (
        <ActiveCreditCard creditCard={creditCard} />
      )}
    </UserPage>
  );
};

export default CreditCard;
