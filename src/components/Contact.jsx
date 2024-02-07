import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex mt-32 items-center justify-center font-inter">
      <div className="w-[90%] flex flex-col items-center">
        <h2 className="text-white font-bold text-3xl text-center">Contact</h2>
        <div className="flex items-center gap-4 justify-center sm:w-[60%] flex-col">
          <form className="my-6 " action="#">
            <div className="flex flex-col gap-4 w-full sm:flex-row">
              <input
                className=" w-full sm:w-[50%] px-3 py-3 rounded-md bg-neutral-300"
                placeholder="First Name"
              />
              <input
                className=" w-full sm:w-[50%] px-3 py-3 rounded-md bg-neutral-300"
                placeholder="Last Name"
              />
            </div>
            <input
              className=" w-full mt-4 px-3 py-3 rounded-md bg-neutral-300"
              placeholder="Phone(Optional)"
            />
            <input
              className=" w-full mt-4 px-3 py-3 rounded-md bg-neutral-300"
              placeholder="Email"
            />
            <textarea
              className=" w-full mt-4 px-3 py-3 rounded-md bg-neutral-300"
              placeholder="Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
