import React from "react";
import heroImg from "./images/womanHero.png";

const Hero = () => {
  return (
    <div className="container mx-auto md:my-20 my-10 flex justify-between flex-col-reverse md:flex-row ">
      <div className="lg:mx-20 w-[100%] md:w-[70%] justify-center items-center px-5">
        <p className="font-semibold md:text-7xl text-5xl my-5">
          Bring People together to make tickles happen
        </p>
        <p className="my-5 md:text-2xl text-1xl">
          Revolutionary video calling app for design and code reviews. With
          Tickle, you ‘ll never to leave your house again.
        </p>
        <div className="bg-[#141EFF]  text-center text-white rounded-md px-4 md:text-2xl text-1xl w-fit p-2 font-semibold">
          Get tickle
        </div>
      </div>
      <div className="md:mx-5 w-[100%] md:w-[30%] ">
        <img src={heroImg} alt="heroImg" className="h-[300px] w-[100%]" draggable="false"></img>
      </div>
    </div>
  );
};

export default Hero;
