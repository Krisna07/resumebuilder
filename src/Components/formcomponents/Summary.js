import React from "react";
import { FaList } from "react-icons/fa";

const Summary = ({ setSummary }) => {
  return (
    <div className=" p-4">
      <div className="flex items-center gap-4 py-2">
        <span className="text-xl font-[600]"> Summary</span>
        <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
          <FaList />
        </div>
      </div>
      <textarea
        name="summary"
        onChange={(e) => setSummary(e.target.value)}
        className="border w-full max-h-[20ch] p-2 outline-none border-2 focus:border-green-200"
        minLength={200}
        maxLength={800}
      />
    </div>
  );
};

export default Summary;
