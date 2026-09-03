import React, {
  useEffect,
  useState,
} from "react";

import { jawaWeddingData } from "../data/jawaWeddingData";

import JawaDivider from "./ornaments/JawaDivider";
import JawaKawungPattern from "./ornaments/JawaKawungPattern";

interface TCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getCountdown = (): TCountdown => {
  const targetDate = new Date(
    jawaWeddingData.weddingDate,
  ).getTime();

  const now = new Date().getTime();

  const distance = Math.max(
    targetDate - now,
    0,
  );

  return {
    days: Math.floor(
      distance / (1000 * 60 * 60 * 24),
    ),

    hours: Math.floor(
      (distance / (1000 * 60 * 60)) % 24,
    ),

    minutes: Math.floor(
      (distance / (1000 * 60)) % 60,
    ),

    seconds: Math.floor(
      (distance / 1000) % 60,
    ),
  };
};

const JawaCountdownSection: React.FC = () => {
  const [countdown, setCountdown] =
    useState<TCountdown>(getCountdown());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const items = [
    {
      value: countdown.days,
      label: "Dinten",
      translation: "Hari",
    },
    {
      value: countdown.hours,
      label: "Jam",
      translation: "Jam",
    },
    {
      value: countdown.minutes,
      label: "Menit",
      translation: "Menit",
    },
    {
      value: countdown.seconds,
      label: "Detik",
      translation: "Detik",
    },
  ];

  return (
    <section
      id="jawa-countdown"
      className="
        relative
        overflow-hidden
        bg-[#3A281D]
        px-5
        py-20
        text-[#F5EBDD]
      "
    >
      {/* subtle kawung */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <JawaKawungPattern className="h-full w-full text-[#E3C283]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div
          className="text-center"
          data-aos="fade-up"
        >
          <p className="text-[9px] uppercase tracking-[0.4em] text-[#D1AF72]">
            Ngentosi Dinten Bahagia
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#FFF7EA] md:text-5xl">
            Menuju Pawiwahan
          </h2>

          <JawaDivider />

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#D8CABB]">
            Menghitung hari menuju dimulainya perjalanan
            baru kami.
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            grid-cols-4
            border-y
            border-[#D0AC6C]/30
          "
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {items.map((item, index) => (
            <div
              key={item.label}
              className={`
                relative
                px-2
                py-8
                text-center
                ${
                  index !== items.length - 1
                    ? "border-r border-[#D0AC6C]/20"
                    : ""
                }
              `}
            >
              <p className="font-serif text-4xl text-[#E6C88D] md:text-6xl">
                {String(item.value).padStart(
                  2,
                  "0",
                )}
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#E9DDD0]">
                {item.label}
              </p>

              <p className="mt-1 hidden text-[8px] text-[#AFA093] sm:block">
                {item.translation}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-9 flex items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="h-px w-10 bg-[#D0AC6C]/40" />

          <div className="h-2 w-2 rotate-45 border border-[#D0AC6C]" />

          <div className="h-px w-10 bg-[#D0AC6C]/40" />
        </div>
      </div>
    </section>
  );
};

export default JawaCountdownSection;