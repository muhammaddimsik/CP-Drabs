import React from "react";
import { weddingData } from "../data/weddingData";

const QuoteSection: React.FC = () => {
  const { quote } = weddingData;

  return (
    <section id="home" className="px-6 py-20 text-center" data-aos="fade-up">
      <div className="mx-auto max-w-2xl">
        {quote.arabic && (
          <p className="mb-8 font-serif text-2xl text-[#9c7656]">
            {quote.arabic}
          </p>
        )}

        <p className="text-sm leading-7 text-stone-600 md:text-base">
          “{quote.text}”
        </p>

        <p className="mt-4 text-sm font-medium text-stone-700">
          ({quote.source})
        </p>

        <div className="mx-auto mt-8 h-px w-12 bg-[#c49a73]" />
      </div>
    </section>
  );
};

export default QuoteSection;
