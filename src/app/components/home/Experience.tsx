import React from "react";

const Experience = () => {
  return (
    <div className="w-full h-full font-bold text-3xl flex justify-center items-center flex-col p-5 gap-2 relative overflow-hidden">
      <div className="w-[90%] h-[4px] bg-[#654c01] absolute top-0 left-2/4 -translate-x-2/4  blur-[20px]"></div>
      <div className="text-5xl">💼</div>
      <div className="font-extrabold text-2xl text-[#2E3A59] tracking-wide">
        Experience / Projects
      </div>
      <p className="text-base text-[#4A5568]">
        An insight into Shubham's career path, significant contributions, and
        impactful projects.
      </p>
    </div>
  );
};

export default Experience;
