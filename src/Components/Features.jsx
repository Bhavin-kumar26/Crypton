import React from "react";
import { TiTick } from "react-icons/ti";
import img1 from "../assets/david-new.png";
import img5 from "../assets/img5.png";
import img3 from "../assets/img3.png";
import img2 from "../assets/img.png";

const Features = () => {
  return (
    <div className="mt-24 text-white">
    <h1 className="text-center text-4xl font-bold pb-2">Features</h1>
  
    <div className="w-full h-auto  flex flex-col items-center justify-center px-4 md:px-32 md:flex-row-reverse" id="1">
      <img className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mb-8 md:mb-0 md:ml-10" src={img5} alt="" />
      <div className="text-center md:text-left">
        <h1 className="text-[30px] md:text-[36px] lg:text-[46px] font-extrabold tracking-wider">
          Get In-Depth Profit & Loss <br className="hidden md:block" /> Analysis
        </h1>
        <h2 className="font-light my-2 text-sm md:text-base lg:text-lg">
          Connect your wallet to get 24h, daily, weekly and cumulative Profit <br className="hidden md:block" /> & Loss analysis. Level up your crypto investing strategy.
        </h2>
        <button className="px-4 py-2 bg-[#7927ff] mt-5 font-semibold rounded-md">
          Connect Portfolio
        </button>
      </div>
    </div>
  
    <div className="w-full h-auto flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-10 md:gap-32 mb-32 px-4 md:px-0" id="2">
     
      <div className="text-center md:text-left">
        <h1 className="text-[30px] md:text-[36px] lg:text-[46px] font-extrabold tracking-wider">
          Buy & Swap Crypto Where <br className="hidden md:block" /> You Track It
        </h1>
        <h2 className="font-light mt-2 text-sm md:text-base lg:text-lg">
          Purchase crypto with card in just a few steps. Then swap on best <br className="hidden md:block" /> terms to keep up with trends
        </h2>
        <button className="px-4 py-2 bg-[#7927ff] mt-5 font-semibold rounded-md">
          Buy Crypto
        </button>
      </div>
      <img className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] mt-8 md:mt-0 md:mr-10" src={img2} alt="" />
    </div>
  
    <div className="w-full h-auto flex flex-col md:flex-row-reverse items-center gap-10 justify-center my-10 px-4 md:px-10" id="3">
      <img className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mb-8 md:mb-0 md:ml-10" src={img1} alt="" />
      <div className="text-center md:text-left">
        <h1 className="text-[30px] md:text-[36px] lg:text-[46px] font-extrabold tracking-wider">
          Go Premium for Free
        </h1>
        <ul>
          <div className="flex justify-start items-center mt-3">
            <TiTick className="text-[20px] md:text-[25px] lg:text-[30px] text-[#f0fa5b]" />
            <li className="font-light tracking-wider ml-2 md:ml-3 lg:ml-4 text-sm md:text-base lg:text-lg">
              Connect up to 50 portfolios
            </li>
          </div>
          <div className="flex justify-start items-center my-2">
            <TiTick className="text-[20px] md:text-[25px] lg:text-[30px] text-[#f0fa5b]" />
            <li className="font-light tracking-wider ml-2 md:ml-3 lg:ml-4 text-sm md:text-base lg:text-lg">
              Track up to 100,000 transactions
            </li>
          </div>
          <div className="flex justify-start items-center">
            <TiTick className="text-[20px] md:text-[25px] lg:text-[30px] text-[#f0fa5b]" />
            <li className="font-light tracking-wider ml-2 md:ml-3 lg:ml-4 text-sm md:text-base lg:text-lg">
              View in-depth Profit & Loss analysis
            </li>
          </div>
          <div className="flex justify-start items-center mt-2">
            <TiTick className="text-[20px] md:text-[25px] lg:text-[30px] text-[#f0fa5b]" />
            <li className="font-light tracking-wider ml-2 md:ml-3 lg:ml-4 text-sm md:text-base lg:text-lg">
              Get AI-powered crypto price predictions
            </li>
          </div>
        </ul>
        <button className="px-4 py-2 bg-[#7927ff] my-5 font-semibold rounded-md">
          Start My Free Trial
        </button>
        <p className="text-sm md:text-base lg:text-lg">
          After your 7-day free trial, the Premium plan will be as little as <br className="hidden md:block" /> $13.99 per month 🍔
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default Features;
