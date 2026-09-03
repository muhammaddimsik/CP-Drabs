import React, { useState } from "react";

import {
  Check,
  Copy,
  CreditCard,
  Gift,
  Wallet,
} from "lucide-react";

import { jawaWeddingData } from "../data/jawaWeddingData";
import { TJawaWeddingGift } from "../types/jawaWeddingType";

import JawaDivider from "./ornaments/JawaDivider";
import JawaGunungan from "./ornaments/JawaGunungan";
import JawaKawungPattern from "./ornaments/JawaKawungPattern";

interface GiftCardProps {
  gift: TJawaWeddingGift;
}

const JawaGiftCard: React.FC<
  GiftCardProps
> = ({ gift }) => {
  const [copied, setCopied] =
    useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(gift.accountNumber);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Gagal menyalin nomor rekening:", error);
    }
  };

  return (
    <div className="relative bg-[#FBF7EF] px-7 py-9 text-center shadow-[0_18px_50px_rgba(58,40,29,0.07)]">
      {/* Frame */}
      <div className="pointer-events-none absolute inset-3 border border-[#B89558]/30" />

      <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#B89558]" />

      <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-[#B89558]" />

      <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[#B89558]" />

      <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#B89558]" />

      <div className="relative z-10">
        <div className="mx-auto flex h-11 w-11 items-center justify-center border border-[#B89558]/50 text-[#9A734D]">
          {gift.type === "bank" ? (
            <CreditCard size={19} />
          ) : (
            <Wallet size={19} />
          )}
        </div>

        <p className="mt-6 text-[9px] uppercase tracking-[0.35em] text-[#9D7748]">
          {gift.type === "bank"
            ? "Bank Transfer"
            : "E-Wallet"}
        </p>

        <h3 className="mt-2 font-serif text-3xl text-[#3E2B20]">
          {gift.provider}
        </h3>

        <div className="mx-auto my-6 flex items-center justify-center gap-2">
          <div className="h-px w-9 bg-[#B89558]/40" />

          <div className="h-1.5 w-1.5 rotate-45 bg-[#B89558]" />

          <div className="h-px w-9 bg-[#B89558]/40" />
        </div>

        <p className="font-serif text-3xl tracking-[0.08em] text-[#493429]">
          {gift.accountNumber}
        </p>

        <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-[#A18B77]">
          Atas Nama
        </p>

        <p className="mt-1 text-sm font-medium tracking-wide text-[#5A4334]">
          {gift.accountName}
        </p>

        <button
          type="button"
          onClick={handleCopy}
          className="
            mt-7
            inline-flex
            items-center
            gap-2
            border
            border-[#A77E52]
            px-7
            py-3
            text-[9px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-[#815F3E]
            transition
            hover:bg-[#8A633E]
            hover:text-white
          "
        >
          {copied ? (
            <>
              <Check size={14} />

              Tersalin
            </>
          ) : (
            <>
              <Copy size={14} />

              Salin Nomor
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const JawaGiftSection: React.FC = () => {
  return (
    <section
      id="jawa-gift"
      className="relative overflow-hidden bg-[#F5EFE3] px-5 py-24"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 opacity-[0.025]">
        <JawaKawungPattern className="h-full w-full text-[#5C3924]" />
      </div>

      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 opacity-[0.025]">
        <JawaKawungPattern className="h-full w-full text-[#5C3924]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div
          className="text-center"
          data-aos="fade-up"
        >
          <JawaGunungan className="mx-auto h-16 w-11 text-[#B89558]" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.4em] text-[#9D7748]">
            Wedding Gift
          </p>

          <h2 className="mt-3 font-serif text-5xl text-[#3E2B20]">
            Tanda Tresna
          </h2>

          <JawaDivider />

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#78685B]">
            Doa restu merupakan hadiah terindah
            bagi kami. Namun apabila
            Bapak/Ibu/Saudara/i berkenan memberikan
            tanda kasih, dapat disampaikan melalui
            rekening atau e-wallet berikut.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {jawaWeddingData.gifts.map(
            (gift, index) => (
              <div
                key={gift.id}
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <JawaGiftCard
                  gift={gift}
                />
              </div>
            ),
          )}
        </div>

        <div
          className="mt-12 text-center"
          data-aos="fade-up"
        >
          <Gift
            size={18}
            className="mx-auto text-[#B89558]"
          />

          <p className="mx-auto mt-5 max-w-lg font-serif text-xl italic leading-8 text-[#705440]">
            “Matur nuwun sanget atas doa,
            perhatian lan tanda tresna ingkang
            dipunparingaken.”
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#A0856B]">
            Terima kasih atas doa dan tanda kasih
            yang diberikan
          </p>
        </div>
      </div>
    </section>
  );
};

export default JawaGiftSection;