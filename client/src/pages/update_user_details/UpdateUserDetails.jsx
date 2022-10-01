import React from "react";
import { useLocation } from "react-router-dom";
import { useDataProvider } from "../../context/Data";
import UserPage from "../../pages/user_page/UserPage";
import styles from "./update_user_details.module.css";
const UpdateUserDetails = () => {
  const { state } = useLocation();
  const { username, password, email } = state;
  const { changeLanguage } = useDataProvider();
  return (
    <UserPage>
      <input className={styles.input_file} type="file" id="img_upload" />
      <label className={styles.upload_img_label} htmlFor="img_upload">
        upload profile picture
      </label>
      <h2>
        {" "}
        {changeLanguage("username")} : {username}
      </h2>
      <h2>
        {" "}
        {changeLanguage("password")} : {password}
      </h2>
      <h2>
        {" "}
        {changeLanguage("email")} : {email}
      </h2>
    </UserPage>
  );
};

export default UpdateUserDetails;
