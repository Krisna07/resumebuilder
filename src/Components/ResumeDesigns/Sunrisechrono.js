import React from "react";
import {
  FaBriefcase,
  FaBuilding,
  FaEnvelope,
  FaGraduationCap,
  FaLightbulb,
  FaLocationArrow,
  FaPhone,
  FaRegLightbulb,
  FaRegUser,
  FaTasks,
} from "react-icons/fa";

const SunriseChrono = ({ formData }) => {
  return (
    <div className="grid w-[1000px]   gap-4 p-4 shadow-[0_0_2px_0_gray] box-border rounded-md ">
      <div className="w-full grid grid-cols-2">
        <h2 className="grid">
          <span className="text-[60px] leading-[60px] ">
            {formData.profile.firstname} {formData.profile.lastname}
          </span>
          <span>Web developer</span>
        </h2>
      </div>
      <div className="flex gap-[100px]">
        <div className="w-[600px] grid gap-8">
          <div className="grid gap-2">
            <div className=" text-xl font-bold text-left flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <FaRegUser /> Profile
              </span>
            </div>
            <div className="grid place-items-center gap-4">
              {formData.summary}
            </div>
          </div>

          <div className="grid gap-2">
            <div className=" text-xl font-bold text-left flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <FaBriefcase /> History
              </span>
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
                      <span>{experience.from}</span> -{" "}
                      <span>{experience.to}</span>
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
            <div className=" text-xl font-bold text-left flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <FaGraduationCap /> Education
              </span>
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
        <div className="w-[200px] grid h-fit gap-8">
          <div className="w-full grid items-end gap-2 justify-between text-[12px]  py-2">
            <div className=" text-xl font-bold text-left flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <FaTasks /> Details
              </span>
            </div>
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
          <div className="grid gap-2">
            <div className=" text-xl font-bold text-left flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <FaRegLightbulb /> Skills
              </span>
            </div>
            <div className="w-full grid   gap-4">
              <div>
                <ul>
                  {formData.skills.softSkills.map((skill, index) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  {formData.skills.hardSkills.map((skill, index) => (
                    <div key={skill}>
                      <span>{skill}</span>
                      <div className="w-full h-1 bg-sky-600 rounded-full"></div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunriseChrono;
