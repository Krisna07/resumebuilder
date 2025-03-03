import { useState } from "react";

import MultiStepForm from "./Components/Forms/MultiStepForm";
import pdfToText from "react-pdftotext";
import { GenerateResume } from "./Components/Aiactions/generate";
import { ResumeData } from "./types";
import Button from "./Components/Button";
import { Upload } from "lucide-react";

const App = () => {
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
    experience: [
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        responsibilities: [],
      },
    ],
    education: [
      {
        degree: "",
        university: "",
        startDate: "",
        location: "",
        current: false,
      },
    ],
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
      // setFile(file);
      // setPreview(URL.createObjectURL(file));
      setLoading(true);
      setError(null); // Reset error state

      try {
        const data = await pdfToText(file);
        const result = await GenerateResume(undefined, data);
        if (result) {
          console.log(result);
          setManual(true);
          setResumeContent(result); // Store the parsed content
        }
      } catch {
        setError("Failed to process the resume.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-w-full min-h-screen grid  place-items-center ">
      {!manual && (
        <>
          <div
            className={`relative  grid place-items-center overflow-hidden p-1   rounded-lg `}
          >
            {loading && (
              <div className="absolute w-[300%] h-[300%] bg-gradient-to-tr from-red-600 via-blue-600 to-yellow-600  animate-spin opacity-25"></div>
            )}
            <div className="relative min-[400px]:w-[400px] bg-white hover:shadow-lg  p-4 gap-2 w-fit rounded-lg grid  ring-1   transition-all ease-in-out duration-300">
              {" "}
              <label
                htmlFor="resume-upload"
                className="block text-lg font-semibold mb-2 font-[Bebas Neue]"
              >
                Get started with your resume
              </label>
              <div className="min-w-full grid place-items-center">
                {" "}
                <div
                  className={`border-dashed relative ${
                    loading
                      ? "w-[100px] h-[100px] rounded-full animate-spin"
                      : "w-full h-[100px]"
                  } border-[1px] border-gray-900 grid place-items-center transition-all ease-out `}
                >
                  <div
                    className={`${
                      loading ? "hidden" : "block"
                    } relative w-full h-full grid place-items-center `}
                  >
                    <Upload />
                    Upload Your Resume
                    <input
                      type="file"
                      id="resume-upload"
                      accept="application/pdf"
                      onChange={handleFileChange}
                      className="file:border p-2 w-full h-full absolute opacity-0 "
                    />
                  </div>
                </div>
              </div>
              {loading && <p>Reading your resume...</p>}
              {error && <p className="text-red-500">{error}</p>}
              <Button
                children={"Add manual Data"}
                variant={"primary"}
                size={"small"}
                onClick={() => setManual(true)}
              />
            </div>
          </div>
        </>
      )}
      {(resumeContent.profile.fullname || manual) && (
        <MultiStepForm resumeContent={resumeContent} />
      )}
    </div>
  );
};

export default App;
