import React from "react";
import JawaGunungan from "./JawaGunungan";

const JawaDivider: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div className="h-px w-16 bg-[#B89558]/50" />

      <JawaGunungan className="h-10 w-7 text-[#B89558]" />

      <div className="h-px w-16 bg-[#B89558]/50" />
    </div>
  );
};

export default JawaDivider;