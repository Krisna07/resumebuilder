import React, { useState } from "react";
import Input from "../Input";
import FormNavigator from "./FormNavigator";
import { FormData } from "./MultiStepForm";
import Button from "../Button";

interface EducationStepProps {
  formData: FormData;
  handleSubmit: (name: keyof FormData, data: any) => void;
}

const EducationStep: React.FC<EducationStepProps> = ({
  formData,
  handleSubmit,
}) => {
  const [educationData, setEducationData] = useState(formData.education);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: string
  ) => {
    const { value } = e.target;
    setEducationData((prevState: any) => {
      const updatedEdu = [...prevState];
      updatedEdu[index] = { ...updatedEdu[index], [field]: value };
      return updatedEdu;
    });
  };

  const addEducation = () => {
    setEducationData((prevState: any) => [
      ...prevState,
      { degree: "", university: "", year: "", location: "" },
    ]);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(educationData);
    handleSubmit("education", educationData);
  };

  return (
    <>
      <form onSubmit={submitForm} className="w-full grid gap-4">
        {educationData.map((edu: any, index: number) => (
          <div key={index} className="w-full grid gap-2 border rounded">
            <Input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleChange(e, index, "degree")}
              placeholder="Degree"
              // className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
            <Input
              type="text"
              name="university"
              value={edu.university}
              onChange={(e) => handleChange(e, index, "university")}
              placeholder="University"
              // className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
            <Input
              type="text"
              name="year"
              value={edu.year}
              onChange={(e) => handleChange(e, index, "year")}
              placeholder="Year"
              // className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
            <Input
              type="text"
              name="location"
              value={edu.location}
              onChange={(e) => handleChange(e, index, "location")}
              placeholder="Location"
              // className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
          </div>
        ))}
      </form>
      <Button children={"Add Edication"} variant={"secondary"} size={"small"} />
      <FormNavigator handleSubmit={submitForm} />
    </>
  );
};

export default EducationStep;
