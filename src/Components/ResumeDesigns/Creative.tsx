import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

import { ResumePreviewStepProps } from "./ResumePreview";

const Creative: React.FC<ResumePreviewStepProps> = ({ formData }) => {
  return (
    <div className="w-[1000px] mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Profile Section */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          {/* You might replace this placeholder image with actual profile picture */}
          <span className="text-4xl text-gray-500"></span>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{formData.profile.fullname}</h1>
          <p className="text-gray-600">
            <FaPhone className="inline" /> {formData.profile.phone}
          </p>
          <p className="text-gray-600">
            <FaEnvelope className="inline" /> {formData.profile.email}
          </p>
          <p className="text-gray-600">
            <FaMapMarkerAlt className="inline" />
            {formData.profile.location}
          </p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-700">{formData.profile.summary}</p>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <ul className="list-disc list-inside text-gray-600 grid grid-cols-2">
              {formData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          {/* <div>
            <span className="text-gray-700 font-semibold">Hard Skills</span>
            <ul className="list-disc list-inside text-gray-600">
              {formData.skills.hardSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        {formData.experience.map((experience, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <p className="text-gray-600">{experience.company}</p>
            <p className="text-gray-600">
              {experience.startDate} -{" "}
              {experience.endDate ? experience.endDate : "current"}
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {experience.responsibilities?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {formData.education.map((education, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-gray-600">{education.university}</p>
            <p className="text-gray-600">{education.location}</p>
            <p className="text-gray-600">
              {education.startDate} -{" "}
              {education.endDate ? education.endDate : "current"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creative;
