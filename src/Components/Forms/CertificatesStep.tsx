import React, { useState } from "react";
import Input from "../Input";
import FormNavigator from "./FormNavigator";
import { Certificates, ResumeData } from "../../types";
import Button from "../Button";

// interface FormData {
//   certificates: { title: string; issued_by: string; year: string }[];
// }

interface CertificatesStepProps {
  formData: ResumeData;
  handleSubmit: (name: string, data: Certificates[]) => void;
}

const CertificatesStep: React.FC<CertificatesStepProps> = ({
  formData,
  handleSubmit,
}) => {
  const [certData, setCertData] = useState(formData.certificates);
  const [certificate, setCertificate] = useState<Certificates>({
    title: "",
    issued_by: "",
    year: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCertificate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    setCertData((prevData = []) => [...prevData, certificate]);
    setCertificate({
      title: "",
      issued_by: "",
      year: "",
    });
  };
  const removeCertificate = (index: number) => {
    setCertData((prevData = []) => prevData.filter((_, idx) => idx !== index));
  };
  const submitForm = () => {
    console.log(certData);
    handleSubmit("certificates", certData);
  };

  return (
    <>
      <div className="mb-4">
        {certData &&
          certData.map((cert: Certificates, index: number) => (
            <div
              key={index}
              className="border p-2 mb-2 rounded flex flex-col gap-2 bg-gray-100"
            >
              <h2 className="text-lg font-bold">{cert.title}</h2>

              <div>{cert.issued_by}</div>
              <p>{cert.year}</p>

              <Button
                type="button"
                variant="danger"
                size="small"
                onClick={() => removeCertificate(index)}
              >
                Remove Experience
              </Button>
            </div>
          ))}
      </div>
      <form onSubmit={addCertificate} className="w-full grid gap-4">
        <div className="w-full">
          <Input
            type="text"
            name="title"
            value={certificate.title}
            onChange={handleChange}
            placeholder="Certificate Title"
          />
          <Input
            type="text"
            name="issued_by"
            value={certificate.issued_by}
            onChange={handleChange}
            placeholder="Issued By"
          />
          <Input
            type="text"
            name="year"
            value={certificate.year}
            onChange={handleChange}
            placeholder="Year"
          />
        </div>
      </form>
      <FormNavigator handleSubmit={submitForm} />
    </>
  );
};

export default CertificatesStep;
