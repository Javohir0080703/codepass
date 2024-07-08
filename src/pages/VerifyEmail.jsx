import React, { useState } from "react";
import emailImg from "../assets/svg/email.svg";
const VerifyEmail = () => {
  const [email, setEmail] = useState();
  return (
    <section className="flex items-center justify-center h-[83vh]">
      <div className="w-full sm:max-w-[388px] max-w-[300px] px-5 mx-auto ">
        <h1 className="text-center font-semibold sm:text-4xl text-3xl leading-11 tracking-[-4%] text-#323142 sm:mb-6 mb-4">
          Forget Password
        </h1>
        <h2 className="font-medium sm:text-2xl text-lg text-center  text-#CFCFD3 sm:mb-90px mb-16">
          Enter Your Mail To Reset
        </h2>
        <form action="">
          <div className="flex items-center justify-center sm:space-x-8 space-x-5 sm:py-7 py-5 sm:px-6 px-4 border-#141416 border-[2.26px] rounded-14px bg-#F5F5F5 mb-8">
            <img src={emailImg} alt="email" />
            <input
              value={email}
              className="font-medium sm:text-lg text-sm placeholder:text-#CFCFD3 text-black bg-transparent focus:outline-none "
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex justify-center">
            <button className="block sm:py-6 py-4 sm:px-[150px] px-[105px] text-#F3F5F6 font-semibold leading-7 text-lg bg-#141416 text-center rounded-2xl">
              Verify
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VerifyEmail;
