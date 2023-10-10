import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import {
  FaBuilding,
  FaGraduationCap,
  FaList,
  FaPlus,
  FaRegUser,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import Greenglance from "./Components/Greenglance";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    street: "",
    state: "",
    postcode: "",
    summary: "",
    skills: [],
    experiences: [],
    educations: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillAdd = () => {
    if (formData.skills.length < 5) {
      setFormData({
        ...formData,
        skills: [...formData.skills, ""],
      });
    }
  };

  const handleSkillRemove = (index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleExperienceAdd = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        {
          title: "",
          company: "",
          from: "",
          to: "",
        },
      ],
    });
  };

  const handleExperienceRemove = (index) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences.splice(index, 1);
    setFormData({
      ...formData,
      experiences: updatedExperiences,
    });
  };

  const handleEducationAdd = () => {
    setFormData({
      ...formData,
      educations: [
        ...formData.educations,
        {
          degree: "",
          institution: "",
          from: "",
          to: "",
        },
      ],
    });
  };

  const handleEducationRemove = (index) => {
    const updatedEducations = [...formData.educations];
    updatedEducations.splice(index, 1);
    setFormData({
      ...formData,
      educations: updatedEducations,
    });
  };
  const handleExperienceInputChange = (index, field, value) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][field] = value;
    setFormData({
      ...formData,
      experiences: updatedExperiences,
    });
  };

  const handleEducationInputChange = (index, field, value) => {
    const updatedEducations = [...formData.educations];
    updatedEducations[index][field] = value;
    setFormData({
      ...formData,
      educations: updatedEducations,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      street: "",
      state: "",
      postcode: "",
      summary: "",
      skills: [],
      experiences: [],
      educations: [],
    });
  };

  return (
    <div className="w-full grid place-items-center">
      <Header />
      <div className="w-[1400px] grid grid-cols-2 place-items-center py-4 p-4">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 p-4">
              <div className="flex items-center gap-4 border-b py-2">
                <span className="text-xl font-[600]"> Profile</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaRegUser />
                </div>
              </div>
              <label className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className="border-b-2 outline-none focus:border-green-200"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className="border-b-2 outline-none focus:border-green-200"
                />
              </label>
              <label className="flex gap-2">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border-b-2 outline-none focus:border-green-200"
                />
              </label>
              <label className="flex gap-2">
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="w-full border-b-2 outline-none focus:border-green-200"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full border-b-2 outline-none focus:border-green-200"
                />
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className="w-full border-b-2 outline-none focus:border-green-200"
                />
              </label>
            </div>
            <div className=" p-4">
              <div className="flex items-center gap-4 py-2">
                <span className="text-xl font-[600]"> Summary</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaList />
                </div>
              </div>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
                className="border w-full max-h-[20ch] p-2 outline-none border-2 focus:border-green-200"
                minLength={200}
                maxLength={800}
              />
            </div>
            <div className=" p-4 grid gap-4">
              <div className="flex items-center gap-4  py-2">
                <span className="text-xl font-[600]">Skills</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaStar />
                </div>
              </div>
              <input
                type="text"
                placeholder="Enter your skill"
                value={formData.skills[0] || ""}
                onChange={(e) => {
                  const updatedSkills = [...formData.skills];
                  updatedSkills[0] = e.target.value;
                  setFormData({
                    ...formData,
                    skills: updatedSkills,
                  });
                }}
                className="w-full border-b-2 outline-none focus:border-green-200"
              />
              {formData.skills.slice(1).map((skill, index) => (
                <div
                  key={index}
                  className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter your skill"
                    value={skill}
                    onChange={(e) => {
                      const updatedSkills = [...formData.skills];
                      updatedSkills[index + 1] = e.target.value;
                      setFormData({
                        ...formData,
                        skills: updatedSkills,
                      });
                    }}
                    className="w-full border-b-2 outline-none focus-border-green-200"
                  />
                  <span
                    className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-green-200 leading-[120%]"
                    onClick={() => handleSkillRemove(index + 1)}>
                    skills <FaTimes />
                  </span>
                </div>
              ))}
              {formData.skills.length < 5 && (
                <div className="flex gap-4">
                  <span
                    className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-green-200 leading-[120%]"
                    onClick={handleSkillAdd}>
                    Add more <FaPlus />
                  </span>
                </div>
              )}
            </div>
            <div className=" p-4 grid gap-4">
              <div className="flex items-center gap-4  py-2">
                <span className="text-xl font-[600]">Experience</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaBuilding />
                </div>
              </div>
              {formData.experiences.map((experience, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Title"
                    value={experience.title}
                    onChange={(e) =>
                      handleExperienceInputChange(
                        index,
                        "title",
                        e.target.value,
                      )
                    }
                    className="w-full border-b-2 outline-none focus:border-green-200"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    value={experience.company}
                    onChange={(e) =>
                      handleExperienceInputChange(
                        index,
                        "company",
                        e.target.value,
                      )
                    }
                    className="w-full border-b-2 outline-none focus:border-green-200"
                  />
                  <div className=" w-ful grid grid-cols-2 gap-4">
                    <label>
                      <span className="w-full font-semibold">From</span>
                      <input
                        type="date"
                        placeholder="From"
                        value={experience.from}
                        onChange={(e) =>
                          handleExperienceInputChange(
                            index,
                            "from",
                            e.target.value,
                          )
                        }
                        className="w-full border-b-2 outline-none focus:border-green-200"
                      />
                    </label>
                    <label className="">
                      <span className=" w-full font-semibold"> To</span>
                      <input
                        type="date"
                        placeholder="From"
                        value={experience.to}
                        onChange={(e) =>
                          handleExperienceInputChange(
                            index,
                            "to",
                            e.target.value,
                          )
                        }
                        className="w-full border-b-2 outline-none focus:border-green-200"
                      />
                    </label>
                  </div>
                  {index === formData.experiences.length - 1 && (
                    <div className="flex gap-4">
                      <span
                        className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-green-200 leading-[120%]"
                        onClick={handleExperienceAdd}>
                        Add more <FaPlus />
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className=" p-4 grid gap-4">
              <div className="flex items-center gap-4  py-2">
                <span className="text-xl font-[600]">Education</span>
                <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
                  <FaGraduationCap />
                </div>
              </div>
              {formData.educations.map((education, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Degree"
                    value={education.degree}
                    onChange={(e) =>
                      handleEducationInputChange(
                        index,
                        "degree",
                        e.target.value,
                      )
                    }
                    className="w-full border-b-2 outline-none focus:border-green-200"
                  />
                  <input
                    type="text"
                    placeholder="Institution name"
                    value={education.institution}
                    onChange={(e) =>
                      handleEducationInputChange(
                        index,
                        "institution",
                        e.target.value,
                      )
                    }
                    className="w-full border-b-2 outline-none focus:border-green-200"
                  />
                  <div className=" w-ful grid grid-cols-2 gap-4">
                    <label>
                      <span className="w-full font-semibold">From</span>
                      <input
                        type="date"
                        placeholder="From"
                        value={education.from}
                        onChange={(e) =>
                          handleEducationInputChange(
                            index,
                            "from",
                            e.target.value,
                          )
                        }
                        className="w-full border-b-2 outline-none focus:border-green-200"
                      />
                    </label>
                    <label className="">
                      <span className=" w-full font-semibold"> To</span>
                      <input
                        type="date"
                        placeholder="From"
                        value={education.to}
                        onChange={(e) =>
                          handleEducationInputChange(
                            index,
                            "to",
                            e.target.value,
                          )
                        }
                        className="w-full border-b-2 outline-none focus:border-green-200"
                      />
                    </label>
                  </div>
                  {index === formData.educations.length - 1 && (
                    <div className="flex gap-4">
                      <span
                        className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-green-200 leading-[120%]"
                        onClick={handleEducationAdd}>
                        Add more <FaPlus />
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <Greenglance />
      </div>
    </div>
  );
}

export default App;
