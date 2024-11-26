import React from "react";

interface HomeBigProps {
  isBig: boolean;
  setIsBig: (isBig: boolean) => void;
}
const HomeBig = ({ isBig, setIsBig }: HomeBigProps) => {
  return (
    <div
      className={`absolute top-2/4 left-2/4 translate125 shadow-custom overflow-hidden origin-right origin-center w-full h-full bg-white rounded-[20px]  ${
        isBig
          ? "scale-x-100 -translate-x-2/4 -translate-y-2/4  opacity-100"
          : "scale-x-0 -translate-x-2/4 -translate-y-2/4  opacity-0"
      }`}
      onClick={() => {
        setIsBig(false);
      }}
    >
      Homebig
    </div>
  );
};

export default HomeBig;
