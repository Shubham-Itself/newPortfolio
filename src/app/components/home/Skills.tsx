import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full h-full font-bold text-3xl flex justify-center items-center md:p-3 flex-col p-5 gap-2 relative overflow-hidden">
      {/* <div className="w-[90%] h-[4px] bg-[#de1111] absolute top-0 left-2/4 -translate-x-2/4  blur-[20px]"></div> */}
      <div className="w-[50.52%] md:hidden">
        <Image
          src="/img/skills.webp"
          alt=""
          width={220}
          height={220}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="lg:hidden">🚀</div>
      <div className="font-extrabold text-2xl md:text-xl text-[#E0E0E0] tracking-wide">
        Skills
      </div>
      <p className="text-base text-[#B3B3B3] md:text-sm ">
        Explore the diverse skills and tools that empower Shubham to deliver
        exceptional results.
      </p>
    </div>
  );
};

export default Skills;
