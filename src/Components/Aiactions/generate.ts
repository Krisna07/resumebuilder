// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const api = process.env.REACT_APP_GEMINI_API;
// const genAI = new GoogleGenerativeAI(api);

// interface UserDetails {
//   userData: {
//     name: string;
//     email: string;
//     phone: string;
//     job: string;
//   };
//   prompt: string;
//   outputFormat: string;
// }

// export default async function GenerateContext(details: UserDetails) {
//   const generatePrompt = `Based on ${JSON.stringify(details.userData)} and ${
//     details.prompt
//   }. Please output the file in JSON to match ${details.outputFormat}`;
//   const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
//   const result = await model.generateContent({ prompt: generatePrompt });
//   console.log(result.response.text());
// }

import { GoogleGenerativeAI } from "@google/generative-ai";
import { ResumeData } from "../../types";
// import type { ResumeData } from '../types';

// const genAI = new GoogleGenerativeAI('AIzaSyC1Nz0Ta1Q8ihC8e3fSxIQ4qvcpCnSv1q8');

export async function GenerateResume(userdata: ResumeData) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
Create a professional resume using the following information:

Name: ${userdata.personalInfo.name}
Email: ${userdata.personalInfo.email}
Phone: ${userdata.personalInfo.phone}

Work Experience:
${userdata.workExperience
  .map(
    (exp) => `
- Position: ${exp.position}
  Company: ${exp.company}
  Duration: ${exp.startDate} to ${exp.endDate}
  Description: 
    ${exp.description}
`
  )
  .join("\n")}

Education:
${userdata.education
  .map(
    (edu) => `
- Degree: ${edu.degree}
  Field: ${edu.field}
  School: ${edu.school}
  Graduation: ${edu.graduationDate}
`
  )
  .join("\n")}

Skills:
${userdata.skills.join(", ")}

Please create a professional resume using the details and provide the output in JSON format that will match the following structure:

{
  "personalInfo": {
    "name": string;
    "email": string;
    "phone": string;
    "summary": string;
  },
  "workExperience": [
    {
      "company": string;
      "position": string;
      "startDate": string;
      "endDate": string;
      "description": string[];
    }
  ],
  "education": [
    {
      "school": string;
      "degree": string;
      "field": string;
      "graduationDate": string;
    }
  ],
  "skills": string[]
}

Make sure to add a summary that aligns with the user's profile (at least 50 words) and ensure that each work experience has a description with at least 5 points. Also, generate at least 10 relevant skills.
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Extract JSON data from the generated text
    const jsonResponse = text.split("`json")[1]?.split("`")[0];

    if (jsonResponse) {
      return JSON.parse(jsonResponse);
    } else {
      throw new Error("Response text does not contain valid JSON format");
    }
  } catch (error) {
    console.error("Error generating resume:", error);
    throw new Error("Failed to generate resume");
  }
}
