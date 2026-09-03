import React from "react";
import { Heart } from "lucide-react";

import { jawaWeddingData } from "../data/jawaWeddingData";

import JawaDivider from "./ornaments/JawaDivider";
import JawaGunungan from "./ornaments/JawaGunungan";
import JawaKawungPattern from "./ornaments/JawaKawungPattern";

const JawaStorySection: React.FC = () => {
  return (
    <section
      id="jawa-story"
      className="relative overflow-hidden bg-[#FAF6EE] px-5 py-24"
    >
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <JawaKawungPattern className="h-full w-full text-[#5C3924]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <div
          className="text-center"
          data-aos="fade-up"
        >
          <JawaGunungan className="mx-auto h-16 w-11 text-[#B89558]" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.4em] text-[#9D7748]">
            Lelakon Katresnan
          </p>

          <h2 className="mt-3 font-serif text-5xl text-[#3E2B20]">
            Kisah Katresnan
          </h2>

          <JawaDivider />

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#78685B]">
            Setiap pertemuan memiliki cerita.
            Inilah sebagian kecil perjalanan yang
            membawa kami menuju hari bahagia.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          <div className="absolute left-[18px] top-0 h-full w-px bg-[#B89558]/30 md:left-1/2" />

          <div className="space-y-16">
            {jawaWeddingData.stories.map(
              (story, index) => {
                const isLeft =
                  index % 2 === 0;

                return (
                  <div
                    key={`${story.year}-${story.title}`}
                    className="relative pl-14 md:grid md:grid-cols-2 md:pl-0"
                  >
                    {/* timeline point */}
                    <div
                      className="
                        absolute
                        left-[11px]
                        top-2
                        z-20
                        h-4
                        w-4
                        rotate-45
                        border
                        border-[#B89558]
                        bg-[#FAF6EE]
                        md:left-1/2
                        md:-translate-x-1/2
                      "
                    >
                      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-[#B89558]" />
                    </div>

                    <div
                      data-aos={
                        isLeft
                          ? "fade-right"
                          : "fade-left"
                      }
                      className={`
                        ${
                          isLeft
                            ? "md:pr-14 md:text-right"
                            : "md:col-start-2 md:pl-14"
                        }
                      `}
                    >
                      {story.image && (
                        <div
                          className={`
                            mb-6 overflow-hidden
                            ${
                              isLeft
                                ? "md:ml-auto"
                                : ""
                            }
                          `}
                        >
                          <div className="relative">
                            <div className="absolute inset-2 z-10 border border-[#E3C38A]/60" />

                            <img
                              src={story.image}
                              alt={story.title}
                              className="h-64 w-full object-cover md:max-w-sm"
                            />
                          </div>
                        </div>
                      )}

                      <p className="font-serif text-2xl text-[#B89558]">
                        {story.year}
                      </p>

                      <h3 className="mt-1 font-serif text-3xl text-[#3E2B20]">
                        {story.title}
                      </h3>

                      <div
                        className={`
                          mt-4 h-px w-10 bg-[#B89558]/50
                          ${
                            isLeft
                              ? "md:ml-auto"
                              : ""
                          }
                        `}
                      />

                      <p className="mt-4 text-sm leading-7 text-[#756457]">
                        {story.description}
                      </p>
                    </div>
                  </div>
                );
              },
            )}
          </div>

          <div className="relative z-20 mt-14 flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF6EE]">
              <Heart
                size={18}
                className="fill-[#B89558] text-[#B89558]"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-12 text-center"
          data-aos="fade-up"
        >
          <p className="font-serif text-xl italic text-[#755842]">
            “Saben crita nggawa kita luwih cedhak
            marang dina iki.”
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#A0856B]">
            Setiap cerita membawa kami semakin dekat
            pada hari ini
          </p>
        </div>
      </div>
    </section>
  );
};

export default JawaStorySection;