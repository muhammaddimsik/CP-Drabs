import React from "react";
import { Instagram } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { TWeddingPerson } from "../types/weddingType";

const PersonCard = ({ person }: { person: TWeddingPerson }) => {
  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <div className="mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-52 md:w-52">
        <img
          src={person.photo}
          alt={person.fullName}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="font-serif text-2xl text-stone-800">{person.fullName}</h3>

      <p className="mt-2 max-w-[260px] text-xs leading-6 text-stone-500">
        {person.parentText}
      </p>

      {person.instagram && (
        <a
          href={person.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition hover:bg-stone-800 hover:text-white"
        >
          <Instagram size={16} />
        </a>
      )}
    </div>
  );
};

const CoupleSection: React.FC = () => {
  const { groom, bride } = weddingData;

  return (
    <section id="couple" className="px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center" data-aos="fade-up">
          <p className="text-[10px] tracking-[0.35em] text-[#b18b69]">
            THE COUPLE
          </p>

          <h2 className="mt-3 font-serif text-4xl text-stone-800">
            {groom.name} & {bride.name}
          </h2>
        </div>

        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="w-full" data-aos="fade-right">
            <PersonCard person={groom} />
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c49a73] font-serif text-xl text-white">
            &
          </div>

          <div className="w-full" data-aos="fade-left">
            <PersonCard person={bride} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
