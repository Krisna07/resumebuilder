import React from "react";
import { ResumeData } from "../../../types";
import { BsEnvelope, BsPhone } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { GiGlobe } from "react-icons/gi";

// Create Props interface
interface ModernProps {
  formData: ResumeData;
}

const Modern = ({ formData }: ModernProps) => {
  const { profile, experience, education, skills } = formData;

  return (
    <div className="w-full min-h-full grid gap-4 p-6 py-8">
      {/* Header */}
      <div className="border-b-2 border-blue-500 pb-1">
        <h1 className="text-4xl font-bold text-blue-700 ">{profile.fullname}</h1>
        <div className="flex justify-between text-sm text-gray-700 mt-2 leading-4">
          <div className="flex items-center gap-1 "><BsEnvelope/> {profile.email}</div>
          <div className="flex items-center gap-1 "><BsPhone/>{profile.phone}</div>
          <div className="flex items-center gap-1 "><GrLocationPin/>{profile.location}</div>
          {profile.links.length > 0 &&
            profile.links.map((link, i) => <div className="flex items-center gap-1 " key={i}><GiGlobe/> {link.url}</div>)}
        </div>
      </div>

      {/* Summary */}
      <div className="">
        <h2 className="text-lg font-semibold text-gray-800 ">Summary</h2>
        <p className="text-sm text-gray-600">{profile.summary}</p>
      </div>

      {/* Skills */}
      <div className="">
        <h2 className="text-lg font-semibold text-gray-800 ">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((item) =>
            item.skills?.map((skill, i) => (
              <span
                key={i}
                className="text-xs p-[2px_8px] border border-gray-400 rounded-full text-gray-700"
              >
                {skill}
              </span>
            ))
          )}
        </div>
      </div>

      {/* Experience */}
      <div className="">
        <h2 className="text-lg font-semibold text-gray-800 ">Experience</h2>
        {experience?.map((exp, i) => (
          <div key={i} className="">
            <div className="mb-1">
              <h3 className="text-md font-semibold text-gray-800">
                {exp.title}
              </h3>
              <div className="flex justify-between text-sm text-gray-600">
                <div>
                  {exp.company} | {exp.location}
                </div>
                <div>
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </div>
              </div>
            </div>
            <div className="ml-4">
              {exp.responsibilities?.map((resp, j) => (
                <div key={j} className="flex items-start ">
                  <div className="text-gray-800 mr-2">•</div>
                  <p className="text-sm text-gray-600">{resp}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="">
        <h2 className="text-lg font-semibold text-gray-800 ">Education</h2>
        {education?.map((edu, i) => (
          <div key={i} className="mb-3">
            <h3 className="text-md font-semibold text-gray-800">
              {edu.degree}
            </h3>
            <div className="flex justify-between text-sm text-gray-600">
              <div>
                {edu.university} | {edu.location}
              </div>
              <div>
                {edu.startDate} - {edu.current ? "Present" : edu.endDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modern;
