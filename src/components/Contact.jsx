import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-full flex mt-32 items-center justify-center font-inter">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-white font-bold text-3xl text-center">Contact</h2>
        <div className="flex w-full items-center gap-4 justify-center sm:w-[60%] flex-col">
          <form
            className="my-6 items-center justify-center flex flex-col"
            action="#"
          >
            <div className="flex flex-col gap-4 w-full sm:flex-row">
              <input
                data-aos="fade-right"
                className="outline-none focus:ring-[2px] focus:ring-yellow w-full sm:w-[50%] px-3 py-3 rounded-md bg-neutral-300"
                placeholder="First Name"
              />
              <input
                data-aos="fade-left"
                className="outline-none focus:ring-[2px] focus:ring-yellow w-full sm:w-[50%] px-3 py-3 rounded-md bg-neutral-300"
                placeholder="Last Name"
              />
            </div>
            <input
              data-aos="fade-right"
              className="outline-none focus:ring-[2px] focus:ring-yellow w-full mt-4 px-3 py-3 rounded-md bg-neutral-300"
              placeholder="Phone(Optional)"
            />
            <input
              data-aos="fade-left"
              className="outline-none focus:ring-[2px] focus:ring-yellow w-full mt-4 px-3 py-3 rounded-md bg-neutral-300"
              placeholder="Email"
            />
            <textarea
              data-aos="fade-right"
              className="outline-none focus:ring-[2px] focus:ring-yellow w-full mt-4 px-3 py-3 rounded-md bg-neutral-300"
              placeholder="Message"
            />
            <button
              data-aos="zoom-in"
              className="bg-lightblue justify-center sm:w-[40%] my-3 py-3 rounded-lg text-lg font-bold w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
