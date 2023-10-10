import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import {
  FaBuilding,
  FaList,
  FaPlus,
  FaRegUser,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import Greenglance from "./Components/Greenglance";

function App() {
  const [username, setUsername] = useState({
    firstname: null,
    lastname: null,
  });

  return (
    <div className=" ">
      <Header />
      <div className="w-[1400px] grid grid-cols-2 py-4 p-4">
        <div>
          <form>
            <div className="grid gap-4 p-4">
              <div className="flex items-center gap-4 border-b py-2">
                <span className="text-xl font-[600]"> Profile</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaRegUser />
                </div>
              </div>
              <label className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Firstname"
                  className="border-b-2 outline-none focus:border-green-200"
                />
                <input
                  placeholder="Lastname"
                  className="border-b-2 outline-none focus:border-green-200"
                />
              </label>
              <label className="flex gap-2">
                <input
                  type="number"
                  placeholder="Phone"
                  className="w-full border-b-2 outline-none focus:border-green-200"
                />
              </label>
              <label className="flex gap-2">
                <input
                  type=""
                  placeholder="Street"
                  className="w-full border-b-2 outline-none focus:border-green-200"
                />
                <input
                  type=""
                  placeholder="State"
                  className="w-full border-b-2 outline-none focus:border-green-200"
                />
                <input
                  type=""
                  placeholder="Postcode"
                  className="w-full border-b-2 outline-none focus:border-green-200"
                />
              </label>
            </div>
            <div className=" p-4">
              <div className="flex items-center gap-4 py-2">
                <span className="text-xl font-[600]"> Summary</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaList />
                </div>
              </div>
              <textarea
                className="border w-full max-h-[20ch] p-2 outline-none border-2 focus:border-green-200"
                minLength={200}
                maxLength={800}
              />
            </div>
            <div className=" p-4 grid gap-4">
              <div className="flex items-center gap-4  py-2">
                <span className="text-xl font-[600]">Skills</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaStar />
                </div>
              </div>
              <input
                type=""
                placeholder="Enter your skill"
                className="w-full border-b-2 outline-none focus:border-green-200"
              />
              <div className="flex gap-4">
                <span className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-green-200 leading-[120%]">
                  skills <FaTimes />
                </span>
              </div>
            </div>
            <div className=" p-4 grid gap-4">
              <div className="flex items-center gap-4  py-2">
                <span className="text-xl font-[600]">Experience</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaBuilding />
                </div>
              </div>
              <input
                type=""
                placeholder="Title"
                className="w-full border-b-2 outline-none focus:border-green-200"
              />
              <input
                type=""
                placeholder="Company name"
                className="w-full border-b-2 outline-none focus:border-green-200"
              />
              <div className=" w-ful grid grid-cols-2 gap-4">
                <label>
                  <span className="w-full font-semibold">From</span>
                  <input
                    type="date"
                    placeholder="From"
                    className="w-full border-b-2 outline-none focus:border-green-200"
                  />
                </label>
                <label className="">
                  <span className=" w-full font-semibold"> To</span>
                  <input
                    type="date"
                    placeholder="From"
                    className="w-full border-b-2 outline-none focus:border-green-200"
                  />
                </label>
              </div>
              <div className="flex gap-4">
                <span className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-green-200 leading-[120%]">
                  Add more <FaPlus />
                </span>
              </div>
            </div>
          </form>
        </div>
        <Greenglance />
      </div>
    </div>
  );
}

export default App;
