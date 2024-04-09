import React from "react";
import lapImg from "./images/—Pngtree—web development illustration modern_4461019.png";

const IntroMessage = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#ED1BFF] to-[#141EFF] items-center flex flex-col text-white ">
      <div className="pt-10 w-[300px] h-[300px] ">
        <img src={lapImg} draggable="false"></img>
      </div>
      <div></div>
      <div className="font-semibold mt-10 md:text-7xl text-5xl w-[80vw] md:w-[50vw] text-center">
        Making video call amazing
      </div>
      <p className=" w-[80vw] md:w-[50vw] md:text-2xl text-1xl mt-10 my-20 text-center">
        tickle is a simple yet powerful video app but connects you to your
        co-workers through lightweight videoconfrencing it is perfect for design
        sessions , brainstorms sessions, code reviews,business meetings ,
        costumer support.products demos and much more ...
      </p>
    </div>
  );
};

export default IntroMessage;
