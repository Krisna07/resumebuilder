import React, { useState } from 'react';
import UserInfoStep from './UserInfoStep';
import SkillsStep from './SkillsStep';
import ExperienceStep from './ExperienceStep';
import EducationStep from './ EducationStep';
import CertificatesStep from './CertificatesStep';


const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    profile: {
      name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      portfolio: '',
      summary: ''
    },
    skills: [''],
    experience: [
      {
        title: '',
        company: '',
        location: '',
        duration: '',
        responsibilities: ['']
      }
    ],
    education: [
      {
        degree: '',
        university: '',
        year: '',
        location: ''
      }
    ],
    certificates: [
      {
        title: '',
        issued_by: '',
        year: ''
      }
    ]
  });
  
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e, section, index = null, field = null) => {
    const { name, value } = e.target;

    if (section === 'profile') {
      setFormData(prevState => ({
        ...prevState,
        profile: {
          ...prevState.profile,
          [name]: value
        }
      }));
    }

    if (section === 'education' && index !== null) {
      const updatedEducation = [...formData.education];
      updatedEducation[index][field] = value;
      setFormData(prevState => ({
        ...prevState,
        education: updatedEducation
      }));
    }

    if (section === 'experience' && index !== null) {
      const updatedExperience = [...formData.experience];
      updatedExperience[index][field] = value;
      setFormData(prevState => ({
        ...prevState,
        experience: updatedExperience
      }));
    }

    if (section === 'certificates' && index !== null) {
      const updatedCertificates = [...formData.certificates];
      updatedCertificates[index][field] = value;
      setFormData(prevState => ({
        ...prevState,
        certificates: updatedCertificates
      }));
    }

    if (section === 'skills') {
      const updatedSkills = [...formData.skills];
      updatedSkills[index] = value;
      setFormData(prevState => ({
        ...prevState,
        skills: updatedSkills
      }));
    }
  };

  // Handling moving to the next or previous step
  const nextStep = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, 5)); // max 5 steps
  };

  const prevStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 1)); // min 1 step
  };

  // Render different form steps
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <UserInfoStep formData={formData} handleInputChange={handleInputChange} />;
      case 2:
        return <SkillsStep formData={formData} handleInputChange={handleInputChange} />;
      case 3:
        return <ExperienceStep formData={formData} handleInputChange={handleInputChange} />;
      case 4:
        return <EducationStep formData={formData} handleInputChange={handleInputChange} />;
      case 5:
        return <CertificatesStep formData={formData} handleInputChange={handleInputChange} />;
      default:
        return <div>Invalid Step</div>;
    }
  };

  return (
    <div className='grid place-items-center w-screen h-screen bg-gray-300'>
      {renderStep()}
      <div>
        <button onClick={prevStep} disabled={currentStep === 1}>Previous</button>
        <button onClick={nextStep} disabled={currentStep === 5}>Next</button>
      </div>
    </div>
  );
};

export default MultiStepForm;
