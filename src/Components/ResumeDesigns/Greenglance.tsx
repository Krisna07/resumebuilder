import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

const Greenglance = ({ formData }) => {
  return (
    <>
      <div className="w-full grid gap-8 ">
        <div className="flex flex-col items-center ">
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full relative overflow-hidden ">
            <div className="w-full h-full absolute bg-gradient-to-r from-green-200 to-green-100 rounded-full z-10"></div>
          </div>
          <h1 className="text-2xl font-semibold">
            {formData.profile.firstname} {formData.profile.lastname}
          </h1>
        </div>

        <div className="border-b ">
          <div className="flex justify-between text-sm mb-2">
            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-600" />
              <span>{formData.profile.phone || "1234567890"}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-gray-600" />
              <span>{formData.profile.email || "example@example.com"}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationArrow className="text-gray-600" />
              <span>
                {formData.profile.street}, {formData.profile.state},{" "}
                {formData.profile.postcode}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Summary</h2>
          <p className="text-sm text-left text-wrap">{formData.summary}</p>
        </div>

        <div className="grid grid-cols-[2fr_5fr] h-fit gap-8 ">
          <div className="w-full ">
            <h2 className="text-lg font-semibold mb-2">Skills</h2>
            <div>
              <span className="font-semibold">Soft Skills</span>
              <ul className="list-disc pl-4">
                {formData.skills.softSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold">Hard Skills</span>
              <ul className="list-disc pl-4">
                {formData.skills.hardSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full  grid h-full">
            <h2 className="text-lg font-semibold mb-2">Work Experience</h2>
            {formData.experience.map((experience, index) => (
              <div
                key={index}
                className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="font-semibold">{experience.title}</h3>
                    <p className="text-sm">{experience.company}</p>
                  </div>
                  <p className="text-sm">
                    {experience.from} - {experience.to}
                  </p>
                </div>
                <ul className="list-disc pl-4">
                  {experience.summary.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Education</h2>
          {formData.education.map((education, index) => (
            <div
              key={index}
              className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-semibold">{education.degree}</h3>
                  <p className="text-sm">{education.institution}</p>
                </div>
                <p className="text-sm">
                  {education.from} - {education.to}
                </p>
              </div>
              <p className="text-sm">
                {education.state}, {education.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Greenglance;
