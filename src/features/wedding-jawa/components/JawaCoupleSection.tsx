import React from "react";
import { Instagram } from "lucide-react";

import { jawaWeddingData } from "../data/jawaWeddingData";
import { TJawaWeddingPerson } from "../types/jawaWeddingType";

import JawaDivider from "./ornaments/JawaDivider";
import JawaGunungan from "./ornaments/JawaGunungan";
import JawaKawungPattern from "./ornaments/JawaKawungPattern";

interface PersonProps {
  person: TJawaWeddingPerson;
  label: string;
}

const JawaPersonCard: React.FC<PersonProps> = ({
  person,
  label,
}) => {
  return (
    <div className="relative mx-auto max-w-sm text-center">
      {/* ornament background */}
      <div className="pointer-events-none absolute -left-8 top-10 h-32 w-32 opacity-[0.045]">
        <JawaKawungPattern className="h-full w-full text-[#5C3924]" />
      </div>

      <div className="pointer-events-none absolute -right-8 bottom-28 h-28 w-28 opacity-[0.045]">
        <JawaKawungPattern className="h-full w-full text-[#5C3924]" />
      </div>

      <p className="relative z-10 text-[9px] uppercase tracking-[0.35em] text-[#9D7748]">
        {label}
      </p>

      {/* PHOTO ARCH */}
      <div className="relative mx-auto mt-6 w-[230px] md:w-[270px]">
        {/* outer border */}
        <div
          className="
            absolute
            -inset-3
            rounded-t-[120px]
            border
            border-[#B89558]/40
          "
        />

        {/* second border */}
        <div
          className="
            absolute
            -inset-[6px]
            rounded-t-[115px]
            border
            border-[#B89558]/20
          "
        />

        <div
          className="
            relative
            aspect-[3/4]
            overflow-hidden
            rounded-t-[110px]
            bg-[#E9DFD0]
          "
        >
          <img
            src={person.photo}
            alt={person.fullName}
            className="h-full w-full object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2E1F16]/25 via-transparent to-transparent" />
        </div>

        {/* center ornament */}
        <div
          className="
            absolute
            -bottom-5
            left-1/2
            flex h-10 w-10
            -translate-x-1/2
            rotate-45
            items-center
            justify-center
            border
            border-[#B89558]
            bg-[#F5EFE3]
          "
        >
          <div className="h-2 w-2 bg-[#B89558]" />
        </div>
      </div>

      <div className="relative z-10 mt-10">
        <h3 className="font-serif text-4xl text-[#3E2B20]">
          {person.fullName}
        </h3>

        <div className="mx-auto mt-4 h-px w-10 bg-[#B89558]/60" />

        <p className="mx-auto mt-5 max-w-[280px] text-sm leading-7 text-[#786658]">
          {person.parentText}
        </p>

        {person.instagram && (
          <a
            href={person.instagram}
            target="_blank"
            rel="noreferrer"
            className="
              mx-auto
              mt-5
              flex
              w-fit
              items-center
              gap-2
              border-b
              border-[#B89558]/40
              pb-1
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-[#8C6948]
              transition
              hover:border-[#8C6948]
            "
          >
            <Instagram size={14} />

            Instagram
          </a>
        )}
      </div>
    </div>
  );
};

const JawaCoupleSection: React.FC = () => {
  const { groom, bride } = jawaWeddingData;

  return (
    <section
      id="jawa-couple"
      className="relative overflow-hidden bg-[#FAF6EE] px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#B89558]/20" />

      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <div
          className="text-center"
          data-aos="fade-up"
        >
          <JawaGunungan className="mx-auto h-14 w-10 text-[#B89558]" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.4em] text-[#9D7748]">
            Sang Temanten
          </p>

          <h2 className="mt-3 font-serif text-5xl text-[#3E2B20]">
           {bride.name}  & {groom.name}
          </h2>

          <JawaDivider />

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#79695C]">
            Dengan memohon rahmat dan ridha Allah SWT,
            perkenankan kami memperkenalkan kedua
            mempelai yang akan melangsungkan
            pernikahan.
          </p>
        </div>

        {/* COUPLE */}
        <div className="mt-16 grid gap-20 md:grid-cols-2 md:gap-16">
          <div
            data-aos="fade-right"
            data-aos-duration="1100"
          >
          <JawaPersonCard
            person={bride}
            label="Putri"
          />
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1100"
          >
            <JawaPersonCard
              person={groom}
              label="Putra"
            />
          </div>
        </div>

        {/* bottom ornament */}
        <div
          className="mt-20 text-center"
          data-aos="fade-up"
        >
          <p className="font-serif text-2xl italic text-[#8E704F]">
            “Kalih manah, dados setunggal lampah.”
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#A68C70]">
            Dua hati dalam satu perjalanan
          </p>
        </div>
      </div>
    </section>
  );
};

export default JawaCoupleSection;