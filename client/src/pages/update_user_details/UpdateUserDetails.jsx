import React, { useState } from "react";
import { useDataProvider } from "../../context/Data";
import UserPage from "../../pages/user_page/UserPage";
import styles from "./update_user_details.module.css";
import Button from "../../components/button/Button";
import UserDetails from "../../components/user_details/UserDetails";
import { useEffect } from "react";
const UpdateUserDetails = () => {
  const { changeLanguage, user, addPicture } = useDataProvider();
  const [img, setImg] = useState("");
  const addImg = (e) => {
    setImg(e.target.files[0]);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    addPicture(img);
  };
  const { username, password, email } = user;
  const h3 = [
    { text: "username", label: username },
    { text: "password", label: password },
    { text: "email", label: email },
  ];
  return (
    <UserPage>
      <input onChange={addImg} className={styles.input_file} type="file" id="img_upload" />
      <label className={styles.upload_img_label} htmlFor="img_upload">
        {img && <Button text={"add"} to={"/"} onClick={clickHandler} />}
        {changeLanguage("upload profile picture")}
      </label>
      {h3.map((h3, index) => (
        <UserDetails key={index} label={h3.label} text={h3.text} />
      ))}
    </UserPage>
  );
};

export default UpdateUserDetails;
