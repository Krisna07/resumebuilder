import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

import { FaTimes } from "react-icons/fa";

interface SkillsStepProps {
  data: string[];
  updateSkills: (skills: string[]) => void;
}
const SkillsStep: React.FC<SkillsStepProps> = ({ data, updateSkills }) => {
  const [skills, setSkills] = useState<string[]>(data);
  const [skill, setSkill] = useState<string>("");

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    const checkDuplicate = skills.includes(skill);
    if (!checkDuplicate) {
      setSkills((prevState: string[]) => [...prevState, skill]);
      updateSkills(skills);
      setSkill("");
    } else {
      console.log("Duplicate");
    }
  };

  const removeSkills = (skill: string) => {
    const restSkills = skills.filter((items) => items !== skill);
    setSkills(restSkills);
    updateSkills(skills);
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        {skills?.map((skill: string, index: number) => (
          <span
            key={index}
            className="bg-gray-300 px-2 text-sm gap-2 rounded-full flex items-center  "
          >
            {skill}
            <FaTimes onClick={() => removeSkills(skill)} />
          </span>
        ))}
      </div>
      <form onSubmit={addSkill} className="w-full grid gap-4">
        <Input
          type="text"
          name="skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Add a skill"
          // className="w-full border-b-2 outline-none focus:border-green-200 px-4 p-1 rounded-md"
        />
        <Button
          onClick={() => addSkill}
          type="button"
          variant="secondary"
          size="small"
          fullWidth={false}
        >
          Add Skill
        </Button>
      </form>
      {/* <FormNavigator handleSubmit={updateSkills} /> */}
    </>
  );
};

export default SkillsStep;
