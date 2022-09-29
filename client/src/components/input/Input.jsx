import React from "react";
import InputValidation from "../input_validation/InputValidation";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import { useDataProvider } from "../../context/Data";
import styles from "./input.module.css";
const Input = ({ onClick, inpNumber, inpData,error }) => {
  const inp = new Array(inpNumber).fill(1);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    username: "",
    price: "",
  });
  return (
    <div className={styles.container}>
      {inp.map((inp, index) => {
        return <InputValidation key={index} type={inpData[index].type} name={inpData[index].name} control={control} rules={{required : 'fill please', minLength : {value : 2, message : 'must be at least 2 char'}}}  />;
      })}

      <Button text={"transfer"} onClick={handleSubmit(onClick)} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
