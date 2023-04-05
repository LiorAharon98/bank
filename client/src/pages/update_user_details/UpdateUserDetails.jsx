import React, { useState } from "react";
import { useDataProvider } from "../../context/Data";
import UserPage from "../../pages/user_page/UserPage";
import styles from "./update_user_details.module.css";
import Button from "../../components/button/Button";
import UserDetails from "../../components/user_details/UserDetails";
import { AiOutlineUpload } from "react-icons/ai";
const UpdateUserDetails = () => {
  const { changeLanguage, user, addPicture } = useDataProvider();
  const [img, setImg] = useState("");
  const addImg = (e) => {
    setImg(e.target.files[0]);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    addPicture(img);
    setImg("");
  };
  const { username, email } = user;
  const h3 = [
    { text: "username", label: `${changeLanguage("username")} : ${username}` },
    { text: "password", label: `${changeLanguage("password")}  : encrypted` },
    { text: "email", label: `${changeLanguage("email")} :  ${email} ` },
  ];
  return (
    <UserPage>
      {h3.map((h3, index) => (
        <UserDetails key={index} label={h3.label} />
      ))}
      {img && <Button text={"add"} to={"/"} onClick={clickHandler} />}
      <input onChange={addImg} className={styles.input_file} type="file" id="img_upload" />

      <div className={styles.user_container}>
        {h3.map((h3, index) => (
          <UserDetails key={index} text={h3.text} />
        ))}
        <label className={styles.upload_img_label} htmlFor="img_upload">
          {changeLanguage("upload")}
          <AiOutlineUpload className={styles.icon} />
        </label>
      </div>
    </UserPage>
  );
};

export default UpdateUserDetails;
