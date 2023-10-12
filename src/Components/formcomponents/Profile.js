import React from 'react'
import { FaRegUser } from 'react-icons/fa'
const Profile = () => {
  return (
    <div className="grid gap-4 p-4">
    <div className="flex items-center gap-4 border-b py-2">
      <span className="text-xl font-[600]"> Profile</span>
      <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
        <FaRegUser />
      </div>
    </div>
    <label className="grid grid-cols-2 gap-4">
      <input
        type="text"
        name="firstname"
        placeholder="Firstname"
        className="border-b-2 outline-none focus:border-green-200"
      />
      <input
        type="text"
        name="lastname"
        placeholder="Lastname"
        className="border-b-2 outline-none focus:border-green-200"
      />
    </label>
    <label className="flex gap-2">
      <input
        type="number"
        name="phone"
        placeholder="Phone"
        className="w-full border-b-2 outline-none focus:border-green-200"
      />
    </label>
    <label className="flex gap-2">
      <input
        type="text"
        name="street"
        placeholder="Street"
        
        className="w-full border-b-2 outline-none focus:border-green-200"
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        className="w-full border-b-2 outline-none focus:border-green-200"
      />
      <input
        type="text"
        name="postcode"
        placeholder="Postcode"
        className="w-full border-b-2 outline-none focus:border-green-200"
      />
    </label>
  </div>
  )
}

export default Profile