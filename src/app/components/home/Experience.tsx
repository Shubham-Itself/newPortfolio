import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="w-full h-full font-bold text-3xl flex justify-center items-center md:p-3 flex-col p-5 gap-2 relative overflow-hidden">
      <div className="w-[90%] h-[4px] bg-[#654c01] absolute top-0 left-2/4 -translate-x-2/4  blur-[20px]"></div>
      <div className="w-[50.52%] flex justify-center md:hidden">
        <Image src="/img/experience.webp" alt="" width={220} height={220} />
      </div>
      <div className="lg:hidden">💼</div>
      <div className="font-extrabold md:text-xl text-2xl text-[#2E3A59] tracking-wide">
        Experience / Projects
      </div>
      <p className="text-base text-[#4A5568] md:text-sm ">
        An insight into Shubham&apos;s career path, significant contributions,
        and impactful projects.
      </p>
    </div>
  );
};

export default Experience;
