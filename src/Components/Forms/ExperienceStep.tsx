import React, { useState } from "react";
import Input from "../Input";
import { Experience } from "../../types";
import Button from "../Button";

import "react-quill/dist/quill.snow.css";
import { FaTimes } from "react-icons/fa";
import { Trash2 } from "lucide-react";
interface ExperienceStepProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

const ExperienceStep: React.FC<ExperienceStepProps> = ({ data, onChange }) => {
  // const [experienceData, setExperienceData] = useState<Experience[]>(data);

  const [experience, setExperience] = useState<Experience>({
    title: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    responsibilities: [],
  });

  const [responsibility, setResponsibility] = useState<string>("");

  const updateResponsibility = (e: React.FormEvent) => {
    e.preventDefault();
    setExperience((prevState) => ({
      ...prevState,
      responsibilities: [...(prevState.responsibilities || []), responsibility],
    }));
    setResponsibility("");
    console.log(experience);
  };
  const removeResponsibility = (index: number) => {
    setExperience((prevState) => ({
      ...prevState,
      responsibilities: (prevState.responsibilities || []).filter(
        (_, idx) => idx !== index
      ),
    }));
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;

  //   if (name === "startDate" || name === "endDate") {
  //     setExperience((prevState) => ({
  //       ...prevState,
  //       [name]: new Date(value),
  //     }));
  //   } else {
  //     setExperience((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   }
  // };

  const addExperience = () => {
    onChange([
      ...data,
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        responsibilities: [],
      },
    ]);
  };

  const removeExperience = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  return (
    <>
      {/* <div className="mb-4">
        {experienceData &&
          experienceData.map((exp: Experience, index: number) => (
            <div
              key={index}
              className="border p-2 mb-2 rounded flex flex-col gap-2 bg-gray-100"
            >
              <h2 className="text-lg font-bold">{exp.title}</h2>
              <p>
                {exp.company} {exp.location}
              </p>
              <div>
                {exp.startDate
                  ? new Date(exp.startDate).toLocaleDateString()
                  : ""}
                {exp.endDate
                  ? new Date(exp.endDate).toLocaleDateString()
                  : " - Current"}
              </div>

              <Button
                type="button"
                variant="danger"
                size="small"
                onClick={() => removeExperience(index)}
              >
                Remove Experience
              </Button>
            </div>
          ))}
      </div> */}
      {data.map((experience, index) => (
        <div
          key={index}
          className="w-full grid grid-cols-1 gap-4 place-items-start "
        >
          <button
            type="button"
            onClick={() => removeExperience(index)}
            className="absolute top-4 right-4 text-red-500 hover:text-red-600"
          >
            <Trash2 size={20} />
          </button>
          <div className="w-full grid  gap-2 relative">
            <Input
              type="text"
              name="title"
              required
              value={experience.title}
              onChange={(e) => updateExperience(index, "title", e.target.value)}
              placeholder="Title"
            />
            <Input
              type="text"
              name="company"
              required
              value={experience.company}
              onChange={(e) =>
                updateExperience(index, "company", e.target.value)
              }
              placeholder="Company"
            />
            <Input
              type="text"
              name="location"
              required
              value={experience.location}
              onChange={(e) =>
                updateExperience(index, "company", e.target.value)
              }
              placeholder="Location"
            />
            <div className="w-full flex gap-2 items-center justify-between">
              <Input
                type="date"
                name="startDate"
                required
                value={experience.startDate}
                onChange={(e) =>
                  updateExperience(index, "startDate", e.target.value)
                }
                placeholder="From"
              />
              <Input
                type="date"
                name="endDate"
                value={experience.endDate ? experience.endDate : ""}
                onChange={(e) =>
                  updateExperience(index, "EndDate", e.target.value)
                }
                placeholder="To"
              />
            </div>

            <label className="w-fit flex items-start cursor-pointer">
              <input
                type="checkbox"
                name="current"
                checked={experience.current}
                className="sr-only peer "
                onChange={(e) =>
                  setExperience((prevState) => ({
                    ...prevState,
                    current: e.target.checked,
                  }))
                }
              />
              <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium ">
                Currently Employed
              </span>
            </label>
          </div>
        </div>
      ))}
      <form onSubmit={updateResponsibility}>
        <div className="w-full grid gap-1 transition-all ease-in-out text-[14px] font-sans">
          <label className="w-full font-semibold transition-all ease-in-out px-1">
            Responsibilities
          </label>
          <div className="grid gap-1 ">
            {experience.responsibilities &&
              experience.responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-2"
                >
                  <span className="flex items-center gap-1">
                    <span className="text-sm font-semibold">
                      {" "}
                      {index + 1}.{" "}
                    </span>
                    {responsibility}
                  </span>
                  <FaTimes onClick={() => removeResponsibility(index)} />
                </li>
              ))}
          </div>
          <input
            type="text"
            name="responsibility"
            value={responsibility}
            placeholder="Add what you did here"
            onChange={(e) => setResponsibility(e.target.value)}
            className="w-full outline-none focus:ring-1 focus:ring-green-600 transition-all ease-in-out duration-300 px-[8px] py-[4px] text-[14px] rounded-md relative z-10"
          />
        </div>
        <div className="w-full flex gap-4 items-start p-2">
          <Button
            type="submit"
            variant="success"
            size="small"
            onClick={addExperience}
            // disabled={!isFirstExperienceValid}
          >
            Add Experience
          </Button>
        </div>
      </form>

      {/* <FormNavigator handleSubmit={submitForm} /> */}
    </>
  );
};

export default ExperienceStep;
