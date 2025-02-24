import React, { useState, ChangeEvent } from "react";

const PdfPreview: React.FC = () => {
  const [file, setFile] = useState<string | null>(null);

  // Function to handle file input change (file selection)
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(URL.createObjectURL(selectedFile)); // Generate URL for the file
    } else {
      alert("Please upload a valid PDF file");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Upload and Preview PDF
      </h2>

      {/* File input field */}
      <input
        type="file"
        accept="application/pdf"
        onChange={onFileChange}
        className="mb-4 p-2 border border-gray-300 rounded-lg w-full text-sm"
      />

      {/* Display the PDF using the embed tag */}
      {file && (
        <embed
          src={file}
          type="application/pdf"
          width="100px"
          height="600px"
          className="w-[1000px] border-2 border-gray-200 rounded-md shadow-md mx-auto"
        />
      )}
    </div>
  );
};

export default PdfPreview;
