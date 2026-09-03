import React from "react";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Navigation,
} from "lucide-react";

import { jawaWeddingData } from "../data/jawaWeddingData";

import JawaDivider from "./ornaments/JawaDivider";
import JawaGunungan from "./ornaments/JawaGunungan";
import JawaKawungPattern from "./ornaments/JawaKawungPattern";

const JawaEventSection: React.FC = () => {
  return (
    <section
      id="jawa-event"
      className="
        relative
        overflow-hidden
        bg-[#F5EFE3]
        px-5
        py-24
      "
    >
      {/* background ornament */}
      <div className="pointer-events-none absolute -left-16 top-20 h-72 w-72 opacity-[0.025]">
        <JawaKawungPattern className="h-full w-full text-[#5C3924]" />
      </div>

      <div className="pointer-events-none absolute -right-16 bottom-20 h-72 w-72 opacity-[0.025]">
        <JawaKawungPattern className="h-full w-full text-[#5C3924]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* HEADER */}
        <div
          className="text-center"
          data-aos="fade-up"
        >
          <JawaGunungan className="mx-auto h-16 w-11 text-[#B89558]" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.4em] text-[#9D7748]">
            Wanci & Papan
          </p>

          <h2 className="mt-3 font-serif text-5xl text-[#3E2B20]">
            Pawiwahan
          </h2>

          <JawaDivider />

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#78685B]">
            Dengan penuh hormat kami mengundang
            Bapak/Ibu/Saudara/i untuk hadir dalam
            rangkaian acara pernikahan kami.
          </p>
        </div>

        {/* EVENTS */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {jawaWeddingData.events.map(
            (event, index) => (
              <div
                key={event.title}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="
                  group
                  relative
                  bg-[#FBF7EF]
                  px-7
                  py-10
                  text-center
                  shadow-[0_18px_55px_rgba(66,44,29,0.07)]
                "
              >
                {/* outside frame */}
                <div className="pointer-events-none absolute inset-3 border border-[#B89558]/25" />

                {/* corner ornaments */}
                <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#B89558]" />

                <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-[#B89558]" />

                <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[#B89558]" />

                <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#B89558]" />

                <div className="relative z-10">
                  <JawaGunungan className="mx-auto h-12 w-8 text-[#B89558]" />

                  <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-[#9D7748]">
                    Acara
                  </p>

                  <h3 className="mt-2 font-serif text-4xl text-[#3D2A1F]">
                    {event.title}
                  </h3>

                  <div className="mx-auto my-7 flex items-center justify-center gap-2">
                    <div className="h-px w-10 bg-[#B89558]/40" />

                    <div className="h-1.5 w-1.5 rotate-45 bg-[#B89558]" />

                    <div className="h-px w-10 bg-[#B89558]/40" />
                  </div>

                  <div className="space-y-5 text-sm text-[#756457]">
                    <div className="flex flex-col items-center">
                      <CalendarDays
                        size={17}
                        className="mb-2 text-[#9A734D]"
                      />

                      <span>{event.date}</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Clock3
                        size={17}
                        className="mb-2 text-[#9A734D]"
                      />

                      <span>{event.time}</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <MapPin
                        size={17}
                        className="mb-2 text-[#9A734D]"
                      />

                      <p className="font-medium text-[#49362A]">
                        {event.place}
                      </p>

                      <p className="mt-1 max-w-[280px] leading-6 text-[#857469]">
                        {event.address}
                      </p>
                    </div>
                  </div>

                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      border
                      border-[#A77E52]
                      px-6
                      py-3
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-[#815F3E]
                      transition
                      duration-300
                      hover:bg-[#8A633E]
                      hover:text-white
                    "
                  >
                    <Navigation size={14} />

                    Pituduh Lokasi
                  </a>
                </div>
              </div>
            ),
          )}
        </div>

        {/* closing phrase */}
        <div
          className="mt-14 text-center"
          data-aos="fade-up"
        >
          <p className="font-serif text-xl italic text-[#715541]">
            “Rawuhipun panjenengan minangka
            kabingahan tumrap kula sakulawarga.”
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#A0856B]">
            Kehadiran Anda merupakan kebahagiaan bagi
            keluarga kami
          </p>
        </div>
      </div>
    </section>
  );
};

export default JawaEventSection;