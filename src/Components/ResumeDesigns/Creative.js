import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhone, FaStar } from "react-icons/fa";

const Creative = ({ formData }) => {
  return (
    <div className="grid w-[800px]   gap-4 p-4 shadow-[0_0_2px_0_gray] box-border rounded-md ">
      <div className="flex gap-4">
        <div className="w-[200px] h-[200px] rounded  bg-gray-200"></div>
        <div className="grid place-items-center gap-4">
          <h2 className="text-[80px] leading-[80px] ">
            {formData.profile.firstname} {formData.profile.lastname}
          </h2>
          <div className="w-full grid items-center gap-2 justify-between text-[12px]  py-2">
            <div className="flex items-center gap-2 ">
              <FaPhone />{" "}
              {formData.profile.phone ? formData.profile.phone : "1234567890"}
            </div>
            <div className="flex items-center gap-2 ">
              <FaEnvelope />{" "}
              {formData.profile.email ? formData.profile.email : "1234567890"}
            </div>
            <div className="flex items-center gap-2 ">
              <FaLocationArrow />{" "}
              {formData.profile.street
                ? formData.profile.street +
                  ", " +
                  formData.profile.state +
                  ", " +
                  formData.profile.postcode
                : "1234567890"}
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className=" text-2xl font-bold text-left flex flex-col gap-2">
          Summary
          <div className="w-full h-[2px] bg-gray-600 relative "></div>
        </div>
        <div className="grid place-items-center gap-4">{formData.summary}</div>
      </div>
      <div className="grid gap-4">
        <div className=" text-2xl font-bold text-left flex flex-col gap-2">
          Skills
          <div className="w-full h-[2px] bg-gray-600 relative "></div>
        </div>
        <div className="w-full grid grid-cols-2  gap-4">
          <div>
            <span className="font-semibold">Soft Skills</span>
            <ul className="list-disc px-4">
              {formData.skills.softSkills.map((skill, index) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold">Hard skills</span>
            <ul className="list-disc px-4">
              {formData.skills.hardSkills.map((skill, index) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className=" text-2xl font-bold text-left flex flex-col gap-2">
          History
          <div className="w-full h-[2px] bg-gray-600 relative "></div>
        </div>
        <div className="grid place-items-center gap-4">
          {" "}
          {formData.experience.map((experience, index) => (
            <div
              key={index}
              className="w-full grid gap-2 border-b py-2">
              <div className="w-full flex items-center justify-between ">
                <div className="grid leading-[120%]">
                  <span className="font-semibold">{experience.title}</span>
                  <span className="text-[12px]">{experience.company}</span>
                </div>
                <div className="text-[12px]">
                  <span>{experience.from}</span> - <span>{experience.to}</span>
                </div>
              </div>
              <ul className="list-disc w-full px-4">
                {experience.summary.map((items, index) => (
                  <li key={index}>{items}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <div className=" text-2xl font-bold text-left flex flex-col gap-2">
          Education
          <div className="w-full h-[2px] bg-gray-600 relative "></div>
        </div>
        <div className="grid place-items-center gap-4">
          {formData.education.map((education, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between py-2">
              <div className="grid leading-[120%]">
                <span className="font-semibold">{education.degree}</span>
                <span className="text-[12px]">{education.institution}</span>
                <span className="text-[12px]">
                  {education.state},{education.country}
                </span>
              </div>
              <div className="text-[12px]">
                <span>{education.from}</span> - <span>{education.to}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creative;
