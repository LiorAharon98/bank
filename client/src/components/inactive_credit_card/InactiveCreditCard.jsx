import React from "react";
import Button from "../button/Button";
const InactiveCreditCard = ({toggleModalFunc}) => {
  return (
    <>
      <h3>dont have credit card would you like to order? </h3>
      <Button text={"order card"} to={"/"} onClick={toggleModalFunc} />
    </>
  );
};

export default InactiveCreditCard;
