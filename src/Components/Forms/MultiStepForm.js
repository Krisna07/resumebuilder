import React, { useState } from "react";
import UserInfoStep from "./UserInfoStep";
import SkillsStep from "./SkillsStep";
import ExperienceStep from "./ExperienceStep";
import EducationStep from "./EducationStep";
import CertificatesStep from "./CertificatesStep";
import FormLayout from "./FormLayout";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    profile: {
      fullname: "",
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

  const handleSubmit = (name, data) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: data,
    }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Render different form steps based on currentStep.
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <FormLayout
            children={
              <UserInfoStep formData={formData} handleSubmit={handleSubmit} />
            }
            heading={"Let's start with your details"}
            subheading={"Provide essential information to proceed."}
          />
        );
      case 2:
        return (
          <div className="w-full min-h-[400px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg text-left">
            <div className="w-full">
              <h2 className="text-xl font-[600]">Lets add your skils </h2>
              <p>Provide all your skills </p>
            </div>
            <SkillsStep formData={formData} updateData={handleSubmit} />
          </div>
        );
      case 3:
        return (
          <div className="w-full min-h-[400px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg text-left">
            <div className="w-full">
              <h2 className="text-xl font-[600]">Lets add your skils </h2>
              <p>Provide all your skills </p>
            </div>

            <ExperienceStep formData={formData} updateData={handleSubmit} />
          </div>
        );
      case 4:
        return (
          <div className="w-full min-h-[400px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg text-left">
            <div className="w-full">
              <h2 className="text-xl font-[600]">Lets add your skils </h2>
              <p>Provide all your skills </p>
            </div>
            <EducationStep formData={formData} updateData={handleSubmit} />
          </div>
        );
      case 5:
        return (
          <div className="w-full min-h-[400px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg text-left">
            <div className="w-full">
              <h2 className="text-xl font-[600]">Lets add your skils </h2>
              <p>Provide all your skills </p>
            </div>
            <CertificatesStep formData={formData} updateData={handleSubmit} />
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
    <div className="grid place-items-center h-screen bg-gray-300 transition-all ease-in-out duration-300">
      <div className="w-full min-[650px]:w-[650px] h-[400px] grid gap-2 place-items-start  p-2 box-border">
        <div className="w-full  flex items-center justify-center gap-2 ">
          {["Profile", "Skill", "Experience", "Education", "Certificates"].map(
            (item, index) => (
              <div
                onClick={() => setCurrentStep(index + 1)}
                key={index}
                className={`rounded-full min-w-[18px] h-[30px] px-[12px] ${
                  index + 1 === currentStep
                    ? "bg-black  text-white "
                    : "shadow-md w-fit bg-black/10"
                }  font-semibold text-[14px] transition-all ease-in-out duration-300 flex items-center justify-center`}
              >
                {index + 1}
                <span
                  className={`${
                    index + 1 === currentStep
                      ? "max-[650px]:block "
                      : "max-[650px]:hidden "
                  } `}
                >
                  {". "} {item}
                </span>
              </div>
            )
          )}
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepForm;
