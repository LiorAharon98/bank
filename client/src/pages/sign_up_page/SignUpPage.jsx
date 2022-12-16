import Authentication from "../../components/authentication_sign/AuthenticationSign";
import { useDataProvider } from "../../context/Data";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./sign_up_page.module.css"
import SignCard from "../../components/sign_card/SignCard";
const SignUpPage = () => {
  const { addUser, specificUser, scrollToTop, changeLanguage,onDisplayFooter } = useDataProvider();
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
  useEffect(()=>{
    onDisplayFooter(false)

  },[])
  return (
    <SignCard >
      <h3 className={styles.sign_tag} >sign up</h3>
      <Authentication userError={userError} page={"sign up"} onClick={handleClick} text={"sign up"} />
      <Link style={{ color: "rgb(1, 165, 247)" }} to={"/sign-in"}>
        {changeLanguage("already have an account")}?
      </Link>
    </SignCard>
  );
};

export default SignUpPage;
