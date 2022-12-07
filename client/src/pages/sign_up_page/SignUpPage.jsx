import Authentication from "../../components/authentication_sign/AuthenticationSign";
import { useDataProvider } from "../../context/Data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import SignCard from "../../components/sign_card/SignCard";
const SignUpPage = () => {
  const { addUser, specificUser, scrollToTop, changeLanguage } = useDataProvider();
  const [userError, setUserError] = useState(false);
  const navigate = useNavigate();
  const handleClick = async (data) => {
    const { username, password } = data;
    const response = await specificUser(username, password);
    if (response) return setUserError("user already exist");
    addUser(data);
    navigate("/sign-in");
    scrollToTop();
  };
  return (
    <SignCard>
      <Authentication userError={userError} page={"sign up"} onClick={handleClick} text={"sign up"} />
      <Link to={"/sign-in"}>{changeLanguage("already have an account")}?</Link>
    </SignCard>
  );
};

export default SignUpPage;
