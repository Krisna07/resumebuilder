import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = ({ setForm }) => {
  const [signup, setSignUp] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="grid gap-4 place-items-center"
      onSubmit={submitForm}>
      <lable className=" w-full flex gap-4">
        <input
          placeholder="Email"
          className="w-full px-4 py-1 rounded-lg outline-none border-none shadow"
        />
      </lable>
      <lable className="w-full flex gap-4">
        <input
          placeholder="Password"
          className="w-full px-4 py-1 rounded-lg outline-none border-none shadow"
        />
      </lable>
      <div className="grid gap-1 place-items-center">
        <span>
          Forgot password? <span className="text-sky-300">Reset</span>
        </span>
        <button className="bg-green-200 px-4 py-1 rounded-full w-fit">
          Login
        </button>
        <hr></hr>
        <button
          className="bg-green-200 px-4 py-1 rounded-full w-fit"
          onClick={() => setForm(false)}>
          Sign up
        </button>
        <button className=" px-4 py-1 rounded-full w-fit flex gap-4">
          <FaGoogle className="p-2 bg-white text-black text-[32px] rounded-full" />{" "}
          <FaFacebook className="text-[32px]" />
        </button>
      </div>
    </form>
  );
};

export default Login;
