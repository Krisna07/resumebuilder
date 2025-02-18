import React from 'react';

const CertificatesStep = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h3>Step 5: Certificates</h3>
      {formData.certificates.map((cert, index) => (
        <div key={index}>
          <input
            type="text"
            name="title"
            value={cert.title}
            onChange={e => handleInputChange(e, 'certificates', index, 'title')}
            placeholder="Certificate Title"
          />
          <input
            type="text"
            name="issued_by"
            value={cert.issued_by}
            onChange={e => handleInputChange(e, 'certificates', index, 'issued_by')}
            placeholder="Issued By"
          />
          <input
            type="text"
            name="year"
            value={cert.year}
            onChange={e => handleInputChange(e, 'certificates', index, 'year')}
            placeholder="Year"
          />
        </div>
      ))}
      <button onClick={() => handleInputChange({ target: { value: '' } }, 'certificates')}>
        Add Certificate
      </button>
    </div>
  );
};

export default CertificatesStep;
