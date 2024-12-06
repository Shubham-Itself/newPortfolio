import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full h-full font-bold text-3xl flex justify-center items-center md:p-3 flex-col p-5 gap-2 relative overflow-hidden">
      <div className="w-[90%] h-[4px] bg-[#ca9802] absolute top-0 left-2/4 -translate-x-2/4  blur-[20px]"></div>
      <div className="w-[50.52%] md:hidden">
        <Image
          src="/img/about_me.webp"
          alt=""
          width={220}
          height={220}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="lg:hidden">🧑‍💻</div>
      <div className="font-extrabold text-2xl md:text-xl text-[#2E3A59] tracking-wide ">
        About
      </div>
      <p className="text-base text-[#4A5568] md:text-sm ">
        Read about Shubham&apos;s journey, passion, and the person behind the
        professional.
      </p>
    </div>
  );
};

export default Home;
