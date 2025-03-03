import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ResumeData } from "../../../types";

export interface ResumePreviewStepProps {
  formData: ResumeData;
}

export const Modern = ({ formData }: ResumePreviewStepProps) => {
  return (
    <div className="w-full grid gap-6 text-gray-800 font-sans">
      {/* Header with accent color */}
      <div className="bg-indigo-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">{formData.profile.fullname}</h1>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-1">
            <FaPhone size={12} /> {formData.profile.phone}
          </span>
          <span className="flex items-center gap-1">
            <FaEnvelope size={12} /> {formData.profile.email}
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt size={12} /> {formData.profile.location}
          </span>
          {formData.profile.links && (
            <span className="flex items-center gap-1"></span>
          )}
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-xl font-bold border-b-2 border-indigo-600 pb-1 mb-2">
          Professional Summary
        </h2>
        <p className="text-gray-700">{formData.profile.summary}</p>
      </div>

      {/* Two column layout for skills and experience */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          {/* Skills */}
          <h2 className="text-xl font-bold border-b-2 border-indigo-600 pb-1 mb-2">
            Skills
          </h2>
          <ul className="space-y-1">
            {formData.skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                {skill}
              </li>
            ))}
          </ul>

          {/* Education */}
          <h2 className="text-xl font-bold border-b-2 border-indigo-600 pb-1 mb-2 mt-4">
            Education
          </h2>
          {formData.education.map((education, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-semibold">{education.degree}</h3>
              <p className="text-sm text-gray-600">
                {education.university}, {education.location}
              </p>
              <p className="text-sm text-gray-600">
                {education.startDate} - {education.endDate || "Present"}
              </p>
            </div>
          ))}
        </div>

        <div className="col-span-2">
          {/* Experience */}
          <h2 className="text-xl font-bold border-b-2 border-indigo-600 pb-1 mb-2">
            Professional Experience
          </h2>
          {formData.experience.map((experience, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{experience.title}</h3>
                <span className="text-sm text-gray-600">
                  {experience.startDate} - {experience.endDate || "Present"}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-1">{experience.company}</p>
              <ul className="text-gray-700 space-y-1 mt-2">
                {experience.responsibilities?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Professional Template Example
export const Professional = ({ formData }: ResumePreviewStepProps) => {
  return (
    <div className="w-full grid gap-5 text-gray-800 font-serif">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-300 pb-4">
        <h1 className="text-3xl font-bold tracking-wider mb-2">
          {formData.profile.fullname}
        </h1>
        <div className="flex justify-center flex-wrap gap-4 text-sm">
          <span>{formData.profile.phone}</span>
          <span>|</span>
          <span>{formData.profile.email}</span>
          <span>|</span>
          <span>{formData.profile.location}</span>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wide mb-2">
          Professional Summary
        </h2>
        <p className="text-gray-700">{formData.profile.summary}</p>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wide mb-2">
          Professional Experience
        </h2>
        {formData.experience.map((experience, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">{experience.title}</h3>
              <span className="text-sm italic">
                {experience.startDate} - {experience.endDate || "Present"}
              </span>
            </div>
            <p className="font-semibold mb-1">{experience.company}</p>
            <ul className="list-disc pl-5 space-y-1">
              {experience.responsibilities?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wide mb-2">
          Education
        </h2>
        {formData.education.map((education, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between">
              <h3 className="font-bold">{education.degree}</h3>
              <span className="text-sm italic">
                {education.startDate} - {education.endDate || "Present"}
              </span>
            </div>
            <p>
              {education.university}, {education.location}
            </p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wide mb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {formData.skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Minimal Template Example
export const Minimal = ({ formData }: ResumePreviewStepProps) => {
  return (
    <div className="w-full grid gap-6 text-gray-800 font-sans max-w-3xl mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-normal mb-1">
          {formData.profile.fullname}
        </h1>
        <div className="text-sm text-gray-500 flex flex-wrap gap-3">
          <span>{formData.profile.phone}</span>
          <span>{formData.profile.email}</span>
          <span>{formData.profile.location}</span>
        </div>
      </div>

      {/* Summary */}
      <p className="text-gray-700 text-sm">{formData.profile.summary}</p>

      {/* Experience */}
      <div>
        <h2 className="text-lg font-normal mb-3">Experience</h2>
        {formData.experience.map((experience, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-medium">
                {experience.title} • {experience.company}
              </h3>
              <span className="text-xs text-gray-500">
                {experience.startDate} - {experience.endDate || "Present"}
              </span>
            </div>
            <ul className="text-sm space-y-1">
              {experience.responsibilities?.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span>-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Two column layout for skills and education */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-normal mb-2">Education</h2>
          {formData.education.map((education, index) => (
            <div key={index} className="mb-2 text-sm">
              <p className="font-medium">{education.degree}</p>
              <p className="text-gray-600">{education.university}</p>
              <p className="text-gray-500">
                {education.startDate} - {education.endDate || "Present"}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-normal mb-2">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {formData.skills.map((skill, index) => (
              <span key={index} className="text-sm">
                {skill}
                {index < formData.skills.length - 1 ? " • " : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
