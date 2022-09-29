import Authentication from "../../components/authentication_page/Authentication";
import { useDataProvider } from "../../context/Data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignUpPage = () => {
  const { addUser, duplicateUsers } = useDataProvider();
  const [userError, setUserError] = useState(false);
  const navigate = useNavigate();
  const handleClick = (data) => {
    if (duplicateUsers(data.username)) return setUserError("user already exist");
    addUser(data);
    navigate("/sign-in");
  };
  return (
    <>
      <Authentication userError={userError} page={"sign up"} onClick={handleClick} text={"sign up"}></Authentication>
    </>
  );
};

export default SignUpPage;
