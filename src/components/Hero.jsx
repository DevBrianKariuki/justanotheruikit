import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[70%] flex flex-col">
        <h2 className="text-white font-bold font-inter md:text-5xl text-4xl text-center mb-2">
          It doesn’t matter what{" "}
          <span className="text-yellow">JS Framework</span> you work with.
        </h2>
        <p className="text-white font-inter text-center my-4">
          Our boilerplates works with it{" "}
          <span className="text-lightblue">out-of-the-box.</span>
        </p>
        <div className="flex gap-5 my-2 items-center justify-center flex-col sm:flex-row w-[100%]">
          <button className="flex w-full sm:w-[20%] items-center  justify-center  gap-6 bg-yellow text-black font-inter py-3 font-bold rounded-md">
            Get Started
            <FaArrowRightLong />
          </button>
          <button className="flex sm:w-[20%] w-full items-center border-[2px] border-yellow  justify-center  gap-6 text-yellow font-inter py-3 font-bold rounded-md">
            See Repo
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
