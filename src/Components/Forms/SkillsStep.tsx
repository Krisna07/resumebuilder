import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
// import { FaTimes } from "react-icons/fa";
import FormNavigator from "./FormNavigator";

import { ResumeData } from "../../types";

interface SkillsStepProps {
  formData: ResumeData;
  handleSubmit: (name: string, data: string) => void;
}

const SkillsStep: React.FC<SkillsStepProps> = ({ formData, handleSubmit }) => {
  const [skills, setSkills] = useState<string[]>(formData.skills);
  const [skill, setSkill] = useState<string>("");

  const addSkill = () => {
    const checkDuplicate = skills.includes(skill);
    if (!checkDuplicate) {
      setSkills((prevState: string[]) => [...prevState, skill]);
      setSkill("");
    } else {
      console.log("Duplicate");
    }
  };

  return (
    <>
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
          onClick={addSkill}
          type="button"
          variant="secondary"
          size="small"
          fullWidth={false}
        >
          Add Skill
        </Button>
      </form>
      <FormNavigator handleSubmit={handleSubmit} />
    </>
  );
};

export default SkillsStep;
