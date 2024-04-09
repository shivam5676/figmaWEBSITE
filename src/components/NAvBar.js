import React from "react";
import { FcCamera } from "react-icons/fc";

const NAvBar = () => {
  return (
    <div className="container mx-auto  flex justify-between ">
      <div className="flex my-3">
        <div className="mx-2"><FcCamera className="w-[40px] h-[40px]"></FcCamera></div>
        <div className="text-2xl font-bold text-[#141EFF] mt-1">tickle</div>
      </div>
      <div className="my-3 flex md:flex hidden">
        <div className="mx-3 md:text-2xl text-1xl py-1 px-2">About</div>
        <div className="mx-3 md:text-2xl text-1xl py-1 px-2">Plans</div>
        <div className="border-solid border-2 border-[#141EFF] px-4 font-bold text-2xl py-1 rounded-md px-2 text-[#141EFF]">
          signUp
        </div>
      </div>
    </div>
  );
};

export default NAvBar;
