import React from "react";
import Image from "next/image";

interface AboutInfoProps {
  aboutInfo: boolean;
  setAboutInfo: (aboutInfo: boolean) => void;
  aboutInfoAnim: boolean;
  setAboutInfoAnim: React.Dispatch<React.SetStateAction<boolean>>;
}
const AboutInfo = ({
  aboutInfo,
  setAboutInfo,
  aboutInfoAnim,
  setAboutInfoAnim,
}: AboutInfoProps) => {
  return (
    <div
      className={`absolute top-2/4 left-2/4 translate125 shadow-custom overflow-hidden origin-top-left w-full h-full bg-white rounded-[20px]    ${
        aboutInfo
          ? "scale-100 -translate-x-2/4 -translate-y-2/4  opacity-100"
          : "scale-0 -translate-x-2/4 -translate-y-2/4  opacity-0"
      }`}
    >
      <div className="flex  gap-40 h-full relative ">
        <div
          className="absolute top-[15px] right-[15px] cursor-pointer grayscale"
          onClick={() => {
            setAboutInfo(false);
            setAboutInfoAnim(false);
          }}
        >
          <Image src="/img/cross-icon.svg" alt="" width={20} height={20} />
        </div>
        <div
          className={` text-xl mt-[50px] ml-[50px] w-[70%] text-[#4A5568]   ${
            aboutInfo
              ? "translate-y-[0px] opacity-100 translateanim"
              : "-translate-y-[600px] opacity-0 "
          }`}
        >
          Namaste! I'm a passionate Software Engineer with 2 years of experience
          in developing scalable web applications. Proficient in JavaScript,
          TypeScript, React.js, Next.js, and Angular.js, I specialize in
          creating seamless user experiences. <br /> I've worked in domains like
          banking, food, and AI, building intuitive interfaces and solving
          complex problems. In AI, I’ve contributed to integrating external data
          with LLMs, enhancing their capabilities. I’m also passionate about
          animation and love creating cool, engaging visuals. <br /> By day, I’m
          a developer; by night, a learner. Let’s bring creativity and
          innovation to your projects!
        </div>
        <div
          className={`absolute grayscale right-[20px] bottom-0  ${
            aboutInfo ? "opacity-100 translateImage" : "opacity-0 "
          }`}
        >
          <Image src="/img/bgweb.webp" alt="" width={250} height={250} />
        </div>
        <div
          className={`absolute bottom-0 right-[136px] text-[#2E3A59] z-[-1]   ${
            aboutInfo
              ? "translate-x-[0px] opacity-100 translateanim !delay-[0.2s]"
              : "-translate-x-[600px] opacity-0 "
          }`}
        >
          <p className="text-[187px] font-bold  tracking-wider">SHUBHAM</p>
          {/* <p className="text-[132px] font-bold leading-[74px] tracking-wider">
            KUMAR
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
