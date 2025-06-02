import React, {  useState } from "react";
import Button from "../Button";
import { analyseResumeToJobDescription } from "../Aiactions/generate";
import { AnalysisResult, ResumeData } from "../../types";

interface JobDescriptionProps{
  handleJobDescription : (data:string)=> void,
  // handleResumeAnalysis : (data:AnalysisResult)=>void,
  formData:ResumeData
}

const JobDescription:React.FC<JobDescriptionProps>= ({handleJobDescription, formData}) => {
 const [jobDescription, setJobDescription] = useState<string | null>()
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
  return (
  <div  className="w-full p-2">
    {analysis && 
    <div>
      <p>Matching Percentage: {analysis.matchingPercentage}%</p>
    </div>
    }
    {error && <p className="text-red-900">{error}</p>}
        <textarea onChange={updateJobDescription} aria-expanded='false' className="w-full h-[250px] border shadow-md rounded-md p-2 outline-green-300 active:border-green-300 "/>
        <Button children={"Analyse"} variant={"primary"} size={"small"} onClick={startAnalysis} />
  </div>
    
  );
};

export default JobDescription;
