import React, { useState } from "react";
import Input from "../Input";
import FormNavigator from "./FormNavigator";

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
    updateData("certificates", certData);
    // Move to the next step
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full grid gap-4">
        {certData.map((cert, index) => (
          <div key={index} className="w-full">
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

        <button
          type="button"
          onClick={addCertificate}
          className="w-fit px-2 p-1 bg-gray-300 rounded-md"
        >
          Add Certificate
        </button>
      </form>
      <FormNavigator handleSubmit={handleSubmit} />
    </>
  );
};

export default CertificatesStep;
