import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { FaPlus } from "react-icons/fa";
import FormNavigator from "./FormNavigator";
import { Profile, ResumeData } from "../../types";

interface UserInfoStepProps {
  formData: ResumeData;
  handleSubmit: (name: string, data: ResumeData) => void;
}
const UserInfoStep: React.FC<UserInfoStepProps> = ({
  formData,
  handleSubmit,
}) => {
  const [profileData, setProfileData] = useState<Profile>(formData.profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prevState: Profile) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLinkChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prevState: Profile) => {
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
    setProfileData((prevState: Profile) => ({
      ...prevState,
      links: [...prevState.links, { type: "", url: "" }],
    }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(profileData);
    handleSubmit("profile", { ...formData, profile: profileData });
  };

  return (
    <>
      <form className="w-full grid gap-1" onSubmit={submitForm}>
        <Input
          type="text"
          name="fullname"
          required={true}
          value={profileData.fullname}
          onChange={handleChange}
          placeholder="Fullname"
        />
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
        <div className="w-full grid gap-1 transition-all ease-in-out text-[16px] font-sans">
          <label className="w-full font-semibold transition-all ease-in-out">
            Connects
          </label>
          {profileData.links?.map(
            (link: { type: string; url: string }, index: number) => (
              <div
                key={index}
                className="w-full flex items-center justify-between gap-2"
              >
                <div className="grid gap-1 transition-all ease-in-out text-[14px]">
                  <select
                    name="type"
                    value={link.type}
                    onChange={(e) => handleLinkChange(index, e)}
                    className="outline-none focus:ring-1 focus:ring-blue-500 bg-slate-300 px-2 p-1 pr-1 rounded-md relative z-10 text-[12px] font-semibold text-left"
                  >
                    <option value="linkedin">LinkedIn</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="github">GitHub</option>
                    <option value="twitter">Twitter</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="url"
                  value={link.url}
                  onChange={(e) => handleLinkChange(index, e)}
                  placeholder="Enter Link"
                  className="w-full outline-none focus:ring-1 focus:ring-green-600 transition-all ease-in-out duration-300 px-[8px] py-[4px] text-[14px] rounded-md relative z-10"
                />
              </div>
            )
          )}
          <Button
            type="button"
            onClick={addLink}
            variant="secondary"
            size="small"
            fullWidth={false}
          >
            <FaPlus size={10} /> Add Link
          </Button>
        </div>
      </form>
      <FormNavigator handleSubmit={submitForm} />
    </>
  );
};

export default UserInfoStep;
