import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDataProvider } from "../../context/Data";
import Button from "../button/Button";
const UserDetails = ({ text, label }) => {
  const [toggleInp, setToggleInp] = useState(false);
  const { user, changeLanguage } = useDataProvider();

  const inpRef = useRef();
  const clickHandler = (e) => {
    e.preventDefault();
    if (!toggleInp) return setToggleInp(true);

    const info = { info: text, value: inpRef.current.value };
    user.method().changeDetails(info);
    setToggleInp(false);
  };
  return (
    <>
      {toggleInp && <input ref={inpRef} placeholder="fill" />}
      {label && <h3>{changeLanguage(label)}</h3>}

      {text && <Button onClick={clickHandler} to={"/"} text={toggleInp ? "apply" : `change ${text}`} />}
    </>
  );
};

export default UserDetails;
