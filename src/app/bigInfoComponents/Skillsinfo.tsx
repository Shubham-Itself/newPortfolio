import React from "react";
import Image from "next/image";

interface SkillsinfoProps {
  skillsInfo: boolean;
  setSkillsInfo: (skillsInfo: boolean) => void;
}
const circleColor: string[] = ["#ff605c", "#ffbd44", "#00ca4e"];
const Skillsinfo = ({ skillsInfo, setSkillsInfo }: SkillsinfoProps) => {
  const SkillSet = [
    {
      title: "Core Technologies",
      fill: "#fabd22",
      src: "/img/sitepoint.webp",
      Technologies: [
        {
          pathCombinationOne: [
            {
              title: "Javascript",
              src: "/img/javascript-1.webp",
              fill: "#61D9FB",
            },
          ],

          pathCombinationTwo: [
            {
              title: "HTML5",
              src: "/img/html-1.webp",
              fill: "#61D9FB",
            },
            {
              title: "CSS",
              src: "/img/css.webp",
              fill: "#61D9FB",
            },
            {
              title: "SASS",
              src: "/img/sass-1.webp",
              fill: "#61D9FB",
            },
          ],
          pathCombinationThree: [],
        },
      ],
    },

    {
      title: "React JS",
      fill: "#fabd22",
      src: "/img/react-2.webp",
      Technologies: [
        {
          pathCombinationOne: [
            {
              title: "React",
              src: "/img/react-2.webp",
            },
            {
              title: "React Router",
              src: "/img/react-router-svgrepo-com.webp",
            },
            {
              title: "Redux",
              src: "/img/redux.webp",
            },
          ],

          pathCombinationTwo: [
            {
              title: "Tailwind",
              src: "/img/tailwind-css-2.webp",
            },
            {
              title: "Styled Components",
              src: "/img/styled-components-1.webp",
            },
          ],
          pathCombinationThree: [
            {
              title: "Bootstrap",
              src: "/img/bootstrap-5-1.webp",
            },
          ],
        },
      ],
    },
    {
      title: "Angular JS",
      fill: "#fabd22",
      src: "/img/angular-icon-1.webp",
      Technologies: [
        {
          pathCombinationOne: [
            {
              title: "Angular",
              src: "/img/angular-icon-1.webp",
            },
            {
              title: "Typescript",
              src: "/img/typescript-2.webp",
            },
            {
              title: "Block Element Modifier (BEM)",
              src: "/img/element-ui-1.webp",
            },
          ],

          pathCombinationTwo: [],
          pathCombinationThree: [],
        },
      ],
    },
    {
      title: "Animation",
      fill: "#fabd22",
      src: "/img/gsap-greensock.webp",
      Technologies: [
        {
          pathCombinationOne: [
            {
              title: "CSS Animation",
              src: "/img/prettier-1.webp",
            },
          ],

          pathCombinationTwo: [
            {
              title: "Green Sock Animation Platform",
              src: "/img/gsap-greensock.webp",
            },
          ],
          pathCombinationThree: [],
        },
      ],
    },
    {
      title: "Tools",
      fill: "#fabd22",
      src: "/img/amazon-developer-tools.webp",
      Technologies: [
        {
          pathCombinationOne: [
            {
              title: "Netlify",
              src: "/img/netlify.webp",
            },
            {
              title: "Vercel",
              src: "/img/vercel.webp",
            },
          ],

          pathCombinationTwo: [
            {
              title: "Git",
              src: "/img/git-icon.webp",
            },
            {
              title: "Github",
              src: "/img/github-icon-2.webp",
            },
            {
              title: "Bitbucket",
              src: "/img/bitbucket-icon.webp",
            },
          ],
          pathCombinationThree: [
            {
              title: "Notion",
              src: "/img/notion-2.webp",
            },
            {
              title: "Webpack",
              src: "/img/webpack-icon.webp",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div
      className={`absolute top-2/4 left-2/4 translate125 shadow-custom overflow-hidden origin-top w-full h-full bg-[#1E1E1E] rounded-[20px] overflow-y-auto  ${
        skillsInfo
          ? "scale-100 -translate-x-2/4 -translate-y-2/4  opacity-100"
          : "scale-0 -translate-x-2/4 -translate-y-2/4  opacity-0"
      }`}
    >
      {skillsInfo && (
        <>
          <div
            className="absolute top-[15px] right-[15px] cursor-pointer grayscale"
            onClick={() => {
              setSkillsInfo(false);
            }}
          >
            <Image src="/img/cross-icon.svg" alt="" width={20} height={20} />
          </div>
          <div className="px-[50px] my-[50px]">
            {SkillSet.map((skills, index) => (
              <div
                style={{ transitionDelay: `${(index + 1) * 0.6}s` }}
                className={`border border-[#292929] rounded-[10px] overflow-hidden mb-[20px] last:mb-[0px] ${
                  skillsInfo ? "fade-in-bottom " : "hidden"
                } `}
                key={index}
              >
                <div className="bg-[#292929] p-[15px]">
                  <CircleComponent />
                </div>
                <div className="p-[20px] ">
                  <div className="flex items-center gap-[10px] ">
                    <div className="">
                      <Image
                        src={skills.src}
                        alt={skills.title}
                        width={30}
                        height={30}
                      />
                    </div>
                    <p className="text-[25px] font-bold text-[#E0E0E0]">
                      {skills.title}
                    </p>
                  </div>
                  <div className="pt-[20px]">
                    <div>
                      {skills.Technologies.map((svg, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between flex-wrap "
                        >
                          <div className="flex items-center gap-[10px] justify-between w-[40%]">
                            <div className="flex gap-[10px] items-center">
                              {svg.pathCombinationOne.map((svg, index) => (
                                <div title={svg.title} key={index}>
                                  <Image
                                    src={svg.src}
                                    alt={svg.title}
                                    width={40}
                                    height={50}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className=" relative w-1/2 bg-gray-200 rounded-full h-[4px] ">
                              <p className="absolute top-[-22px] text-[#B3B3B3] font-semibold right-0">
                                85
                              </p>
                              <div
                                className="bg-blue-600 h-[4px] rounded-full"
                                style={{
                                  width: "85%",
                                  backgroundColor: "#E9CA32",
                                }}
                              ></div>
                            </div>
                          </div>
                          <div className="flex w-[40%] items-center justify-between">
                            <div className="flex gap-[10px] items-center">
                              {svg.pathCombinationTwo.map((svg, index) => (
                                <div title={svg.title} key={index}>
                                  <Image
                                    src={svg.src}
                                    alt={svg.title}
                                    width={40}
                                    height={50}
                                  />
                                </div>
                              ))}
                            </div>
                            {svg.pathCombinationTwo.length > 0 && (
                              <div className=" relative w-1/2 bg-gray-200 rounded-full h-[4px] ">
                                <p className="absolute top-[-22px] text-[#B3B3B3] font-semibold right-0">
                                  95
                                </p>
                                <div
                                  className="bg-blue-600 h-[4px] rounded-full"
                                  style={{
                                    width: "95%",
                                    backgroundColor: "#E34F26",
                                  }}
                                ></div>
                              </div>
                            )}
                          </div>

                          <div className="flex w-[40%] items-center justify-between mt-[20px]">
                            <div className="flex gap-[10px] items-center">
                              {svg.pathCombinationThree.map((svg, index) => (
                                <div title={svg.title} key={index}>
                                  <Image
                                    src={svg.src}
                                    alt={svg.title}
                                    width={40}
                                    height={50}
                                  />
                                </div>
                              ))}
                            </div>
                            {svg.pathCombinationThree.length > 0 && (
                              <div className=" relative w-1/2 bg-gray-200 rounded-full h-[4px] ">
                                <p className="absolute top-[-22px] text-[#4A5568] font-semibold right-0">
                                  95
                                </p>
                                <div
                                  className="bg-blue-600 h-[4px] rounded-full"
                                  style={{
                                    width: "95%",
                                    backgroundColor: "#E34F26",
                                  }}
                                ></div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Skillsinfo;

export const CircleComponent = () => {
  return (
    <div className="flex gap-[8px]">
      {circleColor.map((color, index) => (
        <div
          key={index}
          className="w-[10px] h-[10px] rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};
