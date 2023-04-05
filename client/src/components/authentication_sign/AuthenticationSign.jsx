import React from "react";
import Button from "../button/Button";
import styles from "./authentication_sign.module.css";
import InputValidation from "../input_validation/InputValidation";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { useDataProvider } from "../../context/Data";
const AuthenticationSign = ({ text, onClick, page, userError }) => {
  const [passwordShow, setIsPasswordShow] = useState("password");
  const { changeLanguage } = useDataProvider();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    username: "",
    email: "",
    password: "",
    "confirm password": "",
    income: "",
  });

  const checkEqualPassword = watch("password");

  const showPassword = () => {
    setIsPasswordShow((prev) => {
      return prev === "password" ? "text" : "password";
    });
  };
  return (
    <div style={{ height: "80%", width: "100%" }}>
      <div className={styles.container}>
        <div className={styles.sign_in}>
          <p className={styles.sign_tag}>{changeLanguage(page === "sign up" ? "sign up" : "sign in")}</p>
          <InputValidation
            type={"text"}
            control={control}
            name={"username"}
            rules={{ required: "fill please", minLength: { value: 3, message: "should be at least 3 char" } }}
          />
          <div className={styles.input_password}>
            <InputValidation
              type={passwordShow}
              control={control}
              name={"password"}
              rules={{ required: "fill please", minLength: { value: 3, message: "should be at least 3 char" } }}
            />
            {passwordShow === "password" ? (
              <MdOutlineVisibility className={styles.password_icon} onClick={showPassword} />
            ) : (
              <AiOutlineEyeInvisible className={styles.password_icon} onClick={showPassword} />
            )}
          </div>

          {userError && <p id={styles.user_error}>{changeLanguage(userError)}</p>}
        </div>
        {page === "sign up" && (
          <div className={styles.sign_up}>
            <InputValidation
              type={passwordShow}
              control={control}
              name={"confirm password"}
              rules={{
                required: "fill please",
                minLength: { value: 3, message: "should be at least 3 char" },
                validate: (value) => value === checkEqualPassword || "password not match!",
              }}
            />
            <InputValidation
              type={"email"}
              control={control}
              name={"email"}
              rules={{ required: "fill please", minLength: { value: 3, message: "should be at least 3 char" } }}
            />
            <InputValidation
              type={"number"}
              control={control}
              name={"income"}
              rules={{ required: "fill please", minLength: { value: 3, message: "should be at least 3 char" } }}
            />
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height : 120 }}>
          <p></p>
          <Button onClick={handleSubmit(onClick)} text={text} to={"/user"}>
            {page !== "sign up" ? (
              <Link style={{ color: "rgb(1, 165, 247)" }} to={"/sign-up"}>
                {changeLanguage("dont have an account")}?
              </Link>
            ) : (
              <Link style={{ color: "rgb(1, 165, 247)" }} to={"/sign-in"}>
                {changeLanguage("already have an account")}?
              </Link>
            )}
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AuthenticationSign;
