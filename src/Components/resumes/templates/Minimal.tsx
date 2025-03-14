import { ResumeData } from "../../../types";

interface MinimalProps {
  formData: ResumeData;
}

const MinimalResume = ({ formData }: MinimalProps) => {
  const { profile, experience, education, skills } = formData;

  return (
    <div className="w-full min-h-full grid gap-4 p-6 py-8">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-2xl font-bold">{profile.fullname}</h1>
        <div className="flex justify-between text-[12px] text-gray-600 mt-2">
          <span>{profile.email}</span>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
          {profile.links && profile.links.length > 0 && (
            <span>{profile.links[0].url}</span>
          )}
        </div>
      </div>

      {/* Summary */}
      {profile.summary && (
        <div className="mb-2">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Summary</h2>
          <p className="text-[12px] text-gray-700">{profile.summary}</p>
        </div>
      )}

      {/* Experience */}
      <div className="mb-2">
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">Experience</h2>
        {experience.map((exp, i) => (
          <div key={i} className="mb-2">
            <div className="flex justify-between ">
              <span className="font-semibold text-sm">{exp.title}</span>
              <span className="text-[12px] text-gray-600">{exp.company}</span>
            </div>
            <span className="text-xs text-gray-500">
              {exp.startDate} - {exp.current ? "Present" : exp.endDate} |{" "}
              {exp.location}
            </span>
            {exp.responsibilities?.map((resp, j) => (
              <div key={j} className="flex items-start mt-2">
                <span className="mr-2 text-xs text-gray-500">-</span>
                <p className="text-[12px] text-gray-700">{resp}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-2">
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">Education</h2>
        {education.map((edu, i) => (
          <div key={i} className="mb-2">
            <div className="flex justify-between ">
              <span className="font-semibold text-sm">{edu.degree}</span>
              <span className="text-[12px] text-gray-600">
                {edu.university}
              </span>
            </div>
            <span className="text-[12px] text-gray-500">
              {edu.startDate} - {edu.current ? "Present" : edu.endDate} |{" "}
              {edu.location}
            </span>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg font-semibold border-b mb-1">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) =>
            skill.skills.map((item, j) => (
              <div key={j} className="text-[12px] text-gray-700">
                {item}
                {","}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MinimalResume;
