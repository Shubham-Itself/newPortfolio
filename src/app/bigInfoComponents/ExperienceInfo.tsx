import React from "react";

interface ExperienceInfoProps {
  experienceInfo: boolean;
  setInfoExperience: (experienceInfo: boolean) => void;
}
const ExperienceInfo = ({
  experienceInfo,
  setInfoExperience,
}: ExperienceInfoProps) => {
  return (
    <div
      className={`absolute top-2/4 left-2/4 translate125 shadow-custom overflow-hidden origin-bottom-left w-full h-full bg-white rounded-[20px]  ${
        experienceInfo
          ? "scale-100 -translate-x-2/4 -translate-y-2/4  opacity-100"
          : "scale-0 -translate-x-2/4 -translate-y-2/4  opacity-0"
      }`}
      onClick={() => {
        setInfoExperience(false);
      }}
    >
      experience info
    </div>
  );
};

export default ExperienceInfo;
