import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

import { ResumePreviewStepProps } from "./ResumePreview";

const Creative: React.FC<ResumePreviewStepProps> = ({ formData }) => {
  return (
    <div className="w-full grid gap-4 text-[14px]">
      {/* Profile Section */}
      <div className="w-full grid gap-2">
        <h2 className="text-2xl font-bold">{formData.profile.fullname}</h2>
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-600 flex items-center gap-2">
            <FaPhone size={12} /> {formData.profile.phone}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <FaEnvelope size={12} /> {formData.profile.email}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <FaMapMarkerAlt size={12} />
            {formData.profile.location}
          </p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="text-justify">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-700">{formData.profile.summary}</p>
      </div>

      {/* Skills Section */}
      <div className="w-full">
        <h2 className="w-full text-xl font-semibold mb-2">Skills</h2>
        <div className="w-full grid gap-2">
          <ul className="w-full list-disc list-inside text-gray-600 grid grid-cols-3">
            {formData.skills.map((skill, index) => (
              <li className="w-full whitespace-nowrap" key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Experience Section */}
      <div className="">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        {formData.experience.map((experience, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-600">{experience.company}</p>
              <p className="text-gray-600">
                {experience.startDate} -{" "}
                {experience.endDate ? experience.endDate : "current"}
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              {experience.responsibilities?.map((item, idx) => (
                <li
                  key={idx}
                  className="leading-[130%] flex items-start mb-1 text-justify"
                >
                  <li></li> {item}
                </li>
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
            <div className="flex items-center justify-between">
              {" "}
              <p className="text-gray-600">
                {education.university}, {education.location}
              </p>
              <p className="text-gray-600">
                {education.startDate} -{" "}
                {education.endDate ? education.endDate : "current"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creative;
