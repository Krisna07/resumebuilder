import React, { useState, useEffect } from "react";
import Input from "../Input";
import FormNavigator from "./FormNavigator";

const ExperienceStep = ({ formData, updateData }) => {
  const [experienceData, setExperienceData] = useState(formData.experience);

  useEffect(() => {
    setExperienceData(formData.experience);
  }, [formData.experience]);

  const handleChange = (e, index, field) => {
    const { value } = e.target;
    setExperienceData((prevState) => {
      const updatedExp = [...prevState];
      if (field === "responsibilities") {
        updatedExp[index] = { ...updatedExp[index], [field]: [value] };
      } else {
        updatedExp[index] = { ...updatedExp[index], [field]: value };
      }
      return updatedExp;
    });
  };

  const addExperience = () => {
    setExperienceData((prevState) => [
      ...prevState,
      {
        title: "",
        company: "",
        location: "",
        duration: "",
        responsibilities: [""],
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData("experience", experienceData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full grid gap-2">
        {experienceData.map((exp, index) => (
          <div key={index} className="w-full grid gap-2 border rounded">
            <Input
              type="text"
              name="title"
              value={exp.title}
              onChange={(e) => handleChange(e, index, "title")}
              placeholder="Job Title"
              className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
            <Input
              type="text"
              name="company"
              value={exp.company}
              onChange={(e) => handleChange(e, index, "company")}
              placeholder="Company"
              className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
            <Input
              type="text"
              name="location"
              value={exp.location}
              onChange={(e) => handleChange(e, index, "location")}
              placeholder="Location"
              className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
            <Input
              type="text"
              name="duration"
              value={exp.duration}
              onChange={(e) => handleChange(e, index, "duration")}
              placeholder="Duration"
              className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
            <textarea
              name="responsibilities"
              value={exp.responsibilities[0]}
              onChange={(e) => handleChange(e, index, "responsibilities")}
              placeholder="Responsibilities"
              className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addExperience}
          className="w-fit px-2 p-1 bg-gray-300 rounded-md"
        >
          Add Experience
        </button>
      </form>
      <FormNavigator handleSubmit={handleSubmit} />
    </>
  );
};

export default ExperienceStep;
