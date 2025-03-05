import React, { useState } from "react";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { ResumeData } from "../../types";
import MinimalPDF from "../../Components/resumes/templates/Minimal";
import Modern from "../../Components/resumes/templates/Modern";
import Professional from "../../Components/resumes/templates/Professional";
import Creative from "../ResumeDesigns/Creative";
import Button from "../Button";
import { GenerateResume } from "../Aiactions/generate";
import { FaChevronLeft } from "react-icons/fa6";

type TemplateKey = "creative" | "modern" | "professional" | "minimal";

const templates: Record<
  TemplateKey,
  React.ComponentType<{ formData: ResumeData }>
> = {
  creative: Creative,
  modern: Modern,
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
    useState<keyof typeof templates>("modern");
  const [loading, setLoading] = useState(false);
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
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 h-screen">
      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <label htmlFor="template-select" className="font-medium">
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
            onClick={() => handleReview()}
          >
            <FaChevronLeft /> Review
          </Button>
        </div>

        <PDFDownloadLink
          document={<SelectedTemplate formData={formData} />}
          fileName={`${formData.profile.fullname.replace(
            /\s+/g,
            "_"
          )}_Resume.pdf`}
          className=""
        >
          <Button
            children={`Download Resume`}
            size="medium"
            variant="primary"
          />
        </PDFDownloadLink>
      </div>

      <div className=" border rounded-lg shadow-lg overflow-hidden h-full  bg-red-500   grid place-items-center">
        {error ? (
          <div className="p-8 text-center text-red-500">{error}</div>
        ) : (
          <>
            <PDFViewer
              width="100%"
              height="100%"
              className="w-full h-full bg-white"
            >
              <SelectedTemplate formData={generatedResume} />
            </PDFViewer>
          </>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
