import { useState } from "react";

import MultiStepForm from "./Components/Forms/MultiStepForm";
import pdfToText from "react-pdftotext";
import { GenerateResume } from "./Components/Aiactions/generate";
import { ResumeData } from "./types";

const App = () => {
  const [file, setFile] = useState<File | null>(null);
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
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Please upload a valid PDF file.");
        return;
      }
      setFile(file);
      setLoading(true);
      setError(null); // Reset error state

      try {
        const data = await pdfToText(file);
        const result = await GenerateResume(undefined, data);
        setResumeContent(result); // Store the parsed content
      } catch {
        setError("Failed to process the resume.");
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="w-full min-h-screen grid place-items-center ">
      
      <div className="p-4 bg-white shadow-lg w-fit rounded-lg hover:shadow-[0_0_2px_0_gray] transition-all ease-in-out duration-300">
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
      
      </div>
      {resumeContent.profile.fullname && <MultiStepForm resumeContent={resumeContent} />}
      {resumeContent && (
          <div className="mt-4">
            <h2>Parsed Resume Content:</h2>

            <object data={`${file?file:""}`} 
        type='application/pdf' 
        width='100%' height='700px'>
</object>
            {/* <pre>{resumeContent}</pre> Display parsed content here */}
          </div>
        )}
    </div>
  );
};

export default App;
