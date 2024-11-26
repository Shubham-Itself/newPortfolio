"use client";
import React, { useState } from "react";
import Home from "./components/home/Home";
import HomeBig from "./components/home/HomeBig";
import Experience from "./components/home/Experience";
import Skills from "./components/home/Skills";
import Contact from "./components/home/Contact";
import ExperienceInfo from "./bigInfoComponents/ExperienceInfo";
import AboutInfo from "./bigInfoComponents/AboutInfo";
import Skillsinfo from "./bigInfoComponents/Skillsinfo";
import Image from "next/image";

const page = () => {
  const [isBig, setIsBig] = useState(false);
  const [experienceInfo, setInfoExperience] = useState(false);
  const [aboutInfo, setAboutInfo] = useState(false);
  const [skillsInfo, setSkillsInfo] = useState(false);
  return (
    <div className="p-[80px] bg-gray-100 relative ">
      {/* <Image src="/img/bgweb.webp" alt="" fill className="" /> */}
      <div className="relative ">
        <div className=" h-[80vh] grid grid-cols-6 grid-rows-5 gap-8">
          <div
            className={`col-span-2 row-span-3 rounded-[20px] shadow-custom bg-white translate125 overflow-hidden
               ${
                 isBig
                   ? "translate-x-[-125%] opacity-0"
                   : experienceInfo
                   ? "translate-y-[-125%] opacity-0"
                   : aboutInfo
                   ? "scale-y-125 opacity-0 origin-top-left"
                   : skillsInfo
                   ? "translate-x-[-125%] opacity-0"
                   : "translate-0 opacity-100"
               }`}
            onClick={() => {
              setAboutInfo(true);
            }}
          >
            <Home />
          </div>

          <div
            className={`col-span-4 row-span-2 col-start-1 row-start-4 bg-white   rounded-[20px] translate125 shadow-custom overflow-hidden ${
              isBig
                ? "translate-x-[-125%] opacity-0"
                : experienceInfo
                ? "scale-y-125 opacity-0 origin-bottom-left"
                : aboutInfo
                ? "translate-y-[125%] opacity-0"
                : skillsInfo
                ? "translate-y-[125%] opacity-0"
                : "translate-0 opacity-100"
            }`}
            onClick={() => {
              setInfoExperience(true);
            }}
          >
            <Contact />
          </div>
          <div
            className={`col-span-2 row-span-3 col-start-3 row-start-1 bg-white  rounded-[20px] translate125 shadow-custom overflow-hidden ${
              isBig
                ? "translate-x-[-231%] opacity-0"
                : experienceInfo
                ? "translate-y-[-125%] opacity-0"
                : aboutInfo
                ? "translate-x-[231%] opacity-0"
                : skillsInfo
                ? "scale-x-125 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
            onClick={() => {
              setSkillsInfo(true);
            }}
          >
            <Skills />
          </div>
          <div
            className={`col-span-2 row-span-5 col-start-5 row-start-1 bg-white  rounded-[20px] translate125 origin-right origin-center overflow-hidden shadow-custom ${
              isBig
                ? "scale-x-125 opacity-0"
                : experienceInfo
                ? "translate-x-[125%] opacity-0"
                : aboutInfo
                ? "translate-x-[125%] opacity-0"
                : skillsInfo
                ? "translate-x-[125%] opacity-0"
                : "scale-x-100 opacity-100 translate-0"
            }`}
            onClick={() => {
              setIsBig(true);
            }}
          >
            <Experience />
          </div>
        </div>

        <HomeBig isBig={isBig} setIsBig={setIsBig} />
        <ExperienceInfo
          experienceInfo={experienceInfo}
          setInfoExperience={setInfoExperience}
        />
        <AboutInfo aboutInfo={aboutInfo} setAboutInfo={setAboutInfo} />
        <Skillsinfo skillsInfo={skillsInfo} setSkillsInfo={setSkillsInfo} />
      </div>
    </div>
  );
};

export default page;
