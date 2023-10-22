import React, { useState } from "react";
import { FaPlus, FaStar, FaTimes } from "react-icons/fa";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill();
  };

  return (
    <div className="p-4 grid gap-4">
      <div className="flex items-center gap-4 py-2">
        <span className="text-xl font-[600]">Skills</span>
        <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
          <FaStar />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your skill"
          autoComplete="on"
          className="w-full border-b-2 outline-none focus:border-green-200"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
      </form>

      <div className="w-full flex items-center wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 bg-green-200 leading-[120%]"
            onClick={() => removeSkill(index)}>
            {skill} <FaTimes className="hover:text-red-600" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
