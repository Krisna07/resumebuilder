import React, { useState } from "react";
import Input from "../Input";
import FormNavigator from "./FormNavigator";

interface FormData {
  certificates: { title: string; issued_by: string; year: string }[];
}

interface CertificatesStepProps {
  formData: FormData;
  updateData: (name: keyof FormData, data: any) => void;
}

const CertificatesStep: React.FC<CertificatesStepProps> = ({
  formData,
  updateData,
}) => {
  const [certData, setCertData] = useState(formData.certificates);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: string
  ) => {
    const { value } = e.target;
    setCertData((prevState: any) => {
      const updatedCerts = [...prevState];
      updatedCerts[index] = { ...updatedCerts[index], [field]: value };
      return updatedCerts;
    });
  };

  const addCertificate = () => {
    setCertData((prevState: any) => [
      ...prevState,
      { title: "", issued_by: "", year: "" },
    ]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateData("certificates", certData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full grid gap-4">
        {certData.map((cert: any, index: number) => (
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
      </form>
      <FormNavigator handleSubmit={handleSubmit} />
    </>
  );
};

export default CertificatesStep;
