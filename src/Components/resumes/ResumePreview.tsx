import React, { useRef, useState } from "react";
import { ResumeData } from "../../types";
import MinimalPDF from "../../Components/resumes/templates/Minimal";
import Modern from "../../Components/resumes/templates/Modern";
import Button from "../Button";
import { GenerateResume } from "../Aiactions/generate";
import { FaChevronLeft, FaDownload } from "react-icons/fa6";
import html2pdf from "html2pdf.js";
import Creative from "./templates/Creative";
import Professional from "./templates/Professional";
type TemplateKey = "modern" | "minimal" | "professional" | "creative";

const templates: Record<
  TemplateKey,
  React.ComponentType<{ formData: ResumeData }>
> = {
  modern: Modern,
  creative: Creative,
  professional: Professional,
  minimal: MinimalPDF,
};

const ResumePreview = ({
  formData,
  handleReview,
}: {
  formData: ResumeData;
  handleReview?: () => void;
}) => {
  const [generatedResume, setGeneratedResume] = useState<ResumeData>(formData);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] =
    useState<keyof typeof templates>("creative");
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const SelectedTemplate = templates[selectedTemplate];

  const generateResume = async () => {
    setIsGenerating(true);
    try {
      const result = await GenerateResume(generatedResume);

      setGeneratedResume(result);
    } catch (error) {
      console.error("Error generating resume:", error);
      alert("Failed to generate resume. Please try again.");
      setError("oops!! Failed to rasie Resume AI ");
    } finally {
      setIsGenerating(false);
    }
  };
  const resumeRef = useRef(null);
  const generatePDF = () => {
    const options = {
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Ensure the PDF is generated with selectable text, not images
    const pdfOptions = {
      html2canvas: {
        useCORS: true, // To ensure that cross-origin images work
        scale: 2,
        logging: true, // To help with debugging
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true, // Compress content to optimize PDF size
      },
    };

    html2pdf()
      .from(resumeRef.current) // Capture content from the resumeRef element
      .set(pdfOptions) // Apply the custom PDF options
      .save();
  };

  return (
    <div className="w-full flex flex-col gap-2 h-screen place-items-center">
      <div className="mb-6 flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-2 items-center ">
          <label
            htmlFor="template-select"
            className="font-medium whitespace-nowrap"
          >
            Choose Template:
          </label>
          <select
            id="template-select"
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value as TemplateKey)}
            className="border rounded px-2 py-1"
          >
            <option value="minimal">Minimal</option>
            <option value="creative">Creative</option>
            <option value="professional">Professional</option>
            <option value="modern">Modern</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => generateResume()}
            children={isGenerating ? "Generating..." : "Regenerate"}
            size="small"
            variant="secondary"
          />
          <Button
            type="button"
            variant="secondary"
            size="small"
            onClick={handleReview} // Changed to directly reference handleReview
          >
            <FaChevronLeft /> Review
          </Button>
          <Button
            type="button"
            variant="primary"
            size="small"
            onClick={generatePDF}
            // className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            <span className="flex items-center gap-2">
              Download <FaDownload />
            </span>
          </Button>
        </div>
      </div>

      <div className="bg-white  w-full  shadow-md rounded-md min-[800px]:max-w-3xl  ">
        {error ? (
          <div className="p-8 text-center text-red-500">{error}</div>
        ) : (
          <div ref={resumeRef} className="w-full ">
            <SelectedTemplate formData={formData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
