import React, { useState } from "react";
import Input from "../Input";
import FormNavigator from "./FormNavigator";

import Button from "../Button";
import { Education, ResumeData } from "../../types";

interface EducationStepProps {
  formData: ResumeData;
  handleSubmit: (name: string, data: Education[]) => void;
}

const EducationStep: React.FC<EducationStepProps> = ({
  formData,
  handleSubmit,
}) => {
  const [educationData, setEducationData] = useState<Education[]>(
    formData.education
  );
  const [education, setEducation] = useState<Education>({
    degree: "",
    university: "",
    year: "",
    startDate: null,
    endDate: null,
    current: false,
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "startDate" || name === "endDate") {
      setEducation((prevState) => ({
        ...prevState,
        [name]: new Date(value),
      }));
    } else {
      setEducation((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const addEducation = (e: React.FormEvent) => {
    e.preventDefault();
    setEducationData((prevData = []) => [...prevData, education]);
    setEducation({
      degree: "",
      university: "",
      year: "",
      startDate: null,
      endDate: null,
      current: false,
      location: "",
    });
  };
  const removeEducation = (index: number) => {
    setEducationData((prevData = []) =>
      prevData.filter((_, idx) => idx !== index)
    );
  };
  const submitForm = () => {
    console.log(educationData);
    handleSubmit("education", educationData);
  };

  return (
    <>
      <div className="mb-4">
        {educationData &&
          educationData.map((edu: Education, index: number) => (
            <div
              key={index}
              className="border p-2 mb-2 rounded flex flex-col gap-2 bg-gray-100"
            >
              <h2 className="text-lg font-bold">{edu.degree}</h2>
              <p>
                {edu.university} {edu.location}
              </p>
              <div>
                {edu.startDate
                  ? new Date(edu.startDate).toLocaleDateString()
                  : ""}
                {edu.endDate
                  ? new Date(edu.endDate).toLocaleDateString()
                  : " - Current"}
              </div>

              <Button
                type="button"
                variant="danger"
                size="small"
                onClick={() => removeEducation(index)}
              >
                Remove Experience
              </Button>
            </div>
          ))}
      </div>
      <form onSubmit={addEducation} className="w-full grid gap-4">
        <div className="w-full grid gap-2 border rounded">
          <Input
            type="text"
            name="degree"
            value={education.degree}
            onChange={handleChange}
            placeholder="Degree"
          />
          <Input
            type="text"
            name="university"
            value={education.university}
            onChange={handleChange}
            placeholder="University"
          />
          <div className="w-full flex gap-2 items-center justify-between">
            <Input
              type="date"
              name="startDate"
              required
              value={
                education.startDate
                  ? education.startDate.toISOString().split("T")[0]
                  : ""
              }
              onChange={handleChange}
              placeholder="From"
            />
            <Input
              type="date"
              name="endDate"
              value={
                education.endDate
                  ? education.endDate.toISOString().split("T")[0]
                  : ""
              }
              onChange={handleChange}
              placeholder="To"
            />
          </div>

          <label className="w-fit flex items-start cursor-pointer">
            <input
              type="checkbox"
              name="current"
              checked={education.current}
              className="sr-only peer "
              onChange={(e) =>
                setEducation((prevState) => ({
                  ...prevState,
                  current: e.target.checked,
                }))
              }
            />
            <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium ">Still studying</span>
          </label>
          <Input
            type="text"
            name="location"
            value={education.location}
            onChange={handleChange}
            placeholder="Location"
          />
        </div>

        <Button
          children={"Add Edication"}
          variant={"secondary"}
          size={"small"}
          onClick={() => addEducation}
        />
      </form>

      <FormNavigator handleSubmit={submitForm} />
    </>
  );
};

export default EducationStep;
