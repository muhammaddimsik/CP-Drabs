import React from "react";
import { ChevronDown } from "lucide-react";
import { weddingData } from "../data/weddingData";

interface Props {
  guestName: string;
  onOpen: () => void;
}

const WeddingCover: React.FC<Props> = ({ guestName, onOpen }) => {
  const { groom, bride, cover } = weddingData;

  return (
    <div
      className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex min-h-screen w-full max-w-md flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/60 font-serif text-lg">
          {groom.name.charAt(0)}
          <span className="mx-1 text-white/60">/</span>
          {bride.name.charAt(0)}
        </div>

        <p className="mb-4 text-xs tracking-[0.35em] text-white/80">
          THE WEDDING OF
        </p>

        <h1 className="font-serif text-6xl font-medium leading-[0.9]">
          {groom.name}
          <span className="my-3 block text-4xl">&</span>
          {bride.name}
        </h1>

        <div className="my-8 h-px w-28 bg-white/50" />

        <p className="text-xs tracking-[0.25em]">24 AGUSTUS 2026</p>

        <div className="mt-14">
          <p className="text-sm text-white/80">Kepada Yth.</p>

          <p className="mt-1 text-sm text-white/80">Bapak/Ibu/Saudara/i</p>

          <h2 className="mt-3 font-serif text-4xl italic">{guestName}</h2>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="mt-8 rounded-full bg-[#c49a73] px-10 py-3 text-xs font-medium tracking-[0.15em] text-white transition hover:bg-[#b68b65]"
        >
          BUKA UNDANGAN
        </button>

        <div className="absolute bottom-7 flex flex-col items-center gap-1 text-white/70">
          <span className="text-xs">Geser ke atas</span>

          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default WeddingCover;
