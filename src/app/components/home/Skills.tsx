import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full h-full font-bold text-3xl flex justify-center items-center flex-col p-5 gap-2 relative overflow-hidden">
      <div className="w-[90%] h-[4px] bg-[#de1111] absolute top-0 left-2/4 -translate-x-2/4  blur-[20px]"></div>
      <div className="">
        <Image src="/img/skills.webp" alt="" width={220} height={220} />
      </div>
      <div className="font-extrabold text-2xl text-[#2E3A59] tracking-wide">
        Skills
      </div>
      <p className="text-base text-[#4A5568]">
        Explore the diverse skills and tools that empower Shubham to deliver
        exceptional results.
      </p>
    </div>
  );
};

export default Skills;
