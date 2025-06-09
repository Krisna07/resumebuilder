import React, {  useState } from "react";
import Button from "../Button";
import { analyseResumeToJobDescription } from "../Aiactions/generate";
import { AnalysisResult, ResumeData } from "../../types";
import Input from "../Input";

interface JobDescriptionProps{
  handleJobDescription : (data:string)=> void,
  // handleResumeAnalysis : (data:AnalysisResult)=>void,
  formData:ResumeData
}

const JobDescription:React.FC<JobDescriptionProps>= ({handleJobDescription, formData}) => {
 const [jobDescription, setJobDescription] = useState<string | null>()
 const [url, setUrl] = useState<string|null>()
 const [error, setError] = useState<string| null>()
  const updateJobDescription =(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setError(null)
        setJobDescription(e.target.value)
  }
  const [analysis, setAnalysis] = useState<AnalysisResult|null>()
  const startAnalysis = async()=>{
  if(!jobDescription){
    return setError('No job descripiton')
  }
  const analysisResult:AnalysisResult = await analyseResumeToJobDescription(formData, jobDescription)
  if(analysisResult){
     setAnalysis(analysisResult)
     handleJobDescription(analysisResult.jobDescription)
     console.log(analysis)
  }
}

const updateUrl = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setUrl(e.target.value)
}
const[loading, setLoading] = useState(false)

// const extractDescriptions=async()=>{
//   if(!url){
//     return setError("No url for the job provided")
//   }
  
//   const appPath = window.location.href

//   const fetchUrl = `${appPath}/api/getData?url=${url}`
//   setLoading(true)
//   try{
//     const response = await fetch(fetchUrl)
//     if(!response.ok){
//       throw new Error(`HTTP error! Status: ${response.status}`)
//     }
//     const description = await response.text()
//     setJobDescription(description)
//   }catch(err:any){
//     setError((err as Error).message)
//   }finally{
//     setLoading(false)
//   }
  

//   // setJobDescription(description)

// }
const extractDescriptions = async () => {
  if (!url) { // 'url' should be the state holding the target URL to scrape
    return setError("No URL for the job provided");
  }

  // The path here matches the `source` in vercel.json rewrites
  const fetchUrl = `/api/scrape?url=${encodeURIComponent(url)}`;
  setLoading(true);
  setError(null); // Clear previous errors

  try {
    const response = await fetch(fetchUrl);
    const data = await response.json(); // Vercel functions typically return JSON

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! Status: ${response.status}`);
    }

    setJobDescription(data.description); // Assuming the API returns { description: "..." }
  } catch (err: any) {
    setError(err.message);
    console.error("Failed to fetch job description:", err);
  } finally {
    setLoading(false);
  }
};
  return (
  <div  className="w-full p-2">
    {analysis && 
    <div>
      <p>Matching Percentage: {analysis.matchingPercentage}%</p>
    </div>
    }
    {error && <p className="text-red-900">{error}</p>}
    <div className="py-4 grid gap-2">
      {/* <h2>Extract the content from url</h2> */}
      <Input type={"text"} name={'url'} value={url?url:""} onChange={updateUrl} placeholder={"Enter the Url"} />
      <Button children={loading?"Extracting....":"Extract"} variant={"primary"} size={"small"} onClick={extractDescriptions} disabled={loading?true:false} />
    </div>
        <textarea onChange={updateJobDescription} value={jobDescription?jobDescription:''} aria-expanded='false' className="w-full h-fit border shadow-md rounded-md p-2 outline-green-300 active:border-green-300 "/>
        <Button children={"Analyse"} variant={"primary"} size={"small"} onClick={startAnalysis} />
  </div>
    
  );
};

export default JobDescription;
