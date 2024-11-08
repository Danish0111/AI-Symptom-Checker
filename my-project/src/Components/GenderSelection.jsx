// GenderSelection.jsx
import React, { useState } from 'react';

const GenderSelection = ({ onSubmit }) => {
  const [gender, setGender] = useState('');

  const handleNext = () => {
    onSubmit(gender); // Call the onSubmit prop with selected gender
  };

  return (
    <div className="w-full flex flex-col items-center my-16 p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Select Your Gender</h1>
      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-4 rounded-lg shadow-md transition duration-300 
            ${gender === 'male' ? 'bg-white text-blue-500' : 'bg-gray-200 text-gray-800'}
            hover:bg-white hover:text-blue-500`}
          onClick={() => setGender('male')}
        >
          Male
        </button>
        <button
          className={`py-2 px-4 rounded-lg shadow-md transition duration-300 
            ${gender === 'female' ? 'bg-white text-pink-500' : 'bg-gray-200 text-gray-800'}
            hover:bg-white hover:text-pink-500`}
          onClick={() => setGender('female')}
        >
          Female
        </button>
        <button
          className={`py-2 px-4 rounded-lg shadow-md transition duration-300 
            ${gender === 'other' ? 'bg-white text-green-500' : 'bg-gray-200 text-gray-800'}
            hover:bg-white hover:text-green-500`}
          onClick={() => setGender('other')}
        >
          Other
        </button>
      </div>
      <button
        onClick={handleNext}
        disabled={!gender}
        className={`py-2 px-6 rounded-lg shadow-lg text-lg font-semibold transition duration-300 
          ${gender ? 'bg-yellow-400 text-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
          hover:bg-yellow-500`}
      >
        Next
      </button>
    </div>
  );
};

export default GenderSelection;
