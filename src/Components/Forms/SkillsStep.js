import React, { useState } from "react";

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
    updateData(skills);
  };

  return (
    <div className="max-w-[600px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg">
      <h3>Skills</h3>
      <form onSubmit={handleSubmit} className="grid gap-2">
        {skills.length > 0 ? (
          skills.map((skill, index) => <span key={index}>{skill}</span>)
        ) : (
          <span>No skills added yet</span>
        )}

        <div>
          <input
            type="text"
            value={skill}
            onChange={handleSkillChange}
            placeholder="Skill"
            className="w-full border-b-2 outline-none focus:border-green-200 px-4 p-1 rounded-md"
          />
        </div>

        <button
          type="button"
          onClick={addSkill}
          className="w-fit px-2 p-[4px] bg-gray-300"
        >
          Add Skill
        </button>
        <button className="w-fit px-2 p-[4px] bg-green-300" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SkillsStep;
