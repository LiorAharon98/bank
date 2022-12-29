import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDataProvider } from "../../context/Data";
import Button from "../button/Button";
import Input from "../input/Input";
const UserDetails = ({ text, label }) => {
  const [toggleInp, setToggleInp] = useState(false);
  const { changeDetails, user } = useDataProvider();

  const inpRef = useRef();
  const clickHandler = (e) => {
    e.preventDefault();
    if (!toggleInp) return setToggleInp(true);

    const info = { info: text, value: inpRef.current.value, id: user._id };
    changeDetails(info);
    setToggleInp(false);
  };
  return (
    <>
      <h3>
        {text} : {label}
      </h3>
      {toggleInp && <input ref={inpRef} placeholder="fill" />}
      <Button onClick={clickHandler} to={"/"} text={toggleInp ? "apply" : `change ${text}`} />
    </>
  );
};

export default UserDetails;
