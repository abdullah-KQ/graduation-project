import React from "react";
import "../../../general/general.css";
import "../../../RegisterPage/RegisterStudent/RegisterStudent.css";

const FieldrFormTextarea  = ({label_name, ID, label_class, type, input_class ,placeholder ,set}) => {
  return (
    <>
      <label htmlFor={ID} className={label_class}>
      {label_name}
      </label>
      <textarea  
        type={type}
        id={ID}
        className={input_class}
        onChange={(e) => set(e.target.value)}
        required
        placeholder={placeholder}
      >
        
      </textarea>
    </>
  );
};

export default FieldrFormTextarea ;
