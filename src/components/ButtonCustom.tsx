import { ArrowUpRight } from "lucide-react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ButtonCustom: React.FC<Props> = ({ children }) => {
  return (
    <button className="flex items-center gap-1 text-white text-sm border border-white rounded-full py-3 px-6 hover:text-[#0F2028] hover:bg-[#EDFF71] hover:border-[#EDFF71]">
      {children}
      <ArrowUpRight className="w-5" />
    </button>
  );
};

export default ButtonCustom;
