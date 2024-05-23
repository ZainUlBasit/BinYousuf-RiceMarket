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
    <div className="relative w-[300px] maxInputWidth bg-white font-[Quicksand]">
      <div className="absolute top-[-13px] left-3 bg-white text-black text-lg font-bold InputLabel">
        {label}
      </div>
      <input
        type={Type ? Type : "text"}
        required={required}
        id={id}
        placeholder={placeholder}
        className="px-3 py-3 border-[1.5px] border-black rounded-[7.94px] w-full outline-none InputText text-black font-bold"
        value={Value}
        readOnly={readonly ? readonly : false}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled ? disabled : false}
      />
    </div>
  );
};

export default CustomInput;
