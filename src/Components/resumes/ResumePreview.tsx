import React, { useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { exportResumeToPDF } from "./pdfExportUtility";

// Import your resume templates
import Creative from "../ResumeDesigns/Creative";
import { Minimal, Modern, Professional } from "./templates/ResumeTemplates";
import { ResumeData } from "../../types";

// Define valid template keys
type TemplateKey = "creative" | "modern" | "professional" | "minimal";

const templates: Record<
  TemplateKey,
  React.ComponentType<{ formData: ResumeData }>
> = {
  creative: Creative,
  modern: Modern,
  professional: Professional,
  minimal: Minimal,
};

const ResumePreview = ({ formData }: { formData: ResumeData }) => {
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateKey>("modern");
  const [isExporting, setIsExporting] = useState(false);
  const resumeRef = useRef(null);

  const handleExportPDF = async () => {
    setIsExporting(true);

    try {
      await exportResumeToPDF(resumeRef, formData, {
        onComplete: () => setIsExporting(false),
        onError: () => setIsExporting(false),
      });
    } catch (error) {
      setIsExporting(false);
    }
  };

  const SelectedTemplate = templates[selectedTemplate];

  return (
    <div className="w-full flex flex-col">
      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-2">
          <label htmlFor="template-select" className="font-medium">
            Choose Template:
          </label>
          <select
            id="template-select"
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value as TemplateKey)}
            className="border rounded px-2 py-1"
          >
            <option value="creative">Creative</option>
            <option value="modern">Modern</option>
            <option value="professional">Professional</option>
            <option value="minimal">Minimal</option>
            <option value="chronological">Chronological</option>
          </select>
        </div>

        <button
          onClick={handleExportPDF}
          disabled={isExporting}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition disabled:opacity-50"
        >
          {isExporting ? (
            "Generating PDF..."
          ) : (
            <>
              <FaDownload size={14} /> Download PDF
            </>
          )}
        </button>
      </div>

      <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
        <div ref={resumeRef} className="p-8">
          <SelectedTemplate formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
