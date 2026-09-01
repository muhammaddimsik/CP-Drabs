import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

import { weddingData } from "../data/weddingData";

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center" data-aos="fade-up">
            <p className="text-[10px] tracking-[0.35em] text-[#b18b69]">
              OUR MOMENTS
            </p>

            <h2 className="mt-3 font-serif text-4xl text-stone-800">Gallery</h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {weddingData.gallery.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setSelectedImage(image)}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 ? "row-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Wedding gallery ${index + 1}`}
                  className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                    index === 0 ? "h-full min-h-[320px]" : "h-40 md:h-56"
                  }`}
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
                  <ZoomIn className="scale-75 text-white opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-5">
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
          >
            <X size={20} />
          </button>

          <img
            src={selectedImage}
            alt="Wedding"
            className="max-h-[90vh] max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;
