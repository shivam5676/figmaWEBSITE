import React from "react";
import { RiSpeaker2Fill } from "react-icons/ri";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaCameraRetro } from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";

const Features = () => {
  return (
    <div className="my-24 md:mx-48 mx-5">
      <p className="font-bold md:text-4xl text-3xl text-center md:text-left">Features</p>
      <div className="flex flex-col sm:flex-row  justify-center items-center">
        <div className="sm:w-[50%]  sm-[100%] ps-5">
          <div className="flex mt-20 ">
            <RiSpeaker2Fill className="w-[40px] h-[40px] "></RiSpeaker2Fill>{" "}
            <div className="ms-5">
              <p className=" font-semibold text-2xl">Noise Cancellation</p>
              <p className="mt-5 text-1xl font-semibold">
                Smart filtering to remove noise and boosting your voice{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-[50%]  sm-[100%] ps-5">
          <div className="flex mt-20 ">
            <FaCameraRetro className="w-[40px] h-[40px] "></FaCameraRetro>{" "}
            <div className="ms-5">
              <p className=" font-semibold text-2xl">Camera Auto Follow</p>
              <p className="mt-5 text-1xl font-semibold">
                Smart filtering to remove noise and boosting your voice
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  justify-center items-center">
        <div className="sm:w-[50%]  sm-[100%] ps-5">
          <div className="flex mt-20 ">
            <RiUserVoiceFill className="w-[40px] h-[40px] "></RiUserVoiceFill>{" "}
            <div className="ms-5">
              <p className=" font-semibold text-2xl">Voice Rooms</p>
              <p className="mt-5 text-1xl font-semibold">
                Smart filtering to remove noise and boosting your voice
              </p>
            </div>
          </div>
        </div>

        <div className="sm:w-[50%]  sm-[100%] ps-5">
          <div className="flex mt-20 ">
            <HiOutlineEmojiHappy className="w-[40px] h-[40px] "></HiOutlineEmojiHappy>{" "}
            <div className="ms-5">
              <p className=" font-semibold text-2xl">Beautify</p>
              <p className="mt-5 text-1xl font-semibold">
                Smart filtering to remove noise and boosting your voice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
