import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

const Greenglance = ({ formData }) => {
  return (
    <div className="grid place-items-center w-[800px]   gap-4 p-4 shadow-[0_0_2px_0_gray] box-border rounded-md ">
      <div className="box-border grid place-items-center">
        <div className="w-20 h-20  shadow-[0_0_2px_0_gray] rounded-full grid place-items-center relative">
          <div className=" w-full h-full absolute bg-gradient-to-r from-green-400 to-green-600  rounded-full z-0 animate-pulse"></div>
          <div className="w-[76px] h-[76px] bg-gradient-to-r from-green-200 to-green-100  rounded-full z-10"></div>
        </div>
        <div>
          {formData.profile.firstname} {formData.profile.lastname}{" "}
        </div>
      </div>
      <div className="w-full flex items-center justify-between text-[12px] border-b py-2">
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
      <div className="text-[14px] w-full">{formData.summary}</div>
      <div className="grid grid-cols-[1fr_3fr] gap-4 text-[14px] ">
        <div className="h-fit grid gap-2">
          <div className="grid gap-2">
            <h2 className="font-bold w-full border-b">Skill</h2>
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
        <div className="px-4 ">
          <h2 className="font-bold border-b py-2">History</h2>

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

          <h2 className="font-bold py-2 border-b">Education</h2>
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

export default Greenglance;
