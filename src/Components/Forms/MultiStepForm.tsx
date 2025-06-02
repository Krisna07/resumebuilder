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
  skills,
} from "../../types";
import Button from "../Button";
import FormLayout from "./FomLayout";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ResumePreview from "../resumes/ResumePreview";
import JobDescription from "./JobDescription";

interface MultiStepFormProps {
  resumeContent: ResumeData;
  jobDescription:string;
  handleResumeDataUpdate: (data: ResumeData) => void;
  handleJobDescription : (data : string)=> void;
  // handleResumeAnalysis:(data:AnalysisResult)=>void
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ resumeContent, handleResumeDataUpdate, handleJobDescription,jobDescription }) => {
  const [formData, setFormData] = useState<ResumeData>(resumeContent);

  useEffect(() => {
    setFormData(resumeContent);
  }, [resumeContent]);

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 7));
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
                updateSkills={(data: skills[]) =>
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
          return (
            <FormLayout
              children={
                <JobDescription
                formData={formData}
                handleJobDescription={handleJobDescription}
                // handleResumeAnalysis={handleResumeAnalysis}
                />
              }
              heading={"Let's add Job description"}
              subheading={"Provide detail job description with roles and responsibilities."}
            />
          );
      case 7:
        return (
          <ResumePreview formData={formData} jobDescription={jobDescription}  handleReview={handlePrevious} handleResumeDataUpdate={handleResumeDataUpdate}  />
        );
      default:
        return <div>Invalid Step</div>;
    }
  };
const navigations = [
  "Profile",
  "Skill",
  "Experience",
  "Education",
  "Certificates",
  "Job Description"
]
  return (
    <div className="w-full grid place-items-center transition-all ease-in-out duration-300">
      <div className="w-full  grid gap-2 place-items-start p-2 box-border ">
        {currentStep != (navigations.length + 1) && (
          <div className="w-full flex items-center justify-center gap-[12px]">
            {navigations.map((item, index) => (
              <div
                onClick={() => setCurrentStep(index + 1)}
                key={index}
                className={`w-fit cursor-pointer  transition-all ease-in-out duration-300 flex items-center ${
                  index + 1 === currentStep ? "text-black" : "text-black/50"
                } `}
              >
                <div
                  className={`min-w-[20px] h-[20px] m-[4px] grid place-items-center text-center transition-all ease-in-out duration-300 leading-[80%] text-sm rounded-full ${
                    index + 1 === currentStep
                      ? "bg-black text-white"
                      : " w-fit bg-white"
                  } `}
                >
                  {index + 1}
                </div>
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

        <div className="w-full grid gap-2 place-items-center relative">
          {renderStep()}

          {currentStep != (navigations.length+1) && (
            <div className="mt-6 gap-4 flex justify-between">
              <Button
                type="button"
                variant="secondary"
                size="small"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                <FaChevronLeft /> {currentStep === 7 ? "Review" : "Previous"}
              </Button>
              <Button
                type="button"
                variant="primary"
                size="small"
                onClick={handleNext}
                disabled={currentStep === 7}
              >
                {currentStep === 6 ? "Submit" : "Next"} <FaChevronRight />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
