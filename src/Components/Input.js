import React from "react";
import { motion } from "framer-motion";

const Input = ({ type, name, value, onChange, placeholder, required }) => {
  return (
    <motion.div className="w-full grid gap-1 transition-all ease-in-out  ">
      <label className={`uppercase font-semibold transition-all ease-in-out `}>
        {placeholder}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border-b-2 outline-none focus:border-green-200 px-4 p-1 rounded-md relative z-10 "
      />
    </motion.div>
  );
};

export default Input;
