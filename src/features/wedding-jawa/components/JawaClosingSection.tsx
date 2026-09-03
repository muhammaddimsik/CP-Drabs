import React from "react";

import { jawaWeddingData } from "../data/jawaWeddingData";

import JawaGunungan from "./ornaments/JawaGunungan";
import JawaKawungPattern from "./ornaments/JawaKawungPattern";

const JawaClosingSection: React.FC = () => {
  const {
    groom,
    bride,
    closingImage,
  } = jawaWeddingData;

  return (
    <section
      id="jawa-closing"
      className="relative min-h-[760px] overflow-hidden"
    >
      {/* PHOTO */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${closingImage})`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#291A11]/70 via-[#342217]/65 to-[#1D120C]/90" />

      {/* PATTERN */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <JawaKawungPattern className="h-full w-full text-[#E4C687]" />
      </div>

      {/* BORDER */}
      <div className="pointer-events-none absolute inset-5 border border-[#D1AF70]/30 md:inset-8" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-2xl flex-col items-center justify-center px-8 py-24 text-center text-[#F7EEE2]">
        <div data-aos="fade-up">
          <JawaGunungan className="mx-auto h-24 w-16 text-[#D3B273]" />

          <p className="mt-8 text-[9px] uppercase tracking-[0.4em] text-[#D9BE8A]">
            Panutup
          </p>

          <h2 className="mt-4 font-serif text-6xl italic text-[#F4DFC0]">
            Matur Nuwun
          </h2>

          <div className="mx-auto my-8 flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-[#D3B273]/50" />

            <div className="h-2 w-2 rotate-45 border border-[#D3B273]" />

            <div className="h-px w-14 bg-[#D3B273]/50" />
          </div>

          <p className="mx-auto max-w-xl text-sm leading-8 text-[#E7DACE]">
            Merupakan suatu kehormatan dan kebahagiaan
            bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dan memberikan doa restu
            kepada kami.
          </p>

          <p className="mx-auto mt-7 max-w-xl font-serif text-xl italic leading-8 text-[#DCC49A]">
            “Mugi Gusti Allah paring berkah lan
            kabagyan ing saben lampah kita.”
          </p>

          <div className="mt-12">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#D0B27A]">
              Kami yang berbahagia
            </p>

            <h3 className="mt-5 font-serif text-5xl text-white">
              {groom.name}
              <span className="mx-3 italic text-[#D4B170]">
                &
              </span>
              {bride.name}
            </h3>
          </div>

          <JawaGunungan className="mx-auto mt-10 h-12 w-8 text-[#D3B273]/70" />
        </div>
      </div>
    </section>
  );
};

export default JawaClosingSection;