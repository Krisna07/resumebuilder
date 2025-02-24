import React, { useState } from "react";
import { ResumeData } from "../../types";
import { GenerateResume } from "../Aiactions/generate";
import Button from "../Button";
import Creative from "./Creative";

export interface ResumePreviewStepProps {
  formData: ResumeData;
}

const ResumePreviewStep: React.FC<ResumePreviewStepProps> = ({ formData }) => {
  const [generatedResume, setGeneratedResume] = useState<ResumeData>(formData);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateResume = async () => {
    setIsGenerating(true);
    try {
      const result = await GenerateResume(generatedResume);
      console.log(result);
      setGeneratedResume(result);
    } catch (error) {
      console.error("Error generating resume:", error);
      alert("Failed to generate resume. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  //   const { profile, skills, experience, education, certificates } =
  //     generatedResume;

  return (
    <>
      <div className="max-[900px]:w-full w-[900px]">
        <Button
          variant="primary"
          onClick={() => generateResume()}
          children={isGenerating ? "Generating..." : "Regenerate"}
          size={"small"}
        />
        <Creative formData={generatedResume} />
      </div>
    </>
  );
};

export default ResumePreviewStep;
