import React from "react";
import Image from "next/image";
import ProjectInfo from "@/app/bigInfoComponents/ProjectInfo";

interface HomeBigProps {
  isBig: boolean;
  setIsBig: (isBig: boolean) => void;
}
const HomeBig = ({ isBig, setIsBig }: HomeBigProps) => {
  const ExperienceData = [
    {
      companyName: "Costrings",
      companyLocationLogo: "/img/location.webp",
      companyLocation: "New Delhi, India",
      designationLogo: "/img/graduation-hat.webp",
      designationTitle: "Software Engineer",
      duration: "July 2024 - November 2024",
      techStackLogo: "/img/stack-overflow.webp",
      techStack:
        "HTML5, CSS3, Javascript, React Js, Next Js, Typescript, Tailwind Css, Shadcn UI",
    },
    {
      companyName: "Sparklin Innovations Pvt. Ltd.",
      companyLocationLogo: "/img/location.webp",
      companyLocation: "New Delhi, India",
      designationLogo: "/img/graduation-hat.webp",
      designationTitle: "Software Development Engineer - I",
      duration: "November 2022 - July 2024",
      techStackLogo: "/img/stack-overflow.webp",
      techStack:
        "HTML5, CSS3, Javascript, Angular, React, Typescript, Scss, Bootstrap",
    },
  ];
  return (
    <div
      className={`absolute  top-2/4 left-2/4 translate125 shadow-custom overflow-hidden origin-right origin-center w-full h-full bg-[#1E1E1E] rounded-[20px] overflow-y-auto ${
        isBig
          ? "scale-x-100 -translate-x-2/4 -translate-y-2/4  opacity-100"
          : "scale-x-0 -translate-x-2/4 -translate-y-2/4  opacity-0"
      }`}
    >
      <div className={`p-[50px] relative ${isBig ? "block" : "hidden"}`}>
        <div
          className="absolute top-[15px] right-[15px] cursor-pointer grayscale"
          onClick={() => {
            setIsBig(false);
          }}
        >
          <Image src="/img/cross-icon.svg" alt="" width={20} height={20} />
        </div>
        <div className="flex  flex-col relative">
          <h1
            className={`text-[25px] font-bold text-[#E0E0E0]   ${
              isBig ? "tracking-in-expand !delay-[0.9s]" : ""
            }`}
          >
            Experience
          </h1>
          {/* <div className="absolute h-[200px] w-[5px] bg-[#2E3A59] left-[23.8%] top-[100px] -z-[1]"></div> */}
          {ExperienceData.map((item, index) => (
            <div
              className={`flex  gap-[20px] mt-[20px] card  ${
                isBig ? "slide-in-blurred-righ " : ""
              } `}
              key={index}
            >
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
              <div>
                <div className="flex flex-col gap-[10px] text-[#B3B3B3]">
                  <h1 className="text-[25px] font-semibold">
                    {item.companyName}
                  </h1>
                  <div className="flex gap-[10px] items-center text-[18px] font-medium">
                    <Image
                      src={item.companyLocationLogo}
                      alt="location"
                      width={20}
                      height={20}
                    />
                    <p>{item.companyLocation}</p>
                  </div>
                  <div className="flex gap-[10px] items-center text-[18px] font-medium">
                    <Image
                      src={item.designationLogo}
                      alt="designation"
                      width={20}
                      height={20}
                    />
                    <p>{item.designationTitle}</p>
                  </div>

                  <div className="flex gap-[10px] items-center text-[18px] font-medium">
                    <Image
                      src={item.techStackLogo}
                      alt="techStack"
                      width={20}
                      height={20}
                    />
                    <p>{item.techStack}</p>
                  </div>
                  <p className="text-[18px] font-medium text-end">
                    {item.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ProjectInfo isBig={isBig} />
      </div>
    </div>
  );
};

export default HomeBig;
