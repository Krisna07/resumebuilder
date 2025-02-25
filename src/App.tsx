import { useState } from "react";

import MultiStepForm from "./Components/Forms/MultiStepForm";
import pdfToText from "react-pdftotext";
import { GenerateResume } from "./Components/Aiactions/generate";
import { ResumeData } from "./types";
import Button from "./Components/Button";

const App = () => {
  const [file, setFile] = useState<File | null>(null);
  const [manual, setManual] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [manual, setManual] = useState<boolean>(false);
  const [resumeContent, setResumeContent] = useState<ResumeData>({
    profile: {
      fullname: "",
      email: "",
      phone: "",
      location: "",
      links: [
        {
          type: "",
          url: "",
        },
      ],
      summary: "",
    },
    skills: [],
    experience: [],
    education: [],
    certificates: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log(event.target.files);
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Please upload a valid PDF file.");
        return;
      }
      setFile(file);
      setPreview(URL.createObjectURL(file));
      setLoading(true);
      setError(null); // Reset error state

      try {
        const data = await pdfToText(file);
        const result = await GenerateResume(undefined, data);
<<<<<<< HEAD
        if (result) {
          setManual(true);
          setResumeContent(result); // Store the parsed content
        }
=======
        result && setManual(true)
        setResumeContent(result); // Store the parsed content
>>>>>>> 027fa570ec2a0254e3bec63326e0d27c17e206c1
      } catch {
        setError("Failed to process the resume.");
      } finally {
        setLoading(false);
      }
    }
  };
<<<<<<< HEAD

  return (
    <div className="min-w-full min-h-screen grid place-items-center ">
      {!manual && (
        <>
          <div
            className={`relative grid place-items-center w-fit h-fit overflow-hidden p-1 rounded-lg `}
          >
            {loading && (
              <div className="absolute w-[300%] h-[300%] bg-gradient-to-tr from-red-600 via-blue-600 to-yellow-600  animate-spin opacity-25"></div>
            )}
            <div className="relative bg-white hover:shadow-lg  p-4 gap-2 w-fit rounded-lg   ring-1   transition-all ease-in-out duration-300">
              {" "}
              <label
                htmlFor="resume-upload"
                className="block text-lg font-semibold mb-2 "
              >
                Upload Your Resume (PDF)
              </label>
              <input
                type="file"
                id="resume-upload"
                accept="application/pdf"
                onChange={handleFileChange}
                className="file:border p-2"
              />
              {loading && <p>Processing your resume...</p>}
              {error && <p className="text-red-500">{error}</p>}
              <Button
                children={"Add manual Data"}
                variant={"primary"}
                size={"small"}
                onClick={() => setManual(true)}
              />
            </div>
          </div>
=======
 

  return (
    <div className="min-w-full min-h-screen grid place-items-center ">
      {/* <PdfPreview /> */}

      {(!manual) && (
        <>
          <div className="p-4 bg-white hover:shadow-lg w-fit text-center grid place-items-center gap-4 rounded-lg shadow-[0_0_2px_0_gray] transition-all ease-in-out duration-300">
            <label
              htmlFor="resume-upload"
              className="block text-lg font-semibold mb-2"
            >
              Upload Your Resume (PDF)
            </label>
            <input
              type="file"
              id="resume-upload"
              accept="application/pdf"
              onChange={handleFileChange}
              className="file:border p-2"
            />
            {file && (
              <div className="mt-2">
                <strong>Selected file:</strong> {file.name}
              </div>
            )}
            {loading && <p>Processing your resume...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <Button
            children={"Add manual Data"}
            variant={"primary"}
            size={"small"}
            onClick={() => setManual(true)}
          />
          </div>
          
>>>>>>> 027fa570ec2a0254e3bec63326e0d27c17e206c1
        </>
      )}
      {(resumeContent.profile.fullname || manual) && (
        <MultiStepForm resumeContent={resumeContent} />
      )}
      {/* {preview && (
        <div className="mt-4">
          <h2>Parsed Resume Content:</h2>
          <embed
            className=""
            src={preview || undefined}
            width="800"
            height="500"
          ></embed>
        </div>
      )} */}
    </div>
  );
};

export default App;
