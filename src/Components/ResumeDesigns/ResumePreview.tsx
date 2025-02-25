import React, { useState, useRef } from "react";
import { ResumeData } from "../../types";
import { GenerateResume } from "../Aiactions/generate";
import Button from "../Button";
import Creative from "./Creative";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";

export interface ResumePreviewStepProps {
  formData: ResumeData;
}

const ResumePreviewStep: React.FC<ResumePreviewStepProps> = ({ formData }) => {
  const [generatedResume, setGeneratedResume] = useState<ResumeData>(formData);
  const [isGenerating, setIsGenerating] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

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

  const downloadPDF = () => {
    const jsPdf = new jsPDF("p", "pt", "letter");
    const htmlElement = resumeRef.current; // Reference to the HTML content
    const opt = {
      callback: function (jsPdf: jsPDF) {
        jsPdf.save(`${formData.profile.fullname}_Resume.pdf`);
      },
      margin: [20, 20, 20, 20], // Set appropriate margins
      autoPaging: "text", // Crucial for handling text flow across pages
      html2canvas: {
        allowTaint: true,
        letterRendering: true,
        logging: false,
        scale: 0.73, // Adjust the scale to fit content
      },
    };
    if (htmlElement) {
      jsPdf.html(htmlElement, {
        ...opt,
        autoPaging: true, // Changed from 'text' to true to match HTMLOptions type
      });
    }
  };
  // ... existing code ...

  return (
    <>
      <div className="max-[900px]:w-full w-[900px] grid place-items-center gap-4">
        <div className="flex gap-4">
          <Button
            variant="primary"
            onClick={() => generateResume()}
            children={isGenerating ? "Generating..." : "Regenerate"}
            size={"small"}
          />
          <Button
            variant="secondary"
            onClick={downloadPDF}
            children="Download PDF"
            size={"small"}
          />
        </div>
        <div ref={resumeRef} className="bg-white w-[210mm] p-8">
          <Creative formData={generatedResume} />
        </div>
      </div>
    </>
  );
};

export default ResumePreviewStep;
