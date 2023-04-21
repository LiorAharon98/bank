import React, { useState } from "react";
import AuthenticationSign from "../../components/authentication_sign/AuthenticationSign";
import LoadingScreen from "../../components/loading_screen/LoadingScreen";
import { useDataProvider } from "../../context/Data";
import { useNavigate, Link } from "react-router-dom";
import SignCard from "../../components/sign_card/SignCard";
import styles from "./sign_in_page.module.css";
import { useEffect } from "react";

const SignInPage = () => {
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { specificUser, scrollToTop, changeLanguage } = useDataProvider();
  const handleClick = async (data) => {
    setSpinner(true);
    let { username, password } = data;
    console.log(username)
    username = username.trim()
    if (username === "Admin" && password === "1111") return navigate("/admin");
    const responseUser = await specificUser(username, password);
    setSpinner(false);

    if (!responseUser) return setError("user not found");
    navigate("/user/current-account");
    scrollToTop();
  };

  return (
    <>
      {spinner && <LoadingScreen text={"searching user"} />}
      <SignCard page={"sign in"}>
        <AuthenticationSign userError={error} onClick={handleClick} text={"sign in"} />
      </SignCard>
    </>
  );
};

export default SignInPage;
