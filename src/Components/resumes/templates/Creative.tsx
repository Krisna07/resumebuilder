// import React from 'react'

import { ResumeData } from "../../../types";
import { BsDot, BsGlobe, BsPhone, BsPinMap } from "react-icons/bs";

import { CiMail } from "react-icons/ci";

interface CreativeProps {
  formData: ResumeData;
}

const Creative = ({ formData }: CreativeProps) => {
  const styles = {
    heading:
      "text-[16px] font-bold text-black whitespace-nowrap w-full bg-gray-200 mb-2",
    subHeading: " text-[14px] font-semibold text-black whitespace-nowrap",
    normaltext: "text-[12px] flex items-center gap-1 ",
    lists: "",
  };
  const { profile, skills, experience, education } = formData;
  return (
    <div className="w-full min-h-full grid gap-4 p-6 py-8">
      {/* user details section */}
      <div className="w-full grid  ">
        <h3 className={`text-3xl font-bold mb-2`}>{profile.fullname}</h3>
        <div className="w-full flex items-center justify-between ">
          <span className={styles.normaltext}>
            <BsPinMap color="red" /> {profile.location}
          </span>
          <span className={styles.normaltext}>
            <CiMail /> {profile.email}
          </span>
          <span className={styles.normaltext}>
            <BsPhone /> {profile.phone}
          </span>
          {profile.links[0]?.url &&
            profile.links.map((link, idx) => (
              <span className={styles.normaltext} key={idx}>
                <BsGlobe /> {link.url}
              </span>
            ))}
        </div>
      </div>
      {/* summary section */}
      <div>
        <h3 className={styles.heading}>Summary</h3>
        <p className={styles.normaltext}>{profile.summary}</p>
      </div>
      {/* skill section */}
      <div>
        <h3 className={styles.heading}>Skills</h3>
        <div className="grid gap-1">
          {skills.map((skill, idx) => (
            <div key={idx} className="grid grid-cols-[2fr_6fr] gap-2">
              <h4 className={styles.subHeading}>{skill.type}</h4>
              <div className="flex items-center gap-2 flex-wrap">
                {skill.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`text-[12px] whitespace-nowrap p-[2px_4px] border-[1px] border-solid border-gray-800 rounded-md`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {experinece section} */}
      <div className="grid">
        <h3 className={styles.heading}>Work Experience</h3>

        <div className="grid gap-4">
          {experience.map((experience, idx) => (
            <div key={idx} className="w-full grid  gap-1">
              <h4 className={styles.subHeading}>{experience.title}</h4>
              <div className="w-full flex  justify-between ">
                <div className={styles.subHeading}>{experience.company}</div>
                <div className={styles.subHeading}>
                  {experience.startDate}-
                  {experience.endDate ? experience.endDate : "Present"}
                </div>
              </div>
              <div className="grid items-center gap-1">
                {experience.responsibilities?.map((tasks, idx) => (
                  <div key={idx} className={`flex items-start `}>
                    <BsDot />
                    <span className="text-[12px] flex items-start ">
                      {" "}
                      {tasks}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*Education section */}
      <div className="grid">
        <h3 className={styles.heading}>Education</h3>

        <div className="grid gap-4">
          {education.map((education, idx) => (
            <div key={idx} className="w-full grid  gap-1">
              <h4 className={styles.subHeading}>{education.degree}</h4>
              <div className="w-full flex  justify-between ">
                <div className={styles.subHeading}>{education.university}</div>
                <div className={styles.subHeading}>
                  {education.startDate}-
                  {education.endDate ? education.endDate : "Present"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creative;
