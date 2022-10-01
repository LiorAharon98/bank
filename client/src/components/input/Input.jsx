import React from "react";
import InputValidation from "../input_validation/InputValidation";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import styles from "./input.module.css";
const Input = ({ onClick, inpNumber, inpData, error, rules }) => {
  const inp = new Array(inpNumber).fill(1);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <div className={styles.container}>
      {inp.map((inp, index) => {
        return (
          <InputValidation
            key={index}
            type={inpData[index].type}
            name={inpData[index].name}
            control={control}
            rules={rules}
          />
        );
      })}

      <Button text={"transfer"} onClick={handleSubmit(onClick)} />
      {error && <p className={styles.error_tag}>{error} !</p>}
    </div>
  );
};

export default Input;
