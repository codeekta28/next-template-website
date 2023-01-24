import React from "react";
import styles from "../../styles/InputCompo.module.css";

function InputCompo({ register,type, name, placeHolder, onChange, value }) {
  return (
    <>
      <input
      {...register}
        className={styles.input}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        placeholder={placeHolder}
        
      
      />
    </>
  );
}

export default InputCompo;
