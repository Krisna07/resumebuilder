import React, { useState } from "react";
import { FaGraduationCap, FaPlus } from "react-icons/fa";

const Education = () => {
  const [educationEntries, setEducationEntries] = useState([]);
  const [uni, setUni] = useState();
  const [newEntry, setNewEntry] = useState({
    degree: "",
    institution: "",
    state: "",
    country: "",
    from: "",
    to: "",
  });

  const addEntry = () => {
    if (
      newEntry.degree.trim() !== "" &&
      newEntry.institution.trim() !== "" &&
      newEntry.from.trim() !== "" &&
      newEntry.to.trim() !== ""
    ) {
      setEducationEntries([...educationEntries, newEntry]);
      setNewEntry({
        degree: "",
        institution: "",
        from: "",
        to: "",
      });
    }
    console.log(educationEntries);
  };

  fetch("http://universities.hipolabs.com/search?country=Australia")
    .then((response) => response.json())
    .then((data) => {
      setUni(data);
    })
    .catch((error) => {
      console.error("Error fetching data: " + error);
    });

  return (
    <div className="p-4 grid gap-4">
      <div className="flex items-center gap-4 py-2">
        <span className="text-xl font-[600]">Education</span>
        <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
          <FaGraduationCap />
        </div>
      </div>

      {educationEntries.map((education, index) => (
        <div
          className="grid"
          key={index}>
          <span className="capitalize font-semibold">{education.degree}</span>
          <span>{education.institution}</span>
          <div>
            {education.state}, {education.country}
          </div>
          <div className="flex text-sm gap-[4px]">
            {education.from.split("-").join("/")} <span>-</span>
            {education.to.split("-").join("/")}
          </div>
        </div>
      ))}

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Degree"
          className="w-full border-b-2 outline-none focus-border-green-200"
          value={newEntry.degree}
          onChange={(e) => setNewEntry({ ...newEntry, degree: e.target.value })}
        />

        <select>
          {uni.map((uni, index) => (
            <option
              key={index}
              value={uni.name}>
              {uni.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Institution name"
          className="w-full border-b-2 outline-none focus-border-green-200"
          value={newEntry.institution}
          onChange={(e) =>
            setNewEntry({ ...newEntry, institution: e.target.value })
          }
        />
        <div className="flex gap-4">
          <select
            className="flex leading-[120%] bg-gray-200 px-2"
            value={newEntry.state}
            onChange={(e) =>
              setNewEntry({ ...newEntry, state: e.target.value })
            }>
            <option value="NSW">NSW</option>
            <option value="WA">WA</option>
            <option value="Victoria">Victoria</option>
            <option value="Queensland">Queensland</option>
            <option value="Tasmania">Tasmania</option>
            <option value="SA">SA</option>
            <option value="ACT">ACT</option>
            <option value="NT">NT</option>
          </select>

          <input
            type="text"
            placeholder="Country"
            className="w-full border-b-2 outline-none focus-border-green-200"
            value={newEntry.country}
            onChange={(e) =>
              setNewEntry({ ...newEntry, country: e.target.value })
            }
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <label>
            <span className="w-full font-semibold">From</span>
            <input
              type="date"
              className="w-full border-b-2 outline-none focus-border-green-200"
              value={newEntry.from}
              onChange={(e) =>
                setNewEntry({ ...newEntry, from: e.target.value })
              }
            />
          </label>
          <label>
            <span className="w-full font-semibold">To</span>
            <input
              type="date"
              className="w-full border-b-2 outline-none focus-border-green-200"
              value={newEntry.to}
              onChange={(e) => setNewEntry({ ...newEntry, to: e.target.value })}
            />
          </label>
        </div>
        <div className="flex gap-4">
          <span
            className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-green-200 leading-[120%]"
            onClick={addEntry}>
            Add more <FaPlus />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
