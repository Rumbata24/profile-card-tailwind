import Image from "next/image";
import React from "react";
import profile from "../public/profile.png";

const FileCard = () => {
  return (
    <section className="relative z-10 w-full sm:w-[785px] bg-white bg-opacity-40  p-6 sm:p-12 rounded-[58px] ">
      <div className="absolute inset-1/2 transform -translate-x-1/2 top-[-20px] bg-white bg-opacity-20 rounded-[58px] border border-white w-full h-full  sm:w-[826px]  sm:h-[521px] z-0 "></div>
      <div className="flex flex-col sm:flex-row gap-10 items-center relative">
        <div className="flex justify-center">
          <div className="flex items-center">
            <Image
              src={profile}
              alt="profile"
              className="border-[6px] border-white  rounded-full"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="text-content py-6 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold">Mae Shaw</h1>
          <p className="text-base font-bold">@maeshaw</p>
          <p className="font-medium text-lg max-w-[441px] py-2 sm:py-4">
            If you like my work, consider supporting me on PayPal and help me
            make a dream come true.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 sm:pb-12">
            <div className=" pr-6 pb-4 sm:pb-0">
              <p className="font-bold text-lg">74.3M</p>
              <p className="font-medium text-base">Views</p>
            </div>
            <div className="  pr-6 pb-4 sm:pb-0">
              <p className="font-bold text-lg">17</p>
              <p className="font-medium text-base">Rank</p>
            </div>
            <div className=" pl-6">
              <p className="font-bold text-lg">45M</p>
              <p className="font-medium text-base">Downloads</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-4 w-full">
            <button className="bg-[#0A0A14] text-white rounded-md font-medium text-lg sm:text-xl py-3 sm:py-4 px-10 sm:px-14">
              Follow
            </button>
            <button className="bg-transparent border border-[#0A0A14] text-black rounded-md font-medium text-lg sm:text-xl py-3 sm:py-4 px-5 sm:px-7">
              View profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileCard;
