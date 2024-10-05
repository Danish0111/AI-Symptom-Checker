import React from 'react'
import doc from '../assets/main5.png'
const Hero = () => {
  return (
    <>
      <div className="main w-[100%] flex flex-col  justify-center items-center relative bottom-5">
        <h1 className='w-[40%] text-center pt-20 text-3xl font-semibold'>Check Your Symptoms & Get AI-Powered Health Answers</h1>
        <div className="flex justify-center items-center">
          <div className="image ">
            <img className='w-80' src={doc} alt="" />
          </div>
          <div className="text text-lg w-[60%] font-semibold text-blue-600 flex flex-col text-left">
            <span>Quick</span>
            <span>Reliable</span>
            <span>AI-Powered Health Insights.</span>
          </div>
        </div>
        <button type="button" className="w-[40%] my-6 text-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Start a symptom check</button>
      </div>
    </>
  )
}

export default Hero
