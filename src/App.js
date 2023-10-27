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
    profile: null,
    summary: "",
    skills: null,
    experience: [],
    education: [],
  });
  const [isDataValid, setIsDataValid] = useState(false);
  const [invalidField, setInvalidField] = useState("");

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const validateFormData = () => {
    const { profile, summary, skills, experience, education } = formData;

    if (!profile) {
      setInvalidField("profile");
      return false;
    } else if (!profile.phone) {
      setInvalidField("phone");
      return false;
    } else if (!summary) {
      setInvalidField("summary");
      return false;
    } else if (skills.length === 0) {
      setInvalidField("skills");
      return false;
    } else if (experience.length === 0) {
      setInvalidField("experience");
      return false;
    } else if (education.length === 0) {
      setInvalidField("education");
      return false;
    }

    setInvalidField("");
    return true;
  };

  const handleSubmit = () => {
    const isValid = validateFormData();

    if (isValid) {
      setIsDataValid(true);
      
      console.log("Data is valid, loading GreenGlance...");
    } else {
      setIsDataValid(false);
      
      switch (invalidField) {
        case "profile":
          console.log("Please enter your profile.");
          break;
        case "summary":
          console.log("Please provide a summary.");
          break;
        case "skills":
          console.log("Please add at least one skill.");
          break;
        case "experience":
          console.log("Please add at least one experience.");
          break;
        case "education":
          console.log("Please add at least one education entry.");
          break;
        default:
          console.log("Please complete all required fields.");
      }
    }
  };

  return (
    <div className="w-full  grid place-items-center ">
      <Header />
      <div className="h-full overflow-hidden h-[100vh]  grid grid-cols-1 py-4 p-4">
        <div className="h-full w-[900px] ">
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
            className="w-fit py-1 px-4 rounded-full bg-green-200"
            onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="relative h-[1400px]">
          {isDataValid &&  <Greenglance formData={formData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
