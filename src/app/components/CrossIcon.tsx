import React from "react";
import Image from "next/image";

interface CrossProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CrossIcon = ({ setOpen }: CrossProps) => {
  return (
    <div
      className="absolute top-[15px] right-[15px] cursor-pointer grayscale"
      onClick={() => {
        setOpen(false);
      }}
    >
      <Image src="/img/cross-icon.svg" alt="" width={20} height={20} />
    </div>
  );
};

export default CrossIcon;
