import React, { useState } from "react";
import { FaBuilding, FaPlus, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ExperienceForm({ newExperience, onSubmit, onReset, onInputChange }) {
  const { title, company, from, to, summary } = newExperience;

  return (
    <div className="grid gap-4">
      <input
        type="text"
        placeholder="Title"
        className="w-full border-b-2 outline-none focus-border-green-200"
        value={title}
        onChange={(e) => onInputChange("title", e.target.value)}
      />
      <input
        type="text"
        placeholder="Company name"
        className="w-full border-b-2 outline-none focus-border-green-200"
        value={company}
        onChange={(e) => onInputChange("company", e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4">
        <label>
          <span className="w-full font-semibold">From</span>
          <input
            type="date"
            className="w-full border-b-2 outline-none focus-border-green-200"
            name="from"
            value={from}
            onChange={(e) => onInputChange("from", e.target.value)}
          />
        </label>
        <label>
          <span className="w-full font-semibold">To</span>
          <input
            type="date"
            className="w-full border-b-2 outline-none focus-border-green-200"
            name="to"
            value={to}
            onChange={(e) => onInputChange("to", e.target.value)}
          />
        </label>
      </div>
      <ReactQuill
        value={summary}
        className="relative z-20"
        onChange={(value) => onInputChange("summary", value)}
      />
      <div className="flex gap-4 relative z-40">
        <span
          className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover-bg-green-200 leading-[120%]"
          onClick={onSubmit}>
          {newExperience.editing !== false ? <FaCheck /> : <FaPlus />}{" "}
          {newExperience.editing !== false ? "Save" : "Add more"}
        </span>
        {newExperience.editing !== false && (
          <span
            className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover-bg-green-200 leading-[120%]"
            onClick={onReset}>
            <FaTimes /> Cancel
          </span>
        )}
      </div>
    </div>
  );
}

function ExperienceList({ experiences, onEdit, onDelete }) {
  return (
    <ul className="grid gap-2">
      {experiences.map((experience, index) => (
        <li key={index}>
          <div className="flex gap-2">
            <strong className="capitalize  ">{experience.title}</strong> at
            <span className="capitalize">{experience.company}</span>
          </div>
          <div>
            From: {experience.from} to {experience.to}
          </div>
          <div dangerouslySetInnerHTML={{ __html: experience.summary }}></div>
          <div className="flex gap-4">
            <button
              onClick={() => onEdit(index)}
              className="text-green-500 hover-text-green-700">
              <FaEdit />
            </button>
            <button
              onClick={() => onDelete(index)}
              className="text-red-500 hover-text-red-700">
              <FaTimes />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    from: "",
    to: "",
    summary: "",
    editing: false,
  });

  const handleInputChange = (field, value) => {
    setNewExperience({ ...newExperience, [field]: value });
  };

  const handleSubmit = () => {
    if (
      newExperience.title.trim() !== "" &&
      newExperience.company.trim() !== "" &&
      newExperience.from.trim() !== "" &&
      newExperience.to.trim() !== "" &&
      newExperience.summary !== ""
    ) {
      if (newExperience.editing !== false) {
        experiences[newExperience.editing] = {
          ...newExperience,
          editing: false,
        };
      } else {
        setExperiences([...experiences, { ...newExperience }]);
      }
      setNewExperience({
        title: "",
        company: "",
        from: "",
        to: "",
        summary: "",
        editing: false,
      });
    }
    console.log(experiences);
  };

  const handleEdit = (index) => {
    setNewExperience({ ...experiences[index], editing: index });
  };

  const handleReset = () => {
    setNewExperience({
      title: "",
      company: "",
      from: "",
      to: "",
      summary: "",
      editing: false,
    });
  };

  const handleDelete = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  return (
    <div className="p-4 grid gap-4">
      <div className="flex items-center gap-4 py-2">
        <span className="text-xl font-[600]">Experience</span>
        <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
          <FaBuilding />
        </div>
      </div>
      <ExperienceList
        experiences={experiences}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ExperienceForm
        newExperience={newExperience}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
    </div>
  );
}

export default Experience;
