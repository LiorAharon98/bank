import React from "react";
import Button from "../button/Button";
import styles from "./authentication_sign.module.css";
import InputValidation from "../input_validation/InputValidation";
import { useForm } from "react-hook-form";
const Authentication = ({ text, onClick, page, userError }) => {
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
  return (
    <div className={styles.container}>
      <div style={{ height: text === "sign in" && "70%" }} className={styles.authentication_container}>
        <InputValidation
          type={"text"}
          control={control}
          name={"username"}
          rules={{ required: "fill please", minLength: { value: 3, message: "should be at least 3 char" } }}
        />
        <InputValidation
          type={"password"}
          control={control}
          name={"password"}
          rules={{ required: "fill please", minLength: { value: 3, message: "should be at least 3 char" } }}
        />
        {page === "sign up" && (
          <>
            <InputValidation
              type={"password"}
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
          </>
        )}
        {userError && <p id={styles.user_error}>{userError}</p>}
        <Button onClick={handleSubmit(onClick)} text={text} to={"/user"} />

        {page === "sign up" && <Button style={{height : '10px'}} to={"/sign-in"} text={"already have an account?"}></Button>}
      </div>
    </div>
  );
};

export default Authentication;
