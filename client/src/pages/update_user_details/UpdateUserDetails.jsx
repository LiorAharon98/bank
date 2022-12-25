import React from "react";
import { useDataProvider } from "../../context/Data";
import UserPage from "../../pages/user_page/UserPage";
import styles from "./update_user_details.module.css";
import Button from "../../components/button/Button";
const UpdateUserDetails = () => {
  const { changeLanguage, user,changeDetails } = useDataProvider();
  const { username, password, email } = user;
  const h3 = [{text : 'username' , label : username }, {text : 'password' , label : password},{text : 'email', label : email}]
  return (
    <UserPage>
      <input className={styles.input_file} type="file" id="img_upload" />
      <label className={styles.upload_img_label} htmlFor="img_upload">
         {changeLanguage('upload profile picture')}
      </label>
   {h3.map((h3,index)=> <>
    <h3 key={index}>{`${changeLanguage(h3.text)} : ${h3.label}`}</h3>
    <Button to={'/'} text={`change ${h3.text}`}/>
   </>)}
    </UserPage>
  );
};

export default UpdateUserDetails;
