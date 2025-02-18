import React, { useState, useEffect } from "react";
import Input from "../Input";

const CertificatesStep = ({ formData, updateData }) => {
  const [certData, setCertData] = useState(formData.certificates);

  const handleChange = (e, index, field) => {
    const { value } = e.target;
    setCertData((prevState) => {
      const updatedCerts = [...prevState];
      updatedCerts[index] = { ...updatedCerts[index], [field]: value };
      return updatedCerts;
    });
  };

  const addCertificate = () => {
    setCertData((prevState) => [
      ...prevState,
      { title: "", issued_by: "", year: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(certData);
    // Move to the next step
  };

  return (
    <div className="max-w-[600px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg">
      <h3>Step 5: Certificates</h3>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {certData.map((cert, index) => (
          <div key={index}>
            <Input
              type="text"
              name="title"
              value={cert.title}
              onChange={(e) => handleChange(e, index, "title")}
              placeholder="Certificate Title"
            />
            <Input
              type="text"
              name="issued_by"
              value={cert.issued_by}
              onChange={(e) => handleChange(e, index, "issued_by")}
              placeholder="Issued By"
            />
            <Input
              type="text"
              name="year"
              value={cert.year}
              onChange={(e) => handleChange(e, index, "year")}
              placeholder="Year"
            />
          </div>
        ))}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={addCertificate}
            className="w-fit px-2 p-1 bg-gray-300 rounded-md"
          >
            Add Certificate
          </button>
          <button
            type="submit"
            className="w-fit px-2 p-1 bg-green-300 rounded-md"
          >
            Submit Certificates
          </button>
        </div>
      </form>
    </div>
  );
};

export default CertificatesStep;
