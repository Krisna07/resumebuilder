import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

const Greenglance = ({ formData }) => {
  return (
    <div className="grid place-items-center   gap-4 p-4 shadow-[0_0_2px_0_gray] box-border rounded-md ">
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
      <div className="text-[14px] w-full">
        Highly motivated and accomplished [Your Industry/Field] professional
        with [X years] of experience in [Key Skill/Experience Area]. Strong
        analytical and problem-solving abilities, with a commitment to
        delivering exceptional results. Proven leadership and team collaboration
        skills. Adept at [Specific Skill/Competency], [Another
        Skill/Competency], and [Additional Skill/Competency].
      </div>
      <div className="grid grid-cols-[1fr_3fr] gap-4 text-[14px] ">
        <div className=" grid gap-2">
          <div className="grid gap-2">
            <h2 className="font-bold w-full border-b">Skill</h2>
            <div>
              <span className="font-semibold">Soft Skills</span>
              <ul className="list-disc px-4">
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Problem-Solving</li>
                <li>Time Management</li>
                <li>Emotional Intelligence</li>
                <li>Adaptability</li>
                <li>Leadership</li>
                <li>Customer Service</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold">Hard skills</span>
              <ul className="list-disc px-4">
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Problem-Solving</li>
                <li>Time Management</li>
                <li>Emotional Intelligence</li>
                <li>Adaptability</li>
                <li>Leadership</li>
                <li>Customer Service</li>
              </ul>
            </div>
          </div>
          <div className="">
            <h2 className="font-bold w-full border-b py-2">Langauges</h2>
            <ul className="list-disc px-4">
              <li>Langauge-1</li>
              <li>Langauge-2</li>
            </ul>
          </div>
        </div>
        <div className="px-4 ">
          <h2 className="font-bold border-b py-2">History</h2>
          <div>
            <div className="w-full grid gap-2 border-b py-2">
              <div className="w-full flex items-center justify-between ">
                <div className="grid leading-[120%]">
                  <span className="font-semibold">Job title</span>
                  <span className="text-[12px]">Company name</span>
                </div>
                <div className="text-[12px]">
                  <span>start date</span> - <span>end date</span>
                </div>
              </div>
              <ul className="list-disc px-4">
                <li>something</li>
                <li>Teamwork</li>
                <li>Problem-Solving</li>
                <li>Time Management</li>
              </ul>
            </div>
            <div className="w-full grid gap-2 border-b py-2">
              <div className="w-full flex items-center justify-between">
                <div className="grid leading-[120%]">
                  <span className="font-semibold">Job title</span>
                  <span className="text-[12px]">Company name</span>
                </div>
                <div className="text-[12px]">
                  <span>start date</span> - <span>end date</span>
                </div>
              </div>
              <ul className="list-disc px-4">
                <li>something</li>
                <li>Teamwork</li>
                <li>Problem-Solving</li>
                <li>Time Management</li>
              </ul>
            </div>
            <div className="w-full grid gap-2 border-b py-2">
              <div className="w-full flex items-center justify-between">
                <div className="grid leading-[120%]">
                  <span className="font-semibold">Job title</span>
                  <span className="text-[12px]">Company name</span>
                </div>
                <div className="text-[12px]">
                  <span>start date</span> - <span>end date</span>
                </div>
              </div>
              <ul className="list-disc px-4">
                <li>something</li>
                <li>Teamwork</li>
                <li>Problem-Solving</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>
          <h2 className="font-bold py-2 border-b">Education</h2>
          <div className="w-full flex items-center justify-between py-2">
            <div className="grid leading-[120%]">
              <span className="font-semibold">Degree</span>
              <span className="text-[12px]">Institution name</span>
              <span className="text-[12px]">Institution Address</span>
            </div>
            <div className="text-[12px]">
              <span>start date</span> - <span>end date</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-between py-2">
            <div className="grid leading-[120%]">
              <span className="font-semibold">Degree</span>
              <span className="text-[12px]">Institution name</span>
              <span className="text-[12px]">Institution Address</span>
            </div>
            <div className="text-[12px]">
              <span>start date</span> - <span>end date</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greenglance;
