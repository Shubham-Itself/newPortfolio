import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="w-full h-full font-bold text-3xl flex justify-center items-center flex-col md:p-3 p-5 gap-2 relative overflow-hidden">
      {/* <div className="w-[90%] h-[4px] bg-[#1080d6] absolute top-0 left-2/4 -translate-x-2/4  blur-[20px]"></div> */}
      <div className="w-[17.31%] md:w-[50.52%] md:hidden">
        <Image
          src="/img/contact_us.webp"
          alt=""
          width={120}
          height={120}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="lg:hidden">📧</div>
      <div className="font-extrabold md:text-xl text-2xl text-[#E0E0E0] tracking-wide">
        Contact
      </div>
      <p className="text-base text-[#B3B3B3] md:text-sm">
        Looking to connect? Reach out to Shubham and start the conversation
        today.
      </p>
    </div>
  );
};

export default Contact;
