import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Login from "./Login";

const Signup = () => {
  const [login, setLogin] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
  };
  const setForm = (bool) => {
    setLogin(bool);
  };
  return (
    <div className="absolute p-4 right-0 top-16 bg-gray-400 z-10 rounded">
      <div>
        {login ? (
          <Login setForm={setForm} />
        ) : (
          <form
            className="grid gap-4 place-items-center"
            onSubmit={submitForm}>
            <lable className="w-full flex gap-4">
              <input
                placeholder="Firstname"
                className="px-4 py-1 rounded-lg outline-none border-none shadow"
              />
              <input
                placeholder="Lastname"
                className="px-4 py-1 rounded-lg outline-none border-none shadow"
              />
            </lable>
            <lable className=" w-full flex gap-4">
              <input
                placeholder="Email"
                className="w-full px-4 py-1 rounded-lg outline-none border-none shadow"
              />
            </lable>
            <lable className="w-full flex gap-4">
              <input
                placeholder="Phone"
                className="w-full px-4 py-1 rounded-lg outline-none border-none shadow"
              />
            </lable>
            <lable className="w-full flex gap-4">
              <input
                placeholder="Password"
                className="w-full px-4 py-1 rounded-lg outline-none border-none shadow"
              />
            </lable>
            <lable className="w-full flex gap-4">
              <input
                placeholder="Re-type Password"
                className="w-full px-4 py-1 rounded-lg outline-none border-none shadow"
              />
            </lable>
            <div className="grid gap-2 place-items-center">
              {" "}
              <span>
                Already a member?{" "}
                <span
                  className="text-sky-300"
                  onClick={() => setForm(true)}>
                  Login
                </span>
              </span>
              <button className="bg-green-200 px-4 py-1 rounded-full w-fit">
                Signup
              </button>
              <button className=" px-4 py-1 rounded-full w-fit flex gap-4">
                <FaGoogle className="p-2 bg-white text-black text-[32px] rounded-full" />{" "}
                <FaFacebook className="text-[32px]" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
