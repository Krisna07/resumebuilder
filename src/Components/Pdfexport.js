import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import Creative from "./ResumeDesigns/Creative";
import { FaDownload } from "react-icons/fa";
import Greenglance from "./ResumeDesigns/Greenglance";
import SunriseChrono from "./ResumeDesigns/Sunrisechrono";

const PDFExport = ({ formData, resume }) => {
  const ref = useRef(null);

  const generatePDF = () => {
    const element = ref.current;
    if (!element) {
      console.error("Invalid element provided");
      return;
    }

    html2pdf(element, {
      margin: 0,
      filename: "Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  };

  return (
    <div className="relative grid gap-4">
      <div ref={ref}>
        <div className="w-[210mm] h-[297mm] bg-white shadow-[0_0_4px_0_gray] px-16 py-8  leading-[120%]">
          {resume == "greenglance" && <Greenglance formData={formData} />}
          {resume == "creative" && <Creative formData={formData} />}
          {resume == "sunrisechrono" && <SunriseChrono formData={formData} />}
        </div>
      </div>
      <button
        className="w-fit px-4 leading-[120%] flex items- gap-2 py-1 text-sm font-semibold bg-green-400 rounded-full"
        onClick={generatePDF}>
        Download <FaDownload color="gray" />
      </button>
    </div>
  );
};

export default PDFExport;
