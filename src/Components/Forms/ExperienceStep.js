import React from 'react';

const ExperienceStep = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h3>Step 3: Experience</h3>
      {formData.experience.map((exp, index) => (
        <div key={index}>
          <input
            type="text"
            name="title"
            value={exp.title}
            onChange={e => handleInputChange(e, 'experience', index, 'title')}
            placeholder="Job Title"
          />
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={e => handleInputChange(e, 'experience', index, 'company')}
            placeholder="Company"
          />
          <input
            type="text"
            name="location"
            value={exp.location}
            onChange={e => handleInputChange(e, 'experience', index, 'location')}
            placeholder="Location"
          />
          <input
            type="text"
            name="duration"
            value={exp.duration}
            onChange={e => handleInputChange(e, 'experience', index, 'duration')}
            placeholder="Duration"
          />
          <textarea
            name="responsibilities"
            value={exp.responsibilities[0]}
            onChange={e => handleInputChange(e, 'experience', index, 'responsibilities')}
            placeholder="Responsibilities"
          />
        </div>
      ))}
      <button onClick={() => handleInputChange({ target: { value: '' } }, 'experience')}>
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceStep;
