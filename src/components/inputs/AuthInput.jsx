import React from "react";

const AuthInput = ({ Icon, Value, Type, setValue, placeholder }) => {
  return (
    <div className="flex items-center gap-x-2 border-black border-2 rounded-lg overflow-hidden px-3 py-3 w-[350px]">
      <Icon className="text-2xl" />
      <input
        type={Type}
        value={Value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className="w-full outline-none bg-transparent text-xl"
      />
    </div>
  );
};

export default AuthInput;
