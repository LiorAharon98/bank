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
          <div className={styles.inp_label_container}>
          <label htmlFor={name}>{changeLanguage(name)}</label>
            <input
            
              id={name}
              style={{ borderBottomColor: error && "red" , }}
              className={styles.input}
              type={type}
              name={name}
              {...field}
            />
            {error && <p id={styles.error}>{changeLanguage(error.message)}</p>}
          </div>
        );
      }}
    />
  );
};

export default InputValidation;
