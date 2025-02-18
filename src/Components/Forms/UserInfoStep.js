import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import Input from "../Input";

const UserInfoStep = ({ formData, updateData }) => {
  const [profileData, setProfileData] = useState(formData.profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => {
      if (name.includes(".")) {
        const keys = name.split(".");
        return {
          ...prevState,
          [keys[0]]: {
            ...prevState[keys[0]],
            [keys[1]]: value,
          },
        };
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
    });
  };

  const handleLinkChange = (index, e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => {
      const updatedLinks = [...prevState.links];
      updatedLinks[index] = {
        ...updatedLinks[index],
        [name]: value,
      };
      return {
        ...prevState,
        links: updatedLinks,
      };
    });
  };

  const addLink = () => {
    setProfileData((prevState) => ({
      ...prevState,
      links: [...prevState.links, { type: "", url: "" }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(profileData);
    // Move to the next step
  };

  return (
    <div className="max-w-[600px] shadow-md grid gap-4 p-4 bg-gray-200 rounded-lg">
      <div className="flex items-center gap-4 border-b py-2">
        <span className="text-xl font-[600]">Profile</span>
        <div className="w-10 h-10 bg-green-200 rounded-full grid place-items-center">
          <FaRegUser />
        </div>
      </div>

      <form className="grid gap-2 px-4" onSubmit={handleSubmit}>
        <div className="flex gap-2 ">
          <Input
            type="text"
            name="name.firstname"
            required={true}
            value={profileData.name.firstname}
            onChange={handleChange}
            placeholder="Firstname"
          />
          <Input
            type="text"
            name="name.middlename"
            value={profileData.name.middlename || ""}
            onChange={handleChange}
            placeholder="Middlename"
          />
          <Input
            type="text"
            name="name.lastname"
            required={true}
            value={profileData.name.lastname}
            onChange={handleChange}
            placeholder="Lastname"
          />
        </div>
        <Input
          type="email"
          name="email"
          required={true}
          value={profileData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <Input
          type="text"
          name="phone"
          required={true}
          value={profileData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <Input
          type="text"
          name="location"
          required={true}
          value={profileData.location}
          onChange={handleChange}
          placeholder="Location"
        />
        {profileData.links.map((link, index) => (
          <div key={index} className="flex items-center justify-between gap-2">
            <div className="grid gap-1 transition-all ease-in-out">
              <label className="uppercase font-semibold transition-all ease-in-out">
                Type
              </label>
              <select
                name="type"
                value={link.type}
                onChange={(e) => handleLinkChange(index, e)}
                className="outline-none focus:ring-blue-500 bg-slate-300 px-4 p-1 rounded-md relative z-10 "
              >
                <option value="">Select</option>
                <option value="linkedin">LinkedIn</option>
                <option value="portfolio">Portfolio</option>
                <option value="github">GitHub</option>
                <option value="twitter">Twitter</option>
              </select>
            </div>
            <Input
              type="text"
              name="url"
              value={link.url}
              onChange={(e) => handleLinkChange(index, e)}
              placeholder="Enter Link"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addLink}
          className="w-fit px-2 p-[4px] bg-gray-300 text-sm"
        >
          Add Link
        </button>
        <button className="w-full px-2 p-[4px] bg-green-300" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInfoStep;
