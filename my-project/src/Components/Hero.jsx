import React from 'react';
import doc from '../assets/main5.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const goToSymptomcheck = () => {
    navigate('/symptom-check');
  };

  return (
    <div className="main w-full flex flex-col justify-center items-center p-4">
      <h1 className="text-center pt-10 text-2xl md:text-3xl font-semibold w-full md:w-1/2">
        Check Your Symptoms & Get AI-Powered Health Answers
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className="image flex justify-center">
          <img className="w-40 md:w-80" src={doc} alt="Doctor" />
        </div>
        <div className="text text-center md:text-left text-lg mt-4 md:mt-0 md:w-1/2 font-semibold text-blue-600 flex flex-col">
          <span>Quick</span>
          <span>Reliable</span>
          <span>AI-Powered Health Insights.</span>
        </div>
      </div>
      <button
        onClick={goToSymptomcheck}
        type="button"
        className="w-full md:w-1/3 my-6 text-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg px-5 py-2.5"
      >
        Start a symptom check
      </button>
    </div>
  );
};

export default Hero;
