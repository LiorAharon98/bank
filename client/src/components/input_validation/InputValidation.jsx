import React from "react";
import styles from "./input_validation.module.css";
import { Controller } from "react-hook-form";
import { useDataProvider } from "../../context/Data";
const InputValidation = ({ type, name, control, rules }) => {
  const {changeLanguage} = useDataProvider()
  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <input
              style={{ border: error && "1px solid red" }}
              className={styles.input}
              type={type}
              placeholder={changeLanguage(name)}
              name={name}
              {...field}
            />
            {error && <p id={styles.error}>{error.message}</p>}
          </>
        );
      }}
    />
  );
};

export default InputValidation;
