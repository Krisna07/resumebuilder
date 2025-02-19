const { GoogleGenerativeAI } = require("@google/generative-ai");

const api = process.env.REACT_APP_GEMINI_API;
const genAI = new GoogleGenerativeAI(api);

export default async function GenerateContext() {
  const details = {
    userData: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      job: "Web developer",
    },
    prompt:
      "based on user details provide the skills that user can add in resume ",
    outputFormat: "Array of skills",
  };

  const generatePrompt = `Based on ${details.userData} and ${details.prompt}. Please output the file in JSON to match ${details.output}`;
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const result = await model.generateContent({ generatePrompt });
  console.log(result.response.text());
}
