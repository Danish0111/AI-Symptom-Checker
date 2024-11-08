// AgeInput.jsx
import React, { useState } from 'react';

const AgeInput = ({ onSubmit }) => {
  const [age, setAge] = useState('');

  const handleNext = () => {
    onSubmit(age); // Call the onSubmit prop with entered age
  };

  return (
    <div className="w-full flex flex-col items-center my-16 p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Enter Your Age</h1>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
        className="w-64 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent mb-4"
      />
      <button
        onClick={handleNext}
        disabled={!age}
        className={`py-2 px-6 rounded-lg shadow-lg text-lg font-semibold transition duration-300 
          ${age ? 'bg-yellow-400 text-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
          hover:bg-yellow-500`}
      >
        Next
      </button>
    </div>
  );
};

export default AgeInput;
