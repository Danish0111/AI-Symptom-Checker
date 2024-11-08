// SymptomCheck.jsx
import React, { useState } from 'react';
import GenderSelection from './GenderSelection';
import AgeInput from './AgeInput';
import SymptomSelection from './SymptomSelection';
import DiagnosisPage from './DiagnosisPage';

const SymptomCheck = () => {
  const [step, setStep] = useState(0); // Steps: 0 - Gender, 1 - Age, 2 - Symptoms, 3 - Diagnosis
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleGenderSubmit = (selectedGender) => {
    setGender(selectedGender);
    setStep(1); // Move to Age selection
  };

  const handleAgeSubmit = (inputAge) => {
    setAge(inputAge);
    setStep(2); // Move to Symptoms selection
  };

  const handleSymptomsSubmit = (symptoms) => {
    setSelectedSymptoms(symptoms);
    setStep(3); // Move to Diagnosis page
  };

  return (
    <div>
      {step === 0 && <GenderSelection onSubmit={handleGenderSubmit} />}
      {step === 1 && <AgeInput onSubmit={handleAgeSubmit} />}
      {step === 2 && <SymptomSelection age={age} onSubmit={handleSymptomsSubmit} />}
      {step === 3 && (
        <DiagnosisPage gender={gender} age={age} symptoms={selectedSymptoms} />
      )}
    </div>
  );
};

export default SymptomCheck;
