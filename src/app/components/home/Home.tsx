import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full h-full font-bold text-3xl flex justify-center items-center flex-col p-5 gap-2 relative overflow-hidden">
      <div className="w-[90%] h-[4px] bg-[#ca9802] absolute top-0 left-2/4 -translate-x-2/4  blur-[20px]"></div>
      <div className="">
        <Image src="/img/about_me.svg" alt="" width={220} height={220} />
      </div>
      <div className="font-extrabold text-2xl text-[#2E3A59] tracking-wide ">
        About
      </div>
      <p className="text-base text-[#4A5568]">
        Read about Shubham&apos;s journey, passion, and the person behind the
        professional.
      </p>
    </div>
  );
};

export default Home;
