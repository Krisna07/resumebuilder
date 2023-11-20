import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/formcomponents/Profile";
import Summary from "./Components/formcomponents/Summary";
import Skills from "./Components/formcomponents/Skills";
import Experience from "./Components/formcomponents/Experience";
import Education from "./Components/formcomponents/Education";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreativePDF from "./Components/Pdfexport";

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

  useEffect(() => {}, [formData]);

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

      toast("Data is valid, loading GreenGlance...");
    } else {
      setIsDataValid(false);

      switch (invalidField) {
        case "profile":
          toast("Please enter your profile.");
          break;
        case "summary":
          toast("Please provide a summary.");
          break;
        case "skills":
          toast("Please add at least one skill.");
          break;
        case "experience":
          toast("Please add at least one experience.");
          break;
        case "education":
          toast("Please add at least one education entry.");
          break;
        default:
          toast("Please complete all required fields.");
      }
    }
  };
  const DummyformData = {
    profile: {
      firstname: "John",
      lastname: "Doe",
      phone: "1234567890",
      email: "john@example.com",
      street: "123 Main St",
      state: "California",
      postcode: "90210",
    },
    summary:
      "Adept in both soft skills—like Communication and Teamwork—and hard technical skills, John is dedicated to continuous learning and growth. His professional journey reflects a commitment to excellence and a passion for leveraging his technical expertise to contribute effectively to any organization.",
    skills: {
      softSkills: [
        "Communication",
        "Teamwork",
        "Adaptability",
        "Problem-solving",
        "Time Management",
        "Leadership",
        "Creativity",
      ],
      hardSkills: [
        "JavaScript",
        "React",
        "Node.js",
        "HTML5",
        "CSS3",
        "Git",
        "Python",
        "Express.js",
      ],
    },
    experience: [
      {
        title: "Software Developer",
        company: "ABC Inc",
        from: "2018",
        to: "2022",
        summary: [
          "Contributed to the development of small-scale applications as part of a dynamic team.",
          "Worked closely with senior developers, actively participating in coding and testing processes.",
          "Gained hands-on experience, refining skills in various programming languages and development tools.",
          "Proactive approach and quick adaptability led to effective contributions towards successful software solution deployments.",
        ],
      },
      {
        title: "Intern",
        company: "XYZ Corporation",
        from: "2017",
        to: "2018",
        summary: [
          "Spearheaded various web development projects using React and Node.js.",
          "Collaborated within a talented team and individually designed and implemented innovative solutions.",
          "Responsible for coding, testing, and debugging applications to ensure high-quality software.",
          "Actively engaged in project planning and analysis, offering valuable insights to enhance project outcomes and team efficiency.",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of ABC",
        state: "California",
        country: "USA",
        from: "2014",
        to: "2018",
      },
      {
        degree: "High School Diploma",
        institution: "XYZ High School",
        state: "California",
        country: "USA",
        from: "2010",
        to: "2014",
      },
    ],
  };

  const [resume, setResume] = useState("");

  return (
    <div className="w-full  grid place-items-center ">
      <Header
        selectResume={setResume}
        resume={resume}
      />

      <ToastContainer />
      <div
        className={`w-fit h-full overflow-hidden  flex 
        place-items-center py-4 p-4 `}>
        <div className="h-full w-fit">
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
        <CreativePDF
          formData={formData.profile ? formData : DummyformData}
          resume={resume}
        />
      </div>
    </div>
  );
}

export default App;
