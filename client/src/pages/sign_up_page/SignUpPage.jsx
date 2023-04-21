import { useDataProvider } from "../../context/Data";
import AuthenticationSign from "../../components/authentication_sign/AuthenticationSign";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingScreen from "../../components/loading_screen/LoadingScreen";
import SignCard from "../../components/sign_card/SignCard";
const SignUpPage = () => {
  const { addUser, scrollToTop } = useDataProvider();
  const [userError, setUserError] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const handleClick = async (data) => {
    setSpinner(true);
    data.username = data.username.trim()
    const response = await addUser(data);
    setSpinner(false);
    if (response) return setUserError("user already exist");
    navigate("/sign-in");
    scrollToTop();
  };

  return (
    <>
      {spinner && <LoadingScreen text={"creating user"} />}
    <SignCard>
      <AuthenticationSign userError={userError} page={"sign up"} onClick={handleClick} text={"sign up"} />
    </SignCard>
    </>
  );
};

export default SignUpPage;
