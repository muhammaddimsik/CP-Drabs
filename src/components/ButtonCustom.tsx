import { ArrowUpRight } from "lucide-react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ButtonCustom: React.FC<Props> = ({ children }) => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=6281586915991&text=Halo Drabs! Saya ingin konsultasi tentang sistem informasi.&type=phone_number&app_absent=0"
      target="_blank"
    >
      <button className="flex items-center gap-1 text-white text-sm border border-white rounded-full py-2 px-5 hover:text-[#0F2028] hover:bg-[#EDFF71] hover:border-[#EDFF71]">
        {children}
        <ArrowUpRight className="w-5" />
      </button>
    </a>
  );
};

export default ButtonCustom;
