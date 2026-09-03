import React, { useState } from "react";
import {
  X,
  ZoomIn,
} from "lucide-react";

import { jawaWeddingData } from "../data/jawaWeddingData";

import JawaDivider from "./ornaments/JawaDivider";
import JawaGunungan from "./ornaments/JawaGunungan";

const JawaGallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  return (
    <>
      <section
        id="jawa-gallery"
        className="bg-[#3A281D] px-5 py-24 text-[#F8F0E4]"
      >
        <div className="mx-auto max-w-5xl">
          <div
            className="text-center"
            data-aos="fade-up"
          >
            <JawaGunungan className="mx-auto h-16 w-11 text-[#D3B273]" />

            <p className="mt-5 text-[9px] uppercase tracking-[0.4em] text-[#D0B27A]">
              Potret Katresnan
            </p>

            <h2 className="mt-3 font-serif text-5xl text-[#FFF7EB]">
              Galeri
            </h2>

            <JawaDivider />

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#D3C4B6]">
              Beberapa potret yang menjadi bagian dari
              perjalanan dan kenangan kami.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {jawaWeddingData.gallery.map(
              (image, index) => {
                const layout =
                  index === 0
                    ? "col-span-2 row-span-2"
                    : index === 3
                      ? "col-span-2"
                      : "";

                const height =
                  index === 0
                    ? "h-[420px] md:h-[520px]"
                    : index === 3
                      ? "h-56 md:h-64"
                      : "h-52 md:h-64";

                return (
                  <button
                    key={image}
                    type="button"
                    onClick={() =>
                      setSelectedImage(image)
                    }
                    data-aos="zoom-in"
                    data-aos-delay={index * 60}
                    className={`
                      group
                      relative
                      overflow-hidden
                      ${layout}
                    `}
                  >
                    <img
                      src={image}
                      alt={`Galeri pernikahan ${index + 1}`}
                      className={`
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                        ${height}
                      `}
                    />

                    <div className="pointer-events-none absolute inset-2 border border-[#D7B87B]/30" />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/30">
                      <ZoomIn className="scale-75 text-white opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
                    </div>
                  </button>
                );
              },
            )}
          </div>

          <div
            className="mt-12 flex items-center justify-center gap-3"
            data-aos="fade-up"
          >
            <div className="h-px w-14 bg-[#D0AC6C]/30" />

            <div className="h-2 w-2 rotate-45 border border-[#D0AC6C]" />

            <div className="h-px w-14 bg-[#D0AC6C]/30" />
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-[#1C120D]/95 p-5">
          <button
            type="button"
            onClick={() =>
              setSelectedImage(null)
            }
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-[#D3B273]/40 text-[#F4E7D3]"
          >
            <X size={20} />
          </button>

          <div className="relative max-h-[90vh] max-w-5xl">
            <div className="pointer-events-none absolute inset-3 z-10 border border-[#D3B273]/40" />

            <img
              src={selectedImage}
              alt="Wedding gallery"
              className="max-h-[90vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default JawaGallerySection;