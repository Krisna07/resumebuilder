import React, { useState } from "react";
import Input from "../Input";
import FormNavigator from "./FormNavigator";
import { FormData } from "./MultiStepForm";

interface ExperienceStepProps {
  formData: FormData;
  handleSubmit: (name: keyof FormData, data: any) => void;
}

const ExperienceStep: React.FC<ExperienceStepProps> = ({
  formData,
  handleSubmit,
}) => {
  const [experienceData, setExperienceData] = useState(formData.experience);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: string
  ) => {
    const { value } = e.target;
    setExperienceData((prevState: any) => {
      const updatedExp = [...prevState];
      updatedExp[index] = { ...updatedExp[index], [field]: value };
      return updatedExp;
    });
  };

  const addExperience = () => {
    setExperienceData((prevState: any) => [
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

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit("experience", experienceData);
  };

  return (
    <>
      <form onSubmit={submitForm} className="w-full grid gap-4">
        {experienceData.map((exp: any, index: number) => (
          <div key={index} className="w-full grid gap-2 border rounded">
            <Input
              type="text"
              name="title"
              value={exp.title}
              onChange={(e) => handleChange(e, index, "title")}
              placeholder="Title"
            />
            <Input
              type="text"
              name="company"
              value={exp.company}
              onChange={(e) => handleChange(e, index, "company")}
              placeholder="Company"
            />
            <Input
              type="text"
              name="location"
              value={exp.location}
              onChange={(e) => handleChange(e, index, "location")}
              placeholder="Location"
            />
            <Input
              type="text"
              name="duration"
              value={exp.duration}
              onChange={(e) => handleChange(e, index, "duration")}
              placeholder="Duration"
            />
            <Input
              type="text"
              name="responsibilities"
              value={exp.responsibilities.join(", ")}
              onChange={(e) => handleChange(e, index, "responsibilities")}
              placeholder="Responsibilities"
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
      <FormNavigator handleSubmit={submitForm} />
    </>
  );
};

export default ExperienceStep;
