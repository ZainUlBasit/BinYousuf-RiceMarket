import React from "react";
import TextField from "@mui/material/TextField";
import "./CustomInput.css";

const CustomInput = ({
  Type,
  label,
  placeholder,
  required,
  Value,
  setValue,
  readonly,
  disabled,
  id,
}) => {
  return (
    <div className="relative w-[350px] maxInputWidth bg-white font-[Quicksand]">
      <input
        type={Type ? Type : "text"}
        required={required}
        id={id}
        placeholder={placeholder}
        className="px-5 py-4 border-[1.5px] border-black rounded-[7.94px] w-full outline-none InputText text-black font-bold"
        value={Value}
        readOnly={readonly ? readonly : false}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled ? disabled : false}
      />
    </div>
  );
};

export default CustomInput;
