import { GoogleGenerativeAI } from "@google/generative-ai";
import { ResumeData } from "../../types";

const api = import.meta.env.VITE_GEMINI_API;

const genAI = new GoogleGenerativeAI(api);

export async function GenerateResume(userdata?: ResumeData, data?: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `Create a professional resume using the following information:

  ${userdata ? `
  Name: ${userdata.profile.fullname}
  Email: ${userdata.profile.email}
  Phone: ${userdata.profile.phone}
  Links: ${userdata.profile.links}
  
  Work Experience:
  ${userdata.experience
    .map((exp) => `
    - Position: ${exp.title}
      Company: ${exp.company}
      Duration: ${exp.startDate} to ${exp.endDate ? exp.endDate : "current"}
      Current: ${exp.current}
      Description: 
        ${exp.responsibilities?.join("\n")}
    `)
    .join("\n")}
  
  Education:
  ${userdata.education
    .map((edu) => `
    - Degree: ${edu.degree}
      Location: ${edu.location}
      University: ${edu.university}
      Start Date: ${edu.startDate}
      End Date: ${edu.endDate}
      Current: ${edu.current ? "Yes" : "No"}
    `)
    .join("\n")}
  
  Certifications:
  ${userdata.certificates.map((cert) => `
    - Title: ${cert.title}
      Issued By: ${cert.issued_by}
      Year: ${cert.year}
  `).join("\n")}
  
  Skills:
  ${userdata.skills.join(", ")}
  ` : `${data}`}
  
  Please create a professional resume using the details above and output it in JSON format. The JSON structure should match the following format:
  
  {
    "profile": {
      "fullname": string,
      "email": string,
      "phone": string,
      "location": string,
      "links": [{ 
        "type": string,  // e.g., 'LinkedIn', 'GitHub', etc.
        "url": string
      }],
      "summary": string  // Provide a brief summary (max 50 words) aligning with the user's profile
    },
    "experience": [
      {
        "title": string,
        "company": string,
        "location": string,
        "startDate": string,  // Use 'Month-Year' format (e.g., Jan 2024)
        "endDate": string,  // Use 'Month-Year' format (e.g., Dec 2024) or "current"
        "current": boolean,  // true/false based on whether it's the current job
        "responsibilities": [string]  // List at least 5 key points of responsibilities
      }
    ],
    "education": [
      {
        "degree": string,
        "university": string,
        "location": string,
        "startDate": string,  // Use 'Month-Year' format
        "endDate": string,  // Use 'Month-Year' format or "current"
        "current": boolean  // true/false based on whether it's the current education
      }
    ],
    "skills": [
      {
        "type": string,  // e.g., 'Frontend', 'Backend', 'Tools', etc.
        "skills": string[]  // List of skills relevant to the user, based on the profile, experience, and provided skills
      }
    ],
    "certificates": [
      {
        "title": string,
        "issued_by": string,
        "year": string  // Year the certificate was issued
      }
    ]
  }
  
  Key Instructions:
  - Ensure that each work experience entry includes a description with at least 5 bullet points.
  - The resume's date format should be 'Month-Year' (e.g., Jan 2024).
  - Generate at least 10 relevant skills based on the user's profile, work experience, and education -> make sure to breakdown the types of skills, focus more on user input 
  - Align the summary with the user's overall profile, summarizing their expertise and career focus in 80 words or less.
  - For links, identify the type (e.g., 'LinkedIn', 'GitHub', etc.) and provide the respective URLs.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;

    const text = await response.text();

    if (text) {
      const jsonResponse = text.split("`json")[1]?.split("`")[0];
      return JSON.parse(jsonResponse);
    } else {
      throw new Error("Response text does not contain valid JSON format");
    }
  } catch (error) {
    console.error("Error generating resume:", error);
    throw new Error("Failed to generate resume");
  }
}
