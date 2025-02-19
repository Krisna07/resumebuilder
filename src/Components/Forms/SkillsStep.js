import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCross,
  FaTimes,
} from "react-icons/fa";
import FormNavigator from "./FormNavigator";

const SkillsStep = ({ formData, updateData }) => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState(formData.skills);

  const handleSkillChange = (e) => {
    const { value } = e.target;
    setSkill(value);
  };

  const addSkill = () => {
    const checkDuplicate = skills.some(
      (prevskill) =>
        prevskill.toString().toLocaleLowerCase() === skill.toLocaleLowerCase()
    );

    if (!checkDuplicate) {
      setSkills((prevState) => [...prevState, skill]);
      return setSkill("");
    } else {
      console.log("Duplicate");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData("skills", skills);
  };

  const removeSkills = (item) => {
    const restArrays = skills.filter((skill) => skill !== item);
    setSkills(restArrays);
  };

  return (
    <div className="w-full h-full grid  ">
      <div className="flex flex-wrap gap-2 items-start w-full h-full ">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <p
              key={index}
              onClick={() => removeSkills(skill)}
              className="px-[12px] py-[2px] cursor-pointer bg-gray-300 h-fit rounded-full text-sm flex items-center gap-1 hover:ring-1 hover:ring-red-400 group transition-all ease-in-out duration-300"
            >
              {skill}
              <FaTimes
                size={12}
                className="group-hover:text-red-600 transition-all ease-in-out duration-300"
              />
            </p>
          ))
        ) : (
          <span>No skills added yet</span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="w-full grid gap-2 text-left">
        <Input
          type="text"
          value={skill}
          onChange={handleSkillChange}
          placeholder="Enter Skill"
          className="w-full border-b-2 outline-none focus:border-green-200 px-4 p-1 rounded-md"
        />

        <Button
          onClick={addSkill}
          type="button"
          variant="secondary"
          size="small"
          children={"Add"}
        />
      </form>
      <FormNavigator handleSubmit={handleSubmit} />
    </div>
  );
};

export default SkillsStep;
