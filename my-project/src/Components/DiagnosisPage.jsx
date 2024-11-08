import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SymptomCheck = ({ gender = "male", age = 25, symptoms = [] }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState(symptoms);
  const [possibleConditions, setPossibleConditions] = useState([]);
  const [followUpQuestion, setFollowUpQuestion] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSelectedSymptoms(symptoms);
  }, [symptoms]);

  const initiateDiagnosis = async () => {
    setError(null); 
    try {
      console.log(selectedSymptoms);
      const response = await axios.post("http://localhost:5000/api/diagnosis", {
        sex: gender,
        age: { value: age },
        evidence: selectedSymptoms.map(symptomId => ({
          id: symptomId,
          choice_id: symptomId === "absent" ? "absent" : "present"
        }))
      });

      const { conditions, question, has_emergency_evidence } = response.data;

      if (has_emergency_evidence) {
        alert("Warning: Some symptoms indicate a potential emergency. Please seek medical attention immediately.");
      }

      if (conditions) setPossibleConditions(conditions);
      setFollowUpQuestion(question || null);
    } catch (error) {
      console.error("Error initiating diagnosis:", error.response ? error.response.data : error.message);
      setError("There was an error processing the diagnosis. Please try again.");
    }
  };

  const handleFollowUpAnswer = (itemId, choiceId) => {
    const updatedSymptoms = [...selectedSymptoms, { id: itemId, choice_id: choiceId }];
    setSelectedSymptoms(updatedSymptoms);
    initiateDiagnosis();
  };

  useEffect(() => {
    if (selectedSymptoms.length > 0) initiateDiagnosis();
  }, [selectedSymptoms]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Symptom Checker</h2>
      {error && <p className="text-red-600">{error}</p>}

      <div className="mt-4">
        {possibleConditions.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Possible Conditions:</h3>
            <ul className="list-disc pl-5 mt-2">
              {possibleConditions.map(condition => (
                <li key={condition.id} className="mb-1">
                  {condition.common_name} - 
                  <span className="font-medium"> Probability: {(condition.probability * 100).toFixed(2)}%</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {followUpQuestion && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold">{followUpQuestion.text}</h3>
            <div className="mt-2">
              {followUpQuestion.type === 'single' && (
                followUpQuestion.items.map(item => (
                  <div key={item.id} className="mb-2">
                    {item.choices.map(choice => (
                      <button 
                        key={choice.id} 
                        onClick={() => handleFollowUpAnswer(item.id, choice.id)}
                        className="mr-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
                      >
                        {choice.label}
                      </button>
                    ))}
                  </div>
                ))
              )}

              {followUpQuestion.type === 'group_single' && (
                followUpQuestion.items.map(item => (
                  <div key={item.id} className="mb-2">
                    <h4 className="font-semibold">{item.name}</h4>
                    {item.choices.map(choice => (
                      <button 
                        key={choice.id} 
                        onClick={() => handleFollowUpAnswer(item.id, choice.id)}
                        className="mr-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
                      >
                        {choice.label}
                      </button>
                    ))}
                  </div>
                ))
              )}

              {followUpQuestion.type === 'group_multiple' && (
                followUpQuestion.items.map(item => (
                  <div key={item.id} className="mb-2">
                    <h4 className="font-semibold">{item.name}</h4>
                    {item.choices.map(choice => (
                      <button 
                        key={choice.id} 
                        onClick={() => handleFollowUpAnswer(item.id, choice.id)}
                        className="mr-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
                      >
                        {choice.label}
                      </button>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomCheck;