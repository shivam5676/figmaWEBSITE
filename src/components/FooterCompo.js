import React from "react";

const FooterCompo = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#ED1BFF] to-[#141EFF] items-center flex flex-col text-white justify-center ">
      <p className="md:text-7xl text-5xl mt-24 md:mt-36 font-semibold md:w-[35vw] w-[70vw] text-center">
        Design & Code reviews on the go
      </p>
      <p className="mt-16 md:text-3xl text-2xl md:w-[38vw] w-[74vw] text-center">
        The video calling experience thats helps you ship products faster
      </p>
      <div className="w-full flex justify-center mt-12 md:mb-36 mb-24">
        <div className="font-bold text-[#141EFF] border-2 border-[#141EFF] w-fit text-center bg-white rounded-lg p-2 md:text-2xl text-1xl">
          Get Tickle
        </div>
      </div>
    </div>
  );
};

export default FooterCompo;
