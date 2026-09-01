import React from "react";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

import { weddingData } from "../data/weddingData";

const EventSection: React.FC = () => {
  return (
    <section id="event" className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center" data-aos="fade-up">
          <p className="text-[10px] tracking-[0.35em] text-[#b18b69]">
            SAVE THE DATE
          </p>

          <h2 className="mt-3 font-serif text-4xl text-stone-800">
            Akad & Resepsi
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {weddingData.events.map((event, index) => (
            <div
              key={event.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-3xl bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)]"
            >
              <CalendarDays size={26} className="text-[#b98c67]" />

              <h3 className="mt-5 font-serif text-3xl text-stone-800">
                {event.title}
              </h3>

              <div className="mt-7 space-y-5 text-sm text-stone-600">
                <div className="flex gap-3">
                  <CalendarDays size={18} className="mt-0.5 shrink-0" />

                  <span>{event.date}</span>
                </div>

                <div className="flex gap-3">
                  <Clock3 size={18} className="mt-0.5 shrink-0" />

                  <span>{event.time}</span>
                </div>

                <div className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0" />

                  <div>
                    <p className="font-medium text-stone-800">{event.place}</p>

                    <p className="mt-1 leading-6">{event.address}</p>
                  </div>
                </div>
              </div>

              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#c49a73] px-7 py-3 text-xs font-medium tracking-wide text-white transition hover:bg-[#ad805c]"
              >
                LIHAT LOKASI
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
