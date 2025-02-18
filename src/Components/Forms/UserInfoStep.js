import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import Input from '../Input';
 

const UserInfoStep = ({ formData, handleInputChange }) => {
  return (
    <div className="w-[600px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg">
      <div className="flex items-center gap-4 border-b py-2">
        <span className="text-xl font-[600]">Profile</span>
        <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
          <FaRegUser />
        </div>
      </div>

      <Input
        type="text"
        name="name"
        value={formData.profile.name}
        onChange={e => handleInputChange(e, 'profile')}
        placeholder="Name"
      />
      <Input
        type="email"
        name="email"
        value={formData.profile.email}
        onChange={e => handleInputChange(e, 'profile')}
        placeholder="Email"
      />
      <Input
        type="text"
        name="phone"
        value={formData.profile.phone}
        onChange={e => handleInputChange(e, 'profile')}
        placeholder="Phone"
      />
      <Input
        type="text"
        name="location"
        value={formData.profile.location}
        onChange={e => handleInputChange(e, 'profile')}
        placeholder="Location"
      />
      <Input
        type="text"
        name="linkedin"
        value={formData.profile.linkedin}
        onChange={e => handleInputChange(e, 'profile')}
        placeholder="LinkedIn"
      />
      <Input
        type="text"
        name="portfolio"
        value={formData.profile.portfolio}
        onChange={e => handleInputChange(e, 'profile')}
        placeholder="Portfolio URL"
      />

      <textarea
        name="summary"
        value={formData.profile.summary}
        onChange={e => handleInputChange(e, 'profile')}
        placeholder="Summary"
        className="border-b-2 outline-none focus:border-green-200 px-4 p-1 rounded-md"
      />
    </div>
  );
};

export default UserInfoStep;
