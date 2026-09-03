import React from "react";
import {
  MessageCircle,
  Send,
} from "lucide-react";

import { jawaWeddingData } from "../data/jawaWeddingData";

import JawaDivider from "./ornaments/JawaDivider";
import JawaGunungan from "./ornaments/JawaGunungan";

const JawaRsvpSection: React.FC = () => {
  const message = encodeURIComponent(
    `Assalamu'alaikum, saya ingin mengkonfirmasi kehadiran pada acara pernikahan ${jawaWeddingData.groom.name} & ${jawaWeddingData.bride.name}.`,
  );

  const whatsappUrl = `https://wa.me/${jawaWeddingData.whatsapp}?text=${message}`;

  return (
    <section
      id="jawa-rsvp"
      className="relative overflow-hidden bg-[#FAF6EE] px-5 py-24"
    >
      <div className="mx-auto max-w-3xl">
        <div
          className="text-center"
          data-aos="fade-up"
        >
          <JawaGunungan className="mx-auto h-16 w-11 text-[#B89558]" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.4em] text-[#9D7748]">
            Konfirmasi Rawuh
          </p>

          <h2 className="mt-3 font-serif text-5xl text-[#3E2B20]">
            RSVP
          </h2>

          <JawaDivider />

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#78685B]">
            Kehadiran Bapak/Ibu/Saudara/i merupakan
            suatu kehormatan dan kebahagiaan bagi
            kami.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="120"
          className="
            relative
            mx-auto
            mt-12
            max-w-xl
            bg-[#F5EFE3]
            px-7
            py-10
            text-center
            shadow-[0_18px_50px_rgba(58,40,29,0.06)]
          "
        >
          <div className="pointer-events-none absolute inset-3 border border-[#B89558]/30" />

          <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#B89558]" />

          <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-[#B89558]" />

          <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[#B89558]" />

          <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#B89558]" />

          <div className="relative z-10">
            <MessageCircle
              size={26}
              className="mx-auto text-[#9B724A]"
            />

            <h3 className="mt-5 font-serif text-3xl text-[#3E2B20]">
              Konfirmasi Kehadiran
            </h3>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#78685B]">
              Silakan mengkonfirmasi kehadiran melalui
              WhatsApp agar kami dapat mempersiapkan
              acara dengan lebih baik.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                border
                border-[#A77E52]
                bg-[#8A633E]
                px-7
                py-3
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white
                transition
                hover:bg-[#6F4D32]
              "
            >
              <Send size={14} />

              Konfirmasi via WhatsApp
            </a>
          </div>
        </div>

        <div
          className="mt-12 text-center"
          data-aos="fade-up"
        >
          <p className="font-serif text-xl italic text-[#735640]">
            “Rawuhipun panjenengan minangka berkah
            lan kabingahan tumrap kula sakulawarga.”
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#A0856B]">
            Kehadiran Anda merupakan berkah dan
            kebahagiaan bagi keluarga kami
          </p>
        </div>
      </div>
    </section>
  );
};

export default JawaRsvpSection;