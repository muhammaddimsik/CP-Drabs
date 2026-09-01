import React, { useEffect, useState } from "react";
import { weddingData } from "../data/weddingData";

interface TCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getCountdown = (): TCountdown => {
  const target = new Date(weddingData.weddingDate).getTime();

  const distance = Math.max(target - new Date().getTime(), 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),

    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),

    minutes: Math.floor((distance / (1000 * 60)) % 60),

    seconds: Math.floor((distance / 1000) % 60),
  };
};

const CountdownSection: React.FC = () => {
  const [countdown, setCountdown] = useState<TCountdown>(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      value: countdown.days,
      label: "Hari",
    },
    {
      value: countdown.hours,
      label: "Jam",
    },
    {
      value: countdown.minutes,
      label: "Menit",
    },
    {
      value: countdown.seconds,
      label: "Detik",
    },
  ];

  return (
    <section className="px-5 py-14" data-aos="fade-up">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white px-6 py-10 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">
        <h2 className="text-center font-serif text-3xl text-stone-800">
          Menuju Hari Bahagia
        </h2>

        <div className="mt-9 grid grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.label}
              className={`text-center ${
                index !== items.length - 1 ? "border-r border-stone-200" : ""
              }`}
            >
              <p className="font-serif text-3xl text-stone-800 md:text-4xl">
                {item.value}
              </p>

              <p className="mt-2 text-[10px] text-stone-500 md:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
