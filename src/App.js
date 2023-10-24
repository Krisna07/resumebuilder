import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/formcomponents/Profile";
import Summary from "./Components/formcomponents/Summary";
import Skills from "./Components/formcomponents/Skills";
import Experience from "./Components/formcomponents/Experience";
import Education from "./Components/formcomponents/Education";
import Greenglance from "./Components/Greenglance";

function App() {
  const [formData, setFormData] = useState({
    profile: {
      name: "",
      address: "",
      email: "",
      phone: "",
    },
    summary: "",
    skills: [],
    experience: [],
    education: [],
  });

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="w-full  grid place-items-center ">
      <Header />
      <div className="w-[1400px] h-full overflow-hidden h-[100vh]  grid grid-cols-2  py-4 p-4">
        <div className="h-full overflow-y-scroll">
          <Profile
            profile={formData.profile}
            setProfile={(value) => updateFormData("profile", value)}
          />
          <Summary setSummary={(value) => updateFormData("summary", value)} />
          <Skills getSkills={(value) => updateFormData("skills", value)} />
          <Experience
            getExperience={(value) => updateFormData("experience", value)}
          />
          <Education
            getEducation={(value) => updateFormData("education", value)}
          />
          <button
            type="submit"
            className="w-fit py-1 px-4 rounded-full bg-green-200">
            Submit
          </button>
        </div>
        <div className="relative h-[1400px]">
          <Greenglance formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
