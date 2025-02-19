import React, { useState } from "react";
import UserInfoStep from "./UserInfoStep";
import SkillsStep from "./SkillsStep";
import ExperienceStep from "./ExperienceStep";
import EducationStep from "./EducationStep";
import CertificatesStep from "./CertificatesStep";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    profile: {
      name: {
        firstname: "",
        middlename: "",
        lastname: "",
      },
      email: "",
      phone: "",
      location: "",
      links: [
        {
          type: "",
          url: "",
        },
      ],
      summary: "",
    },
    skills: [],
    experience: [
      {
        title: "",
        company: "",
        location: "",
        duration: "",
        responsibilities: [""],
      },
    ],
    education: [
      {
        degree: "",
        university: "",
        year: "",
        location: "",
      },
    ],
    certificates: [
      {
        title: "",
        issued_by: "",
        year: "",
      },
    ],
  });

  const [currentStep, setCurrentStep] = useState(1);

  // Generic function to update any section of the formData.
  const updateSection = (section, updatedData) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: updatedData,
    }));
  };

  // Render different form steps based on currentStep.
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="w-full min-h-[400px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg text-left">
            <div className="w-full"> 
             <h2 className="text-xl font-[600]">Lets start with your deatils </h2>
             <p>Provide essential information to proceed. </p>
          </div>

            <UserInfoStep
            formData={formData}
            updateData={(updatedProfile) => {
              updateSection("profile", updatedProfile);
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
          </div>
        );
      case 2:
        return (
          <div className="w-full min-h-[400px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg text-left">
          <div className="w-full"> 
           <h2 className="text-xl font-[600]">Lets add your skils </h2>
           <p>Provide all your skills </p>
        </div>
          <SkillsStep
            formData={formData}
            updateData={(updatedSkills) => {
              updateSection("skills", updatedSkills);
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
                 </div>
        );
      case 3:
        return (
          <div className="w-full min-h-[400px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg text-left">
          <div className="w-full"> 
           <h2 className="text-xl font-[600]">Lets add your skils </h2>
           <p>Provide all your skills </p>
        </div>
     
          <ExperienceStep
            formData={formData}
            updateData={(updatedExperience) => {
              updateSection("experience", updatedExperience);
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
             </div>
          
        );
      case 4:
        return (
          <div className="w-full min-h-[400px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg text-left">
          <div className="w-full"> 
           <h2 className="text-xl font-[600]">Lets add your skils </h2>
           <p>Provide all your skills </p>
        </div>
        <EducationStep
            formData={formData}
            updateData={(updatedEducation) => {
              updateSection("education", updatedEducation);
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
                 </div>
          
        );
      case 5:
        return (
          <div className="w-full min-h-[400px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg text-left">
          <div className="w-full"> 
           <h2 className="text-xl font-[600]">Lets add your skils </h2>
           <p>Provide all your skills </p>
        </div>
        <CertificatesStep
            formData={formData}
            updateData={(updatedCertificates) => {
              updateSection("certificates", updatedCertificates);
              setCurrentStep((prevStep) => prevStep + 1);
            }}/>
                 </div>
          
         
        );
      case 6:
        console.log(formData);
        return <div>Form data printed to console</div>;
      default:
        return <div>Invalid Step</div>;
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-gray-300">
      <div className="max-w-fit h-[400px] grid gap-2 place-items-start  p-2 box-border">
      
        <div className="w-fit flex items-center justify-between gap-2">
          {["Profile", "Skill", "Experience","Education","Certificates"].map((item, index) => (
            <div
              onClick={() => setCurrentStep(index + 1)}
              key={index}
              className={`rounded-full  p-1 px-4 ${
                index + 1 === currentStep
                  ? "bg-black  text-white "
                  : "shadow-md bg-black/10"
              }  font-bold transition-all ease-in-out duration-300 flex items-center gap-2`}
            >
              {index + 1} 
              <span>{item}</span>
            </div>
          ))}
        </div>
        {renderStep()}

      </div>
    </div>
  );
};

export default MultiStepForm;
