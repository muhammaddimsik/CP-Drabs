import React from "react";
import { MessageCircle } from "lucide-react";

import { weddingData } from "../data/weddingData";

const RsvpSection: React.FC = () => {
  const message = encodeURIComponent(
    `Assalamu'alaikum, saya ingin mengkonfirmasi kehadiran pada acara pernikahan ${weddingData.groom.name} & ${weddingData.bride.name}.`,
  );

  const whatsappUrl = `https://wa.me/${weddingData.whatsapp}?text=${message}`;

  return (
    <section id="rsvp" className="px-5 py-10">
      <div
        data-aos="fade-up"
        className="mx-auto max-w-2xl rounded-[32px] bg-white p-8 text-center shadow-[0_15px_50px_rgba(0,0,0,0.04)] md:p-12"
      >
        <p className="text-[10px] tracking-[0.35em] text-[#b18b69]">RSVP</p>

        <h2 className="mt-3 font-serif text-4xl text-stone-800">
          Konfirmasi Kehadiran
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-stone-500">
          Kehadiran dan doa restu Anda merupakan kebahagiaan yang sangat berarti
          bagi kami.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c49a73] px-8 py-3 text-xs font-medium tracking-wide text-white transition hover:bg-[#ad805c]"
        >
          <MessageCircle size={17} />
          KONFIRMASI VIA WHATSAPP
        </a>
      </div>
    </section>
  );
};

export default RsvpSection;
