import React, { useState } from "react";
import Authentication from "../../components/authentication_sign/AuthenticationSign";
import LoadingScreen from "../../components/loading_screen/LoadingScreen";
import { useDataProvider } from "../../context/Data";
import { useNavigate,Link } from "react-router-dom";
import SignCard from "../../components/sign_card/SignCard";


const SignInPage = () => {
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { specificUser, scrollToTop,changeLanguage } = useDataProvider();
  const handleClick = async (data) => {
    setSpinner(true);
    const { username, password } = data;
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
      <SignCard page={'sign in'}>
        <Authentication userError={error} onClick={handleClick} text={"sign in"} />
        <Link to={"/sign-up"}>{changeLanguage("register")}?</Link>
      </SignCard>
    </>
  );
};

export default SignInPage;
