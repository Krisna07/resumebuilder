import React from "react";
import { FaPaintBrush } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white shadow p-4">
      <div className="flex items-center font-[600] gap-4">
        Resume Builder <FaPaintBrush />
      </div>
      <div className="w-fit px-4 py-1 text-[16px] bg-green-200 rounded-full">
        Sign up
      </div>
    </div>
  );
};

export default Header;
