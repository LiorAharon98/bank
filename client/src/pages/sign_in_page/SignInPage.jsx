import React, { useState } from "react";
import Authentication from "../../components/authentication_page/Authentication";
import { useDataProvider } from "../../context/Data";
import { useNavigate } from "react-router-dom";
const SignInPage = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { specificUser } = useDataProvider();
  const handleClick = (data) => {
    const { username, password } = data;
    if (username === "Admin" && password === "1111") return navigate("/admin");
    if (!specificUser(username, password))    return setError('user not found');
  navigate("/user/current-account", { state: specificUser(username, password) });
  
  };
  return <Authentication userError={error} onClick={handleClick} text={"sign in"} />;
};

export default SignInPage;
