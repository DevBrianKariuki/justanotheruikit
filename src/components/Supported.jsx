import React from "react";
const supportedby = [
  "Lorem",
  "Morbi",
  "Donec",
  "Ipsum",
  "Lorem",
  "Morbi",
  "Donec",
  "Ipsum",
];

const Supported = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full sm:w-[80%] flex flex-col">
        <p className="text-white font-inter text-center">
          Supported and backed by:
        </p>
        <div className="grid my-5 gap-5 grid-cols-2 sm:grid-cols-4">
          {supportedby.map((supported, index) => (
            <SupportedCard text={supported} />
          ))}
        </div>
        <div className="flex items-center flex-col gap-3">
          <h2 className="text-white text-lg text-center font-inter font-bold">
            Less code. More product.
          </h2>
          <p className="text-white sm:w-[450px] font-inter text-center ">
            By using our UI Kit, we make sure you only get{" "}
            <span className="text-yellow">to focus more</span> on the other
            things that matter.
          </p>
        </div>
      </div>
    </div>
  );
};

const SupportedCard = ({ text }) => (
  <div className="bg-white h-[70px] flex items-center justify-center rounded-lg py-3">
    <p className="text-black font-inter font-bold">{text}</p>
  </div>
);

export default Supported;
