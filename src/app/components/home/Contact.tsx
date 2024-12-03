import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="w-full h-full font-bold text-3xl flex justify-center items-center flex-col p-5 gap-2 relative overflow-hidden">
      <div className="w-[90%] h-[4px] bg-[#1080d6] absolute top-0 left-2/4 -translate-x-2/4  blur-[20px]"></div>
      <div className="">
        <Image src="/img/contact_us.webp" alt="" width={120} height={120} />
      </div>
      <div className="font-extrabold text-2xl text-[#2E3A59] tracking-wide">
        Contact
      </div>
      <p className="text-base text-[#4A5568]">
        Looking to connect? Reach out to Shubham and start the conversation
        today.
      </p>
    </div>
  );
};

export default Contact;
