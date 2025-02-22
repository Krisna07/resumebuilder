import React, { useState } from "react";
import UserInfoStep from "./UserInfoStep";
import SkillsStep from "./SkillsStep";
import ExperienceStep from "./ExperienceStep";
import EducationStep from "./EducationStep";
import CertificatesStep from "./CertificatesStep";
import FormLayout from "./FomLayout";
import { Experience, Profile, ResumeData } from "../../types";

const MultiStepForm: React.FC = () => {
  const [formData, setFormData] = useState<ResumeData>({
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
    experience: [],
    education: [],
    certificates: [],
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (
    name: string,
    data: Partial<ResumeData[keyof ResumeData]>
  ) => {
    setFormData((prevState: ResumeData) => ({
      ...prevState,
      [name]: data,
    }));
    setCurrentStep(currentStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <FormLayout
            children={
              <UserInfoStep
                data={formData.profile}
                onChange={(data: Profile) =>
                  setFormData({ ...formData, profile: data })
                }
              />
            }
            heading={"Let's start with your details"}
            subheading={"Provide essential information to proceed."}
          />
        );
      case 2:
        return (
          <FormLayout
            children={
              <SkillsStep
                data={formData.skills}
                updateSkills={(data: string[]) =>
                  setFormData({ ...formData, skills: data })
                }
              />
            }
            heading={"Lets add your skills"}
            subheading={"Please list all your skills "}
          />
        );
      case 3:
        return (
          <FormLayout
            children={
              <ExperienceStep
                data={formData.experience}
                onChange={(data: Experience[]) =>
                  setFormData({ ...formData, experience: data })
                }
              />
            }
            heading={"Add your Experience"}
            subheading={"Provide your work experience"}
          />
        );
      case 4:
        return (
          <FormLayout
            children={
              <EducationStep formData={formData} handleSubmit={handleSubmit} />
            }
            heading={"Add your Educations"}
            subheading={"Provide all your academic qualifications."}
          />
        );
      case 5:
        return (
          <FormLayout
            children={
              <CertificatesStep
                formData={formData}
                handleSubmit={handleSubmit}
              />
            }
            heading={"Let's add your certificates"}
            subheading={"Provide your certifications."}
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
    <div className="grid place-items-center transition-all ease-in-out duration-300">
      <div className="w-full min-[650px]:w-[650px] h-[400px] grid gap-2 place-items-start p-2 box-border">
        <div className="w-full flex items-center justify-center gap-2">
          {["Profile", "Skill", "Experience", "Education", "Certificates"].map(
            (item, index) => (
              <div
                onClick={() => setCurrentStep(index + 1)}
                key={index}
                className={`rounded-full cursor-pointer min-w-[18px] h-[30px] px-[12px] ${
                  index + 1 === currentStep
                    ? "bg-black text-white"
                    : "shadow-md w-fit bg-black/10"
                } font-semibold text-[14px] transition-all ease-in-out duration-300 flex items-center justify-center`}
              >
                {index + 1}
                <span
                  className={`${
                    index + 1 === currentStep
                      ? "max-[650px]:block"
                      : "max-[650px]:hidden"
                  }`}
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
