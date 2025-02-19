import React, { useState, useEffect } from "react";
import Input from "../Input";
import FormNavigator from "./FormNavigator";

const EducationStep = ({ formData, updateData }) => {
  const [educationData, setEducationData] = useState(formData.education);

  const handleChange = (e, index, field) => {
    const { value } = e.target;
    setEducationData((prevState) => {
      const updatedEdu = [...prevState];
      updatedEdu[index] = { ...updatedEdu[index], [field]: value };
      return updatedEdu;
    });
  };

  const addEducation = () => {
    setEducationData((prevState) => [
      ...prevState,
      { degree: "", university: "", year: "", location: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData("education", educationData);
    // Move to the next step
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full grid gap-4">
        {educationData.map((edu, index) => (
          <div key={index} className="w-full grid gap-2 border rounded">
            <Input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleChange(e, index, "degree")}
              placeholder="Degree"
              className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
            <Input
              type="text"
              name="university"
              value={edu.university}
              onChange={(e) => handleChange(e, index, "university")}
              placeholder="University"
              className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
            <Input
              type="text"
              name="year"
              value={edu.year}
              onChange={(e) => handleChange(e, index, "year")}
              placeholder="Year"
              className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
            <Input
              type="text"
              name="location"
              value={edu.location}
              onChange={(e) => handleChange(e, index, "location")}
              placeholder="Location"
              className="w-full border-b-2 outline-none px-4 p-1 rounded-md"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addEducation}
          className="w-fit px-2 p-1 bg-gray-300 rounded-md"
        >
          Add Education
        </button>
      </form>
      <FormNavigator handleSubmit={handleSubmit} />
    </>
  );
};

export default EducationStep;
