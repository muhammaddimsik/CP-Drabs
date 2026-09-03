import React from "react";
import { ChevronDown, MailOpen } from "lucide-react";

import { jawaWeddingData } from "../data/jawaWeddingData";

import JawaGunungan from "./ornaments/JawaGunungan";
import JawaKawungPattern from "./ornaments/JawaKawungPattern";

interface Props {
  guestName: string;
  onOpen: () => void;
}

const JawaCover: React.FC<Props> = ({ guestName, onOpen }) => {
  const { groom, bride, cover } = jawaWeddingData;

  return (
    <section className="fixed inset-0 z-[100] overflow-hidden bg-[#261A13]">
      {/* FOTO BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#24170f]/75 via-[#2c1b11]/55 to-[#1d120c]/90" />

      {/* KAWUNG PATTERN */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <JawaKawungPattern className="h-full w-full text-[#d4b273]/10" />
      </div>

      {/* GOLD BORDER */}
      <div className="pointer-events-none absolute inset-4 border border-[#c3a264]/35 md:inset-7" />

      <div className="pointer-events-none absolute inset-7 border border-[#c3a264]/10 md:inset-10" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-8 py-12 text-center text-[#F7F0E5]">
        <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.45em] text-[#dbc18e]">
          Pawiwahan
        </p>

        <JawaGunungan className="mb-5 h-20 w-14 text-[#d0ae69]" />

        <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
          The Wedding of
        </p>

        <div className="mt-5">
          <h1 className="font-serif text-[54px] font-medium leading-[0.8] tracking-tight md:text-6xl">
            {bride.name}
          </h1>

          <span className="my-3 block font-serif text-3xl italic text-[#d1ae6c]">
            &
          </span>

          <h1 className="font-serif text-[54px] font-medium leading-[0.8] tracking-tight md:text-6xl">
            {groom.name}
          </h1>
        </div>

        <div className="my-7 flex items-center gap-3">
          <div className="h-px w-12 bg-[#d1ae6c]/50" />

          <div className="h-1.5 w-1.5 rotate-45 border border-[#d1ae6c]" />

          <div className="h-px w-12 bg-[#d1ae6c]/50" />
        </div>

        <p className="text-[10px] uppercase tracking-[0.35em] text-[#eee1cb]">
          20 • 09 • 2026
        </p>

        <div className="mt-10">
          <p className="text-[11px] tracking-wide text-white/65">Kepada Yth.</p>

          <p className="mt-1 text-[11px] text-white/65">Bapak/Ibu/Saudara/i</p>

          <h2 className="mt-3 font-serif text-3xl italic text-[#F7EBD7]">
            {guestName}
          </h2>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="
            group mt-8 inline-flex
            items-center gap-2
            border border-[#C2A060]
            bg-[#8B633D]/70
            px-8 py-3
            text-[10px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-[#fff8ec]
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-[#B89558]
          "
        >
          <MailOpen
            size={15}
            className="transition-transform group-hover:-translate-y-0.5"
          />
          Buka Undangan
        </button>

        <div className="absolute bottom-8 flex flex-col items-center gap-1 text-white/45">
          <span className="text-[9px] tracking-[0.15em]">Geser ke atas</span>

          <ChevronDown size={17} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default JawaCover;
