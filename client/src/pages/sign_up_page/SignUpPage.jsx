import { useDataProvider } from "../../context/Data";
import AuthenticationSign from "../../components/authentication_sign/AuthenticationSign";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./sign_up_page.module.css";
import SignCard from "../../components/sign_card/SignCard";
const SignUpPage = () => {
  const { addUser, specificUser, scrollToTop, changeLanguage } = useDataProvider();
  const [userError, setUserError] = useState(false);
  const navigate = useNavigate();
  const handleClick = async (data) => {
    const response = await addUser(data);
    if (response) return setUserError("user already exist");
    navigate("/sign-in");
    scrollToTop();
  };

  return (
    <SignCard>
      <AuthenticationSign userError={userError} page={"sign up"} onClick={handleClick} text={"sign up"} />

    </SignCard>
  );
};

export default SignUpPage;
