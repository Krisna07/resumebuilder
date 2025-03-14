import { GoogleGenerativeAI } from "@google/generative-ai";
import { ResumeData } from "../../types";

const api = import.meta.env.VITE_GEMINI_API;

const genAI = new GoogleGenerativeAI(api);

export async function GenerateResume(userdata?: ResumeData, data?: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `
Create a professional resume using the following information:

${
  userdata
    ? `Name: ${userdata.profile.fullname}
Email: ${userdata.profile.email}
Phone: ${userdata.profile.phone}
links:${userdata.profile.links}

Work Experience:
${userdata.experience
  .map(
    (exp) => `
- Position: ${exp.title}
  Company: ${exp.company}
  Duration: ${exp.startDate} to ${exp.endDate ? exp.endDate : "current"}
  Current: ${exp.current}
  Description: 
    ${exp.responsibilities?.join("\n")}
`
  )
  .join("\n")}

Education:
${userdata.education
  .map(
    (edu) => `
- Degree: ${edu.degree}
    location:${edu.location}
  School: ${edu.university}
  startDate:${edu.startDate}
  endDate: ${edu.endDate}
  current?: ${edu.current};
`
  )
  .join("\n")}

  Certification:
  ${userdata.certificates.map(
    (cert) => `
      title: ${cert.title},

  issued_by:${cert.issued_by} ,
  year: ${cert.year},
    
    
    `
  )}

Skills:
${userdata.skills.join(", ")}`
    : `${data}`
}

Please create a professional resume using the details and provide the output in JSON format that will match the following structure:

{
  "profile": {
    fullname: string;
  email: string;
  phone: string;
  location: string;
  links: { type: string; url: string }[]; make sure to keep link and give the type of  link the link can be any social try to use the ${
    userdata?.profile.links
  }
  summary: string;
}
  },
  "experience": [
    {
      title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  responsibilities?: string[];
}
    }
  ],
  "education": [
    {
  degree: string;
  university: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  location: string;
    }
  ],
"skills": //make sure to use mmultiple type of skills accoring to the user make sure to breakit down properly according to the ${
    userdata?.profile.summary
  }, ${userdata?.experience} and ${userdata?.skills}
[{
type:string, //This can be the type of skill for the user, the user can have skills based on the role like Fontend skills, backend skills, tools, etc 
skills:string[], // arrange the skills that user have provided and add accordingly if needed
}]
,"certificates": [{
  title: string;
  issued_by: string;
  year: string;
}]
}

Make sure to add a summary that aligns with the user's profile (not more than 50 words) and ensure that each work experience has a description with at least 5 points.Make sure the date format for the resume it Month-year like Jan 2024(full year). Also, generate at least 10 relevant skills.
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;

    const text = await response.text();

    if (text) {
      const jsonResponse = text.split("`json")[1]?.split("`")[0];
      // console.log(jsonResponse);
      return JSON.parse(jsonResponse);
    } else {
      throw new Error("Response text does not contain valid JSON format");
    }
  } catch (error) {
    console.error("Error generating resume:", error);
    throw new Error("Failed to generate resume");
  }
}
