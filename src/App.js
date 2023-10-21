import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import {
  FaBuilding,
  FaGraduationCap,
  FaList,
  FaPlus,

  FaStar,
  FaTimes,
} from "react-icons/fa";
import Greenglance from "./Components/Greenglance";
import Profile from "./Components/formcomponents/Profile";
import Summary from "./Components/formcomponents/Summary";
import Skills from "./Components/formcomponents/Skills";

function App() {


  const [profile, setProfile] = useState({
    name:'',
    addrss:'',
    email:'',
    phone:''
  })
  const [summary, setSummary] = useState('')

  return (
    <div className="w-full grid place-items-center">
      <Header />
      <div className="w-[1400px] grid grid-cols-2 place-items-center py-4 p-4">
        <div>
          <form >
          <Profile setProfile={setProfile}/>
           <Summary setSummary={setSummary}/>
          <Skills/>
            <div className=" p-4 grid gap-4">
              <div className="flex items-center gap-4  py-2">
                <span className="text-xl font-[600]">Experience</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaBuilding />
                </div>
              </div>
            
                <div
            
                  className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Title"
                 
                  
              
                    className="w-full border-b-2 outline-none focus:border-green-200"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                   
                    className="w-full border-b-2 outline-none focus:border-green-200"
                  />
                  <div className="w-ful grid grid-cols-2 gap-4">
                    <label>
                      <span className="w-full font-semibold">From</span>
                      <input
                        type="date"
                        placeholder="From"
                       
                        className="w-full border-b-2 outline-none focus:border-green-200"
                      />
                    </label>
                    <label className="">
                      <span className="w-full font-semibold">To</span>
                      <input
                        type="date"
                        placeholder="To"
                        
                        className="w-full border-b-2 outline-none focus:border-green-200"
                      />
                    </label>
                  </div>
                  <textarea
                    placeholder="Summary"
                  
                    className="border w-full max-h-[20ch] p-2 outline-none border-2 focus:border-green-200"
                    minLength={200}
                    maxLength={800}
                  />
               
                    <div className="flex gap-4">
                      <span
                        className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-green-200 leading-[120%]"
                        >
                        Add more <FaPlus />
                      </span>
                    </div>
              
                </div>
           
            </div>
            <div className=" p-4 grid gap-4">
              <div className="flex items-center gap-4  py-2">
                <span className="text-xl font-[600]">Education</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaGraduationCap />
                </div>
              </div>
             
                <div
             
                  className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Degree"
                  
                   
                    className="w-full border-b-2 outline-none focus:border-green-200"
                  />
                  <input
                    type="text"
                    placeholder="Institution name"
                  
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
                      <span
                        className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-green-200 leading-[120%]">
                    
                        Add more <FaPlus />
                      </span>
                    </div>
             
                </div>
          
            </div>
            <button
              type="submit"
              className="w-fit py-1 px-4 rounded-full bg-green-200">
              Submit
            </button>
          </form>
        </div>
      
      </div>
    </div>
  );
}
  // <Greenglance />

export default App;
