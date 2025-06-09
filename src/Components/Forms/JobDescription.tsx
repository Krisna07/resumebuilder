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

const extractDescriptions=async()=>{
  if(!url){
    return setError("No url for the job provided")
  }
  
  const appPath = window.location.href

  const fetchUrl = `${appPath}/api/getData?url=${url}`
  setLoading(true)
  try{
    const response = await fetch(fetchUrl)
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const description = await response.text()
    setJobDescription(description)
  }catch(e:any){
    setError(e.message)
  }finally{
    setLoading(false)
  }
  

  // setJobDescription(description)

}

  return (
  <div  className="w-full p-2">
    {analysis && 
    <div>
      <p>Matching Percentage: {analysis.matchingPercentage}%</p>
    </div>
    }
    {error && <p className="text-red-900">{error}</p>}
    <div className="py-4 grid gap-2">
      <h2>Extract the content from url</h2>
      <Input type={"text"} name={'url'} value={url?url:""} onChange={updateUrl} placeholder={"Enter the Url"} />
      <Button children={loading?"Extracting....":"Extract"} variant={"primary"} size={"small"} onClick={extractDescriptions} disabled={loading?true:false} />
    </div>
        <textarea onChange={updateJobDescription} value={jobDescription?jobDescription:''} aria-expanded='false' className="w-full h-fit border shadow-md rounded-md p-2 outline-green-300 active:border-green-300 "/>
        <Button children={"Analyse"} variant={"primary"} size={"small"} onClick={startAnalysis} />
  </div>
    
  );
};

export default JobDescription;
