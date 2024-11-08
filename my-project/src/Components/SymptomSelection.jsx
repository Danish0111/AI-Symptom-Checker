// SymptomSelection.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SymptomSelection = ({ age }) => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/symptoms?age=${age}`);
        setSymptoms(response.data);
      } catch (err) {
        console.error('Error fetching symptoms:', err);
      }
    };
    fetchSymptoms();
  }, []);

  const handleSymptomChange = (symptomId) => {
    setSelectedSymptoms((prevSelected) =>
      prevSelected.includes(symptomId)
        ? prevSelected.filter((id) => id !== symptomId)
        : [...prevSelected, symptomId]
    );
  };

  const handleNext = () => {
    onSubmit(selectedSymptoms); // Submit selected symptoms
  };

  // Filter symptoms based on the search term
  const filteredSymptoms = symptoms.filter(symptom =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col items-center justify-center p-6 min-h-screen ">
      <h2 className="text-2xl font-bold mb-4">Select Your Symptoms</h2>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search symptoms..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md p-2 rounded-lg border border-gray-300 mb-4"
      />

      <ul className="w-full h-[400px] max-w-md overflow-y-scroll bg-white rounded-lg shadow-lg p-4 space-y-2">
        {filteredSymptoms.map((symptom) => (
          <li key={symptom.id} className="flex items-center p-2 border-b border-gray-300">
            <label className="flex items-center">
              <input
                type="checkbox"
                value={symptom.id}
                onChange={() => handleSymptomChange(symptom.id)}
                className="mr-2 h-5 w-5 accent-green-500"
              />
              <span className="text-gray-800">{symptom.name}</span>
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleNext}
        className="mt-4 py-2 px-6 rounded-lg shadow-lg text-lg font-semibold bg-yellow-400 text-gray-800 transition duration-300 hover:bg-yellow-500"
      >
        Start Diagnosis
      </button>
    </div>
  );
};

export default SymptomSelection;
