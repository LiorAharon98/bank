import React from "react";
import Button from "../button/Button";
const InactiveCreditCard = ({toggleModalFunc}) => {
  return (
    <>
      <h2>dont have credit card would you like to order? </h2>
      <Button text={"order card"} to={"/"} onClick={toggleModalFunc} />
    </>
  );
};

export default InactiveCreditCard;
