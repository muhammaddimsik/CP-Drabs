import React, { useState } from "react";
import { Check, Copy, CreditCard, Gift, Wallet } from "lucide-react";

import { weddingData } from "../data/weddingData";
import { TWeddingGift } from "../types/weddingType";

const GiftCard = ({ gift }: { gift: TWeddingGift }) => {
  const [copied, setCopied] = useState(false);

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
    <div className="relative overflow-hidden rounded-3xl border border-stone-100 bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">
      {/* dekorasi */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#c49a73]/5" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c49a73]/10 text-[#b28662]">
            {gift.type === "bank" ? (
              <CreditCard size={20} />
            ) : (
              <Wallet size={20} />
            )}
          </div>

          <span className="rounded-full bg-stone-100 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-stone-500">
            {gift.type === "bank" ? "Bank Transfer" : "E-Wallet"}
          </span>
        </div>

        <p className="mt-7 text-xs uppercase tracking-[0.25em] text-stone-400">
          {gift.provider}
        </p>

        <p className="mt-2 font-serif text-3xl tracking-wide text-stone-800">
          {gift.accountNumber}
        </p>

        <div className="mt-5 border-t border-dashed border-stone-200 pt-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-stone-400">
            Atas Nama
          </p>

          <p className="mt-1 text-sm font-medium text-stone-700">
            {gift.accountName}
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-[#c49a73] px-5 py-3 text-xs font-medium tracking-wide text-[#a77b58] transition hover:bg-[#c49a73] hover:text-white"
        >
          {copied ? (
            <>
              <Check size={15} />
              TERSALIN
            </>
          ) : (
            <>
              <Copy size={15} />
              SALIN NOMOR
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const GiftSection: React.FC = () => {
  return (
    <section id="gift" className="px-5 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center" data-aos="fade-up">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c49a73]/10 text-[#b28662]">
            <Gift size={20} />
          </div>

          <p className="mt-5 text-[10px] tracking-[0.35em] text-[#b18b69]">
            WEDDING GIFT
          </p>

          <h2 className="mt-3 font-serif text-4xl text-stone-800">
            Tanda Kasih
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-500">
            Doa restu Anda merupakan hadiah terindah bagi kami. Namun apabila
            Anda ingin memberikan tanda kasih, dapat disampaikan melalui
            rekening atau e-wallet berikut.
          </p>

          <div className="mx-auto mt-7 h-px w-12 bg-[#c49a73]" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {weddingData.gifts.map((gift, index) => (
            <div key={gift.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <GiftCard gift={gift} />
            </div>
          ))}
        </div>

        <p
          className="mx-auto mt-10 max-w-lg text-center font-serif text-lg italic leading-7 text-stone-500"
          data-aos="fade-up"
        >
          Terima kasih atas doa, perhatian, dan tanda kasih yang diberikan
          kepada kami.
        </p>
      </div>
    </section>
  );
};

export default GiftSection;
