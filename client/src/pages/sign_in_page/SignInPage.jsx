import React, { useState } from "react";
import Authentication from "../../components/authentication_sign/AuthenticationSign";
import { useDataProvider } from "../../context/Data";
import { useNavigate } from "react-router-dom";
const SignInPage = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setSpecificUsername, isUsernameExist, specificUser } = useDataProvider();
  const handleClick = async (data) => {
    const { username, password } = data;
    if (username === "Admin" && password === "1111") return navigate("/admin");
    const user = await specificUser(username, password);
    if (!user) return setError("user not found");
    navigate("/user/current-account");
  };
  return <Authentication userError={error} onClick={handleClick} text={"sign in"} />;
};

export default SignInPage;
