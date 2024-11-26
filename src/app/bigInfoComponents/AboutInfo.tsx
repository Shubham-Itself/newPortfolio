import React from "react";

interface AboutInfoProps {
  aboutInfo: boolean;
  setAboutInfo: (aboutInfo: boolean) => void;
}
const AboutInfo = ({ aboutInfo, setAboutInfo }: AboutInfoProps) => {
  return (
    <div
      className={`absolute top-2/4 left-2/4 translate125 shadow-custom overflow-hidden origin-top-left w-full h-full bg-white rounded-[20px] bgSet   ${
        aboutInfo
          ? "scale-100 -translate-x-2/4 -translate-y-2/4  opacity-100"
          : "scale-0 -translate-x-2/4 -translate-y-2/4  opacity-0"
      }`}
      onClick={() => {
        setAboutInfo(false);
      }}
    >
      About big
    </div>
  );
};

export default AboutInfo;
