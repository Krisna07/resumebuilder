import React from 'react';

const EducationStep = ({ formData, handleInputChange }) => {
  return (
    <div className='grid gap-2'>
      <h3>Step 4: Education</h3>
      {formData.education.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={e => handleInputChange(e, 'education', index, 'degree')}
            placeholder="Degree"
          />
          <input
            type="text"
            name="university"
            value={edu.university}
            onChange={e => handleInputChange(e, 'education', index, 'university')}
            placeholder="University"
          />
          <input
            type="text"
            name="year"
            value={edu.year}
            onChange={e => handleInputChange(e, 'education', index, 'year')}
            placeholder="Year"
          />
          <input
            type="text"
            name="location"
            value={edu.location}
            onChange={e => handleInputChange(e, 'education', index, 'location')}
            placeholder="Location"
          />
        </div>
      ))}
      <button onClick={() => handleInputChange({ target: { value: '' } }, 'education')}>
        Add Education
      </button>
    </div>
  );
};

export default EducationStep;
