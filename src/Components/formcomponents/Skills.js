import React, { useEffect, useState } from "react";
import { FaPlus, FaStar, FaTimes } from "react-icons/fa";

const Skills = ({ getSkills }) => {
  const [softSkills, setSoftSkills] = useState([]);
  const [hardSkills, setHardSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [skillType, setSkillType] = useState("soft"); // To track whether it's a soft or hard skill

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      if (skillType === "soft") {
        setSoftSkills([...softSkills, newSkill]);
      } else {
        setHardSkills([...hardSkills, newSkill]);
      }
      setNewSkill("");
    }
  };

  const removeSkill = (index) => {
    if (skillType === "soft") {
      const updatedSkills = [...softSkills];
      updatedSkills.splice(index, 1);
      setSoftSkills(updatedSkills);
    } else {
      const updatedSkills = [...hardSkills];
      updatedSkills.splice(index, 1);
      setHardSkills(updatedSkills);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill();
  };

  useEffect(
    () => getSkills({ softSkills, hardSkills }),
    [softSkills, hardSkills],
  );

  return (
    <div className="max-w-full p-4 grid gap-4">
      <div className="flex items-center gap-4 py-2">
        <span className="text-xl font-[600]">Skills</span>
        <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
          <FaStar />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter at least 5 skills each"
          autoComplete="on"
          className="w-full border-b-2 outline-none focus:border-green-200"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <div className="flex gap-4">
          <label className="flex gap-2">
            <input
              type="radio"
              name="skillType"
              value="soft"
              checked={skillType === "soft"}
              onChange={() => setSkillType("soft")}
            />
            Soft Skill
          </label>
          <label className="flex gap-2">
            <input
              type="radio"
              name="skillType"
              value="hard"
              checked={skillType === "hard"}
              onChange={() => setSkillType("hard")}
            />
            Hard Skill
          </label>
        </div>
      </form>

      <div className="w-full  grid grid-cols-2  gap-2">
        <div className="w-full flex gap-2 border-r flex-wrap">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="text-[14px] h-fit font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 bg-green-200 leading-[120%]"
              onClick={() => removeSkill(index)}>
              {skill} <FaTimes className="hover:text-red-600" />
            </span>
          ))}
        </div>
        <div className="w-full flex gap-2 flex-wrap">
          {hardSkills.map((skill, index) => (
            <span
              key={index}
              className="text-[14px] h-fit  font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 bg-green-200 leading-[120%]"
              onClick={() => removeSkill(index)}>
              {skill} <FaTimes className="hover:text-red-600" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
