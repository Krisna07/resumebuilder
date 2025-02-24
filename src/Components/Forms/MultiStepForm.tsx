import React, { useEffect, useState } from "react";
import UserInfoStep from "./UserInfoStep";
import SkillsStep from "./SkillsStep";
import ExperienceStep from "./ExperienceStep";
import EducationStep from "./EducationStep";
import CertificatesStep from "./CertificatesStep";

import {
  Certificates,
  Education,
  Experience,
  Profile,
  ResumeData,
} from "../../types";
import Button from "../Button";
import FormLayout from "./FomLayout";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ResumePreviewStep from "../ResumeDesigns/ResumePreview";

interface MultiStepFormProps {
  resumeContent: ResumeData;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ resumeContent }) => {
  const [formData, setFormData] = useState<ResumeData>(resumeContent);

  useEffect(() => {
    setFormData(resumeContent);
  }, [resumeContent]);

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 6));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
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
              <EducationStep
                data={formData.education}
                onChange={(data: Education[]) =>
                  setFormData({ ...formData, education: data })
                }
              />
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
                data={formData.certificates}
                onChange={(data: Certificates[]) =>
                  setFormData({ ...formData, certificates: data })
                }
              />
            }
            heading={"Let's add your certificates"}
            subheading={"Provide your certifications."}
          />
        );
      case 6:
        return <ResumePreviewStep formData={formData} />;
      default:
        return <div>Invalid Step</div>;
    }
  };

  return (
    <div className="grid place-items-center transition-all ease-in-out duration-300">
      <div className="w-full  grid gap-2 place-items-start p-2 box-border ">
        {currentStep != 6 && (
          <div className="w-full flex items-center justify-center gap-2">
            {[
              "Profile",
              "Skill",
              "Experience",
              "Education",
              "Certificates",
            ].map((item, index) => (
              <div
                onClick={() => setCurrentStep(index + 1)}
                key={index}
                className={`w-fit cursor-pointer  transition-all ease-in-out duration-300 flex items-center gap-2 ${
                  index + 1 === currentStep ? "text-black" : "text-black/50"
                } `}
              >
                <span
                  className={`w-[20px] h-[20px]  grid place-items-center text-center transition-all ease-in-out duration-300 leading-[80%] text-sm rounded-full ${
                    index + 1 === currentStep
                      ? "bg-black/50 text-white"
                      : " w-fit bg-white"
                  } `}
                >
                  {index + 1}
                </span>
                <span
                  className={`${
                    index + 1 === currentStep
                      ? "max-[650px]:block"
                      : "max-[650px]:hidden"
                  }`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}

        {renderStep()}

        <div className="mt-6 w-full flex justify-between">
          <Button
            type="button"
            variant="secondary"
            size="small"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            <FaChevronLeft /> {currentStep === 6 ? "Review" : "Previous"}
          </Button>

          {currentStep != 6 && (
            <Button
              type="button"
              variant="primary"
              size="small"
              onClick={handleNext}
              disabled={currentStep === 6}
            >
              {currentStep === 5 ? "Submit" : "Next"} <FaChevronRight />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
