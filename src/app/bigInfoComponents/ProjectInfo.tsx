import React from "react";

interface ProjectInfo {
  isBig: boolean;
}

const ProjectInfo = ({ isBig }: ProjectInfo) => {
  const ProjectInfo = [
    {
      name: "Retail Internet Banking (ICICI)",
      techStack: "Angular JS, Typescript, Scss",
      detail:
        "I developed a top-notch frontend for ICICI bank while working on the client side in Sparklin Innovations Pvt. Ltd.",
    },
    {
      name: "Carbon.ai (Carbon is a universal retrieval engine for LLMs to access unstructured data from any source.)",
      techStack: "Next js, Typescript, Tailwind, Supabase",
      detail:
        "I contributed to carbon by working on their node package and developing their user dashboard while working in Costrings",
    },
    {
      name: "Costrings Website ",
      techStack: "Next js Typescript, Tailwind, Sendgrid",
      detail:
        "I worked on email integration for the Costrings website by using send grid.",
    },
    {
      name: "Sparklins Website ",
      techStack: "Next js, Typescript, Tailwind",
      detail:
        "I migrated the Sparklin website from Vanilla JS to Next.js and worked on fixing the UI and animations.",
    },
  ];
  return (
    <div
      className={`text-[25px] font-bold text-[#2E3A59] mt-[20px]   ${
        isBig ? "tracking-in-expand !delay-[0.9s]" : ""
      }`}
    >
      Projects
      {ProjectInfo.map((item, index) => (
        <div className="flex gap-[20px] mt-[20px] card" key={index}>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#2E3A59] shadow-custom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              style={{ fill: "rgb(212, 215, 220)" }}
              width={20}
              height={20}
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path>
            </svg>
          </div>

          <div className="flex flex-col gap-[10px] text-[#4A5568] w-full">
            <div className="text-[25px] font-semibold flex justify-between w-full">
              <h1>{item.name}</h1>
              <p className="font-normal text-[22px]">{item.techStack}</p>
            </div>
            <p className="text-[18px] font-medium">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectInfo;
