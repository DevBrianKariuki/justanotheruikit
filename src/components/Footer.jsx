import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full mt-6 flex items-center flex-col gap-6 justify-center font-inter">
      <div className="w-[90%] sm:w-[50%] grid gap-12 grid-cols-2 sm:grid-cols-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-white text-lg">Lorem</h1>
          <ul className="list-none flex flex-col gap-2">
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-white text-lg">Lorem</h1>
          <ul className="list-none flex flex-col gap-2">
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-white text-lg">Lorem</h1>
          <ul className="list-none flex flex-col gap-2">
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-white text-lg">Lorem</h1>
          <ul className="list-none flex flex-col gap-2">
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
            <li className="font-inter text-white">Ipsum</li>
          </ul>
        </div>
      </div>
      <p className="font-inter gap-2 font-bold flex items-center justify-center text-white">
        <FaRegCopyright /> 2024
      </p>
    </div>
  );
};

export default Footer;
