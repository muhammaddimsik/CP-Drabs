import React from "react";
import { weddingData } from "../data/weddingData";

const ClosingSection: React.FC = () => {
  const { groom, bride, closingImage } = weddingData;

  return (
    <section className="px-5 pb-32 pt-16">
      <div
        data-aos="fade-up"
        className="relative mx-auto min-h-[520px] max-w-4xl overflow-hidden rounded-[36px]"
        style={{
          backgroundImage: `url(${closingImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex min-h-[520px] flex-col items-center justify-center px-8 text-center text-white">
          <p className="max-w-xl text-sm leading-7 text-white/90">
            Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dan memberikan doa restu kepada kami.
          </p>

          <p className="mt-7 font-serif text-4xl italic text-[#e8c9ab]">
            Terima Kasih
          </p>

          <h2 className="mt-4 font-serif text-4xl">
            {groom.name} & {bride.name}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
