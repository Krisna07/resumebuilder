import React from "react";
import { ResumeData } from "../../../types";

interface ProfessionalProps {
  formData: ResumeData;
}

const Professional = ({ formData }: ProfessionalProps) => {
  const { profile, experience, education, skills } = formData;

  return (
    <div className="p-10 bg-gray-50 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 border-b border-gray-800 pb-4">
        <h1 className="text-2xl font-bold uppercase text-gray-800">
          {profile.fullname}
        </h1>
        <div className="flex justify-center text-xs text-gray-600 mt-2">
          <div>{profile.email}</div>
          <div className="mx-3">|</div>
          <div>{profile.phone}</div>
          <div className="mx-3">|</div>
          <div>{profile.location}</div>
        </div>
      </div>

      {/* Professional Summary */}
      {profile.summary && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 text-center uppercase border-b border-gray-600 pb-2 mb-4">
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 text-justify">
            {profile.summary}
          </p>
        </div>
      )}

      {/* Professional Experience */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 text-center uppercase border-b border-gray-600 pb-2 mb-4">
          Professional Experience
        </h2>
        {experience?.map((exp, i) => (
          <div key={i} className="mb-6">
            <div className="flex justify-between mb-3">
              <h3 className="text-md font-bold text-gray-800">{exp.title}</h3>
              <div className="text-xs text-gray-600">
                {exp.startDate} - {exp.current ? "Present" : exp.endDate}
              </div>
            </div>
            <div className="italic text-xs text-gray-600 mb-2">
              {exp.company}, {exp.location}
            </div>
            {exp.responsibilities?.map((resp, j) => (
              <div key={j} className="flex items-start mb-2">
                <div className="text-gray-600 mr-2">•</div>
                <p className="text-xs text-gray-700">{resp}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 text-center uppercase border-b border-gray-600 pb-2 mb-4">
          Education
        </h2>
        {education?.map((edu, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between mb-3">
              <h3 className="text-md font-bold text-gray-800">{edu.degree}</h3>
              <div className="text-xs text-gray-600">
                {edu.startDate} - {edu.current ? "Present" : edu.endDate}
              </div>
            </div>
            <div className="italic text-xs text-gray-600">
              {edu.university}, {edu.location}
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 text-center uppercase border-b border-gray-600 pb-2 mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="text-xs font-semibold text-gray-800 bg-gray-200 px-3 py-1 rounded-full"
            >
              {skill.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professional;
