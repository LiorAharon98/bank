import React from "react";
import styles from "./authentication_sign.module.css";
import InputValidation from "../input_validation/InputValidation";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { useDataProvider } from "../../context/Data";
const AuthenticationSign = ({ onClick, page, userError }) => {
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
  const regex = "@gmail.com";

  const checkEqualPassword = watch("password");
  const showPassword = () => {
    setIsPasswordShow((prev) => {
      return prev === "password" ? "text" : "password";
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.page_container} onClick={handleFormSubmit}>
      <div className={styles.container}>
        <div className={styles.sign_in}>
          <p className={styles.sign_tag}>{changeLanguage(page === "sign up" ? "sign up" : "sign in")}</p>
          <InputValidation
            type={"text"}
            control={control}
            name={"username"}
            rules={{
              required: "fill please",
              minLength: { value: 4, message: "should be at least 4 char" },
              maxLength: { value: 10, message: "should be at max 10 char" },
            }}
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
              rules={{
                required: "fill please",
                minLength: { value: 9, message: "should be at least 9 char" },
                validate: (value) => value.includes(regex) || "email invaild",
              }}
            />
            <InputValidation
              type={"number"}
              control={control}
              name={"income"}
              rules={{ required: "fill please", minLength: { value: 3, message: "should be at least 3 char" } }}
            />
          </div>
        )}
        <div className={styles.button_container}>
          <button onClick={handleSubmit(onClick)} className={styles.button} type="submit">
            {changeLanguage(page === "sign up" ? "sign up" : "sign in")}
          </button>
          {page !== "sign up" ? (
            <Link style={{ color: "rgb(1, 165, 247)" }} to={"/sign-up"}>
              {changeLanguage("dont have an account")}?
            </Link>
          ) : (
            <Link style={{ color: "rgb(1, 165, 247)" }} to={"/sign-in"}>
              {changeLanguage("already have an account")}?
            </Link>
          )}
        </div>
      </div>
    </form>
  );
};

export default AuthenticationSign;
