import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import {
  FaLocationArrow,
  FaMailBulk,
  FaPersonBooth,
  FaPhone,
  FaRegUser,
  FaTicketAlt,
} from "react-icons/fa";

function App() {
  const [username, setUsername] = useState({
    firstname: null,
    lastname: null,
  });

  return (
    <div className="p-4">
      <Header />
      <div className="w-[1400px] grid grid-cols-2 ">
        <div>
          <form>
            <div className="grid gap-2 p-4">
              <div className="flex items-center gap-4 border-b py-2">
                <span className="text-xl font-[600]"> Profile</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaRegUser />
                </div>
              </div>
              <label className="flex gap-2">
                <input
                  placeholder="Firstname"
                  className="border-b-2 outline-none focus:border-green-200"
                />
                <input
                  placeholder="Lastname"
                  className="border-b-2 outline-none focus:border-green-200"
                />
              </label>
              <div className=" font-[600] bg-green-200 w-fit px-4 py-1 rounded">
                Next
              </div>
            </div>
          </form>
        </div>
        <div className="grid place-items-center  gap-4">
          <div>
            <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
            <div>Username </div>
          </div>
          <div className="w-full flex items-center justify-between text-[12px] border-b py-2">
            <div className="flex items-center gap-2 ">
              <FaPhone /> XXXXXXXX
            </div>
            <div className="flex items-center gap-2 ">
              <FaMailBulk /> email@email.com
            </div>
            <div className="flex items-center gap-2 ">
              <FaLocationArrow /> address, state, 2000
            </div>
          </div>
          <div className="text-[14px] w-full">
            Highly motivated and accomplished [Your Industry/Field] professional
            with [X years] of experience in [Key Skill/Experience Area]. Strong
            analytical and problem-solving abilities, with a commitment to
            delivering exceptional results. Proven leadership and team
            collaboration skills. Adept at [Specific Skill/Competency], [Another
            Skill/Competency], and [Additional Skill/Competency].
          </div>
          <div className="grid grid-cols-[200px_500px] gap-4 text-[14px] ">
            <div className=" grid gap-2">
              <h2 className="font-bold w-full border-b">Skill</h2>
              <div>
                <span className="font-semibold">Soft Skills</span>
                <ul className="list-disc px-4">
                  <li>Communication</li>
                  <li>Teamwork</li>
                  <li>Problem-Solving</li>
                  <li>Time Management</li>
                  <li>Emotional Intelligence</li>
                  <li>Adaptability</li>
                  <li>Leadership</li>
                  <li>Customer Service</li>
                </ul>
              </div>
              <div>
                <span className="font-semibold">Hard skills</span>
                <ul className="list-disc px-4">
                  <li>Communication</li>
                  <li>Teamwork</li>
                  <li>Problem-Solving</li>
                  <li>Time Management</li>
                  <li>Emotional Intelligence</li>
                  <li>Adaptability</li>
                  <li>Leadership</li>
                  <li>Customer Service</li>
                </ul>
              </div>
            </div>
            <div className="px-4 font-bold">
              <h2>History</h2>
              <div>
                <span className="font-semibold">Soft Skills</span>
                <ul className="list-disc px-4">
                  <li>Communication</li>
                  <li>Teamwork</li>
                  <li>Problem-Solving</li>
                  <li>Time Management</li>
                  <li>Emotional Intelligence</li>
                  <li>Adaptability</li>
                  <li>Leadership</li>
                  <li>Customer Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
