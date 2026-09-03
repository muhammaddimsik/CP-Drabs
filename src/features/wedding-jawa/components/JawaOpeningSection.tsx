import React from "react";

import { jawaWeddingData } from "../data/jawaWeddingData";

import JawaDivider from "./ornaments/JawaDivider";
import JawaGunungan from "./ornaments/JawaGunungan";
import JawaKawungPattern from "./ornaments/JawaKawungPattern";

const JawaOpeningSection: React.FC = () => {
  const { groom, bride, opening, quote } =
    jawaWeddingData;

  return (
    <section
      id="jawa-home"
      className="relative overflow-hidden bg-[#F5EFE3] px-6 py-24 text-center"
    >
      {/* subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <JawaKawungPattern className="h-full w-full text-[#5D3B25]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <div
          data-aos="fade-up"
          className="mx-auto"
        >
          <JawaGunungan className="mx-auto h-20 w-14 text-[#B89558]" />

          <p className="mt-6 text-[9px] font-semibold tracking-[0.4em] text-[#9D7748]">
            {opening.label}
          </p>

          <h2 className="mt-3 font-serif text-5xl text-[#39281E]">
            {opening.title}
          </h2>

          <JawaDivider />
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#756557]"
        >
          {opening.description}
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-12 border-y border-[#C9AF82]/40 py-9"
        >
          <p className="font-serif text-xl italic leading-8 text-[#5F4635]">
            “{quote.text}”
          </p>

          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9D7748]">
            {quote.source}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#9C805F]">
            Pawiwahan
          </p>

          <h3 className="mt-4 font-serif text-4xl text-[#39281E]">
            {bride.name}
            <span className="mx-3 italic text-[#B89558]">
              &
            </span>
            {groom.name}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default JawaOpeningSection;