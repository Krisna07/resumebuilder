import { ResumeData } from "../../../types";

interface ProfessionalProps {
  formData: ResumeData;
}

const Professional = ({ formData }: ProfessionalProps) => {
  const { profile, experience, education, skills } = formData;

  return (
    <div className="p-8 md:p-12 bg-white max-w-4xl mx-auto shadow-lg print:shadow-none">
      {/* Header */}
      <div className="text-center mb-4 border-b-2 border-gray-300 pb-4">
        <h1 className="text-3xl font-bold text-gray-800">
          {profile.fullname}
        </h1>
        <div className="flex flex-wrap justify-center text-sm text-gray-600 mt-3 gap-2 md:gap-4">
          {profile.email && <div>{profile.email}</div>}
          {profile.email && profile.phone && <div className="hidden md:block">•</div>}
          {profile.phone && <div>{profile.phone}</div>}
          {profile.phone && profile.location && <div className="hidden md:block">•</div>}
          {profile.location && <div>{profile.location}</div>}
        </div>
      </div>

      {/* Professional Summary */}
      {profile.summary && (
        <div className="mb-4">
          <h2 className="text-[16px] text-center font-semibold text-gray-800 border-b border-gray-300 ">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            {profile.summary}
          </p>
        </div>
      )}

      {/* Professional Experience */}
      {experience && experience.length > 0 && (
        <div className="mb-4">
          <h2 className="text-[16px] text-center font-semibold text-gray-800 border-b border-gray-300 ">
            PROFESSIONAL EXPERIENCE
          </h2>
          {experience.map((exp, i) => (
            <div key={i} className="mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-800">{exp.title}</h3>
                <div className="text-sm text-gray-600">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </div>
              </div>
              <div className="italic text-sm text-gray-600 mb-2">
                {exp.company}{exp.location ? `, ${exp.location}` : ""}
              </div>
              {exp.responsibilities && exp.responsibilities?.length > 0 && (
                <ul className="list-disc pl-5 mt-2">
                  {exp.responsibilities?.map((resp, j) => (
                    <li key={j} className="text-sm text-gray-700 mb-1">{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-[16px] text-center font-semibold text-gray-800 border-b border-gray-300 ">
            EDUCATION
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-800">{edu.degree}</h3>
                <div className="text-sm text-gray-600">
                  {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                </div>
              </div>
              <div className="italic text-sm text-gray-600">
                {edu.university}{edu.location ? `, ${edu.location}` : ""}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div>
          <h2 className="text-[16px] text-center font-semibold text-gray-800 border-b border-gray-300 ">
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="text-sm  rounded"
              >
                <span className="font-semibold">{skill.type}:</span>{" "}
                {skill.skills?.map((s, index) => (
                  <span key={index} className="text-gray-700">
                    {s}
                    {skill.skills && index !== skill.skills.length - 1 && ",  "}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Professional;