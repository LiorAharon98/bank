import React from "react";
import InputValidation from "../input_validation/InputValidation";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import styles from "./input.module.css";
import ModelStyle from "../modal_style/ModalStyle";
import { useDataProvider } from "../../context/Data";
const Input = ({ onClick, inpNumber, inpData, error, rules, text, toggle, toggleFunc }) => {
  const {changeLanguage} = useDataProvider()
  const inp = new Array(inpNumber).fill(1);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <div className={styles.container}>
    
      <ModelStyle  toggle ={toggle} action={text} func={handleSubmit(onClick)} toggleFunc={toggleFunc} />
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

      <Button text={text} onClick={toggleFunc.bind(this, true)} />
      {error && 
      <div className={styles.error_container}>

      <p className={styles.error_tag}>{changeLanguage(error)} !</p>
      </div>
      }
  
    </div>
  );
};

export default Input;
