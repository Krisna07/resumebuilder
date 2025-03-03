import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { ResumeData } from "../../types";

// Import templates with explicit paths - adjust these paths to match your project structure
import MinimalPDF from "../../Components/resumes/templates/Minimal";
import Modern from "../../Components/resumes/templates/Modern";
import Professional from "../../Components/resumes/templates/Professional";
import Creative from "../ResumeDesigns/Creative"; // Make sure this exists

// Define valid template keys
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

const ResumePreview = ({ formData }: { formData: ResumeData }) => {
  const [selectedTemplate, setSelectedTemplate] =
    useState<keyof typeof templates>("modern");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
            <option value="minimal">Minimal</option>
            <option value="creative">Creative</option>
            <option value="professional">Professional</option>
            <option value="modern">Modern</option>
          </select>
        </div>

        <PDFDownloadLink
          document={<SelectedTemplate formData={formData} />}
          fileName={`${formData.profile.fullname.replace(
            /\s+/g,
            "_"
          )}_Resume.pdf`}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
        >
          {({ loading: pdfLoading, error: pdfError }) => {
            if (pdfError) {
              console.error("PDF generation error:", pdfError);
              return "Error generating PDF";
            }
            return pdfLoading ? (
              "Generating PDF..."
            ) : (
              <>
                <FaDownload size={14} /> Download PDF
              </>
            );
          }}
        </PDFDownloadLink>
      </div>

      <div className="border rounded-lg shadow-lg overflow-hidden bg-white h-screen">
        {error ? (
          <div className="p-8 text-center text-red-500">{error}</div>
        ) : (
          <PDFViewer width="100%" height="100%" className="w-full h-full">
            <SelectedTemplate formData={formData} />
          </PDFViewer>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
