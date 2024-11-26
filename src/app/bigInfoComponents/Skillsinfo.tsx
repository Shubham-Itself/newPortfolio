import React from "react";

interface SkillsinfoProps {
  skillsInfo: boolean;
  setSkillsInfo: (skillsInfo: boolean) => void;
}
const Skillsinfo = ({ skillsInfo, setSkillsInfo }: SkillsinfoProps) => {
  return (
    <div
      className={`absolute top-2/4 left-2/4 translate125 shadow-custom overflow-hidden origin-top w-full h-full bg-white rounded-[20px]  ${
        skillsInfo
          ? "scale-100 -translate-x-2/4 -translate-y-2/4  opacity-100"
          : "scale-0 -translate-x-2/4 -translate-y-2/4  opacity-0"
      }`}
      onClick={() => {
        setSkillsInfo(false);
      }}
    >
      Skills big
    </div>
  );
};

export default Skillsinfo;
