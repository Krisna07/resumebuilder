import React from "react";
import { FaPaintBrush } from "react-icons/fa";

const Header = ({ selectResume, resume }) => {
  const resumeDesignNames = ["GreenGlance", "Creative", "SunriseChrono"];

  return (
    <div className="w-full grid gap-4 bg-white">
      <div className="w-full flex items-center justify-between bg-white shadow p-4">
        <div className="flex items-center font-[600] gap-4">
          Resume Builder <FaPaintBrush />
        </div>
        <div className="w-fit px-4 py-1 text-[16px] bg-green-200 rounded-full">
          Sign up
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-4 py-4">
        {resumeDesignNames.map((items) => (
          <span
            key={items}
            onClick={() => selectResume(items.toLocaleLowerCase())}
            className={`px-2 py-1 rounded hover:shadow ${
              resume == items.toLocaleLowerCase()
                ? "bg-green-200"
                : "bg-gray-200 "
            }`}>
            {items}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
