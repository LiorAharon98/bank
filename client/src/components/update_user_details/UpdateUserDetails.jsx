import React from "react";
import { useLocation } from "react-router-dom";
import { useDataProvider } from "../../context/Data";
import UserPage from "../../pages/user_page/UserPage";
import styles from "./update_user_details.module.css"
const UpdateUserDetails = () => {
  const { state } = useLocation();
  const { username, password, email } = state;
  const { changeLanguage } = useDataProvider();
  return (
    <UserPage>
        <input className={styles.input_file}  type="file" id="img_upload" />
        <label className={styles.upload_img_label}  htmlFor="img_upload">upload profile picture</label>
      <h1>
        {" "}
        {changeLanguage("username")} : {username}
      </h1>
      <h1>
        {" "}
        {changeLanguage("password")} : {password}
      </h1>
      <h1>
        {" "}
        {changeLanguage("email")} : {email}
      </h1>
    </UserPage>
  );
};

export default UpdateUserDetails;
