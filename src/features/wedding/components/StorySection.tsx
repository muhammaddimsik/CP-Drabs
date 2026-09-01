import React from "react";
import { Heart } from "lucide-react";
import { weddingData } from "../data/weddingData";

const StorySection: React.FC = () => {
  return (
    <section id="story" className="px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center" data-aos="fade-up">
          <p className="text-[10px] tracking-[0.35em] text-[#b18b69]">
            OUR STORY
          </p>

          <h2 className="mt-3 font-serif text-4xl text-stone-800">
            Cerita Kami
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-stone-200 md:left-1/2" />

          <div className="space-y-12">
            {weddingData.stories.map((story, index) => (
              <div
                key={story.title}
                className="relative grid gap-6 pl-12 md:grid-cols-2 md:pl-0"
              >
                <div className="absolute left-[9px] top-3 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-[#c49a73] md:left-1/2 md:-translate-x-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                <div
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className={`${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  {story.image && (
                    <div className="mb-5 overflow-hidden rounded-2xl">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-52 w-full object-cover"
                      />
                    </div>
                  )}

                  <span className="font-serif text-xl text-[#a27b59]">
                    {story.year}
                  </span>

                  <h3 className="mt-1 font-serif text-2xl text-stone-800">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-stone-500">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Heart size={19} className="fill-[#c49a73] text-[#c49a73]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
