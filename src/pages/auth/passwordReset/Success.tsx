import React from "react";
import bg from "../../../assets/images/grad2.svg";
import Footer from "../../../components/Footer";

function ResetSuccess() {
  return (
    <div className="">
      <div className="h-screen w-full bg-black relative">
        <img src={bg} alt="" className="w-full md:mt-[-80px]" />

        <div className="absolute top-[30%] md:top-[45%] w-full flex flex-col items-center justify-center">
          <div className="text-[70px] text-white font-sf-bold">Password Updated</div>
          <div className="text-2xl text-white font-sf-reg">
            Your new password has been set, click "proceed" to log in
          </div>
          <div className="bg-white px-24 py-2 rounded text-black font-sf-bold text-base mt-5">
            Proceed
          </div>
        </div>
        <div className="w-full absolute bottom-[-10%]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ResetSuccess;
