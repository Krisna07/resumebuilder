import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { RefObject } from "react";
import { ResumeData } from "../../types";

// Define the options interface
interface PDFExportOptions {
  scale?: number;
  fileName?: string;
  paperFormat?: string;
  orientation?: "portrait" | "p" | "l" | "landscape";
  margin?: number;
  quality?: number;
  backgroundColor?: string;
  onStart?: () => void;
  onComplete?: () => void;
  onError?: (error: Error) => void;
}

/**
 * Utility function to export any resume template as PDF
 *
 * @param {React.RefObject} elementRef - Reference to the DOM element to export
 * @param {Object} formData - Resume data (used for filename generation)
 * @param {Object} options - Optional configuration settings
 * @returns {Promise<void>}
 */
export const exportResumeToPDF = async (
  elementRef: RefObject<HTMLElement>,
  formData: ResumeData,
  options: PDFExportOptions = {}
) => {
  const {
    scale = 2,
    fileName = `${formData.profile.fullname.replace(/\s+/g, "_")}_Resume.pdf`,
    paperFormat = "a4",
    orientation = "portrait",
    margin = 0,
    quality = 0.95,
    backgroundColor = "#ffffff",
  } = options;

  if (!elementRef.current) {
    console.error("Element reference is not valid");
    return;
  }

  try {
    // Show loading indicator if provided
    if (options.onStart) {
      options.onStart();
    }

    // Create canvas from the element
    const canvas = await html2canvas(elementRef.current, {
      scale: scale,
      useCORS: true,
      logging: false,
      backgroundColor,
      allowTaint: true,
    });

    // Initialize PDF document
    const pdf = new jsPDF({
      orientation: orientation as "portrait" | "p" | "l" | "landscape",
      unit: "mm",
      format: paperFormat,
    });

    // Get dimensions
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const aspectRatio = canvas.width / canvas.height;
    const imgWidth = pdfWidth - margin * 2;
    const imgHeight = imgWidth / aspectRatio;

    // Add image to document
    pdf.addImage(
      canvas.toDataURL("image/jpeg", quality),
      "JPEG",
      margin,
      margin,
      imgWidth,
      imgHeight
    );

    // Handle multi-page content
    if (imgHeight > pdfHeight - margin * 2) {
      let remainingHeight = imgHeight;
      let position = -(pdfHeight - margin * 2);

      while (remainingHeight > 0) {
        position += pdfHeight - margin * 2;
        remainingHeight -= pdfHeight - margin * 2;

        if (remainingHeight > 0) {
          pdf.addPage();
          pdf.addImage(
            canvas.toDataURL("image/jpeg", quality),
            "JPEG",
            margin,
            margin - position,
            imgWidth,
            imgHeight
          );
        }
      }
    }

    // Download PDF
    pdf.save(fileName);

    // Callback on completion
    if (options.onComplete) {
      options.onComplete();
    }

    return pdf; // Return the pdf object for further customization if needed
  } catch (error) {
    console.error("Error generating PDF:", error);

    // Callback on error
    if (options.onError) {
      options.onError(error as Error);
    }

    throw error;
  }
};
