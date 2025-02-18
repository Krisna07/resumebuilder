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
          <UserInfoStep
            formData={formData}
            updateData={(updatedProfile) => {
              updateSection("profile", updatedProfile);
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
        );
      case 2:
        return (
          <SkillsStep
            formData={formData}
            updateData={(updatedSkills) => {
              updateSection("skills", updatedSkills);
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
        );
      case 3:
        return (
          <ExperienceStep
            formData={formData}
            updateData={(updatedExperience) => {
              updateSection("experience", updatedExperience);
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
        );
      case 4:
        return (
          <EducationStep
            formData={formData}
            updateData={(updatedEducation) => {
              updateSection("education", updatedEducation);
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
        );
      case 5:
        return (
          <CertificatesStep
            formData={formData}
            updateData={(updatedCertificates) => {
              updateSection("certificates", updatedCertificates);
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
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
      <div className="max-w-[600px] w-full grid gap-2">
        <div className="flex items-center justify-between">
          {[...Array(5)].map((item, index) => (
            <div
              onClick={() => setCurrentStep(index + 1)}
              key={index}
              className={`rounded-full w-[40px] p-2 ${
                index + 1 === currentStep
                  ? "bg-black  text-white "
                  : "shadow-md bg-black/10"
              } text-center font-bold transition-all ease-in-out duration-300`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepForm;
