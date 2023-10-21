import React from 'react'
import { FaPlus, FaStar, FaTimes } from 'react-icons/fa'

const Skills = () => {
  return (
    <div className=" p-4 grid gap-4">
    <div className="flex items-center gap-4  py-2">
      <span className="text-xl font-[600]">Skills</span>
      <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
        <FaStar />
      </div>
    </div>
    <input
      type="text"
      placeholder="Enter your skill"
      autoComplete='on'
      className="w-full border-b-2 outline-none focus:border-green-200"
    />
      <div className="flex gap-4">
        <span
          className="text-[14px] font-semibold px-4 py-1 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-green-200 leading-[120%]">
        
          Add more <FaPlus />
        </span>
      </div>

  </div>
  )
}

export default Skills