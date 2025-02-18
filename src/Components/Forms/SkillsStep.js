import React from 'react';

const SkillsStep = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h3>Step 2: Skills</h3>
      {formData.skills.map((skill, index) => (
        <div key={index}>
          <input
            type="text"
            value={skill}
            onChange={e => handleInputChange(e, 'skills', index)}
            placeholder="Skill"
          />
        </div>
      ))}
      <button onClick={() => handleInputChange({ target: { value: '' } }, 'skills')}>
        Add Skill
      </button>
    </div>
  );
};

export default SkillsStep;
