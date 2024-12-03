"use client";
import React, { useState } from "react";
import Home from "./home/Home";
import HomeBig from "./home/HomeBig";
import Experience from "./home/Experience";
import Skills from "./home/Skills";
import Contact from "./home/Contact";
import ExperienceInfo from "../bigInfoComponents/ExperienceInfo";
import AboutInfo from "../bigInfoComponents/AboutInfo";
import Skillsinfo from "../bigInfoComponents/Skillsinfo";

const ProjectWrapper = () => {
  const [isBig, setIsBig] = useState(false);
  const [experienceInfo, setInfoExperience] = useState(false);
  const [aboutInfo, setAboutInfo] = useState(false);
  const [skillsInfo, setSkillsInfo] = useState(false);
  const [aboutInfoAnim, setAboutInfoAnim] = useState(false);
  return (
    <div className=" bg-gray-100 relative min-h-screen overflow-hidden">
      {/* <Image src="/img/bgweb.webp" alt="" fill className="" /> */}
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full px-[80px]">
        <div className="relative ">
          <div className=" h-[80vh] grid grid-cols-6 grid-rows-5 gap-8">
            <div
              className={`col-span-2 row-span-3 md:col-span-6 md:row-span-3 rounded-[20px] shadow-custom bg-white translate125 overflow-hidden
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
                setAboutInfoAnim(true);
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
          <AboutInfo
            aboutInfo={aboutInfo}
            setAboutInfo={setAboutInfo}
            aboutInfoAnim={aboutInfoAnim}
            setAboutInfoAnim={setAboutInfoAnim}
          />
          <Skillsinfo skillsInfo={skillsInfo} setSkillsInfo={setSkillsInfo} />
        </div>
      </div>
    </div>
  );
};

export default ProjectWrapper;
