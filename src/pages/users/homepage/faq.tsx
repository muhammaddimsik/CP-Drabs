import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apa saja layanan yang Drabs tawarkan dalam pengembangan web?",
    answer:
      "Kami menawarkan layanan pengembangan web yang mencakup desain web responsif, pengembangan frontend dan backend, integrasi API, e-commerce, serta pemeliharaan dan dukungan berkelanjutan. Kami menggunakan teknologi terkini seperti React.js dan Node.js untuk memastikan website Anda cepat, aman, dan skalabel.",
  },
  {
    question: "Apakah Drabs menyediakan layanan pengembangan aplikasi mobile?",
    answer:
      "Ya, kami menyediakan layanan pengembangan aplikasi mobile untuk platform iOS dan Android. Tim kami berpengalaman dalam menggunakan teknologi cross-platform seperti React Native untuk memastikan aplikasi mobile Anda dapat diakses oleh pengguna di berbagai perangkat.",
  },
  {
    question: "Apa saja yang termasuk dalam layanan konsultasi IT",
    answer:
      "Layanan konsultasi IT kami meliputi analisis kebutuhan bisnis, perencanaan strategi teknologi, audit keamanan sistem, optimasi performa aplikasi, migrasi cloud, dan implementasi sistem ERP. Kami bekerja sama dengan Anda untuk mengidentifikasi dan menerapkan solusi IT yang paling efektif dan efisien untuk bisnis Anda.",
  },
  {
    question: "Berapa lama pengerjaan setiap sistem pada Drabs?",
    answer:
      "Waktu penyelesaian proyek bervariasi tergantung pada kompleksitas dan skala proyek tersebut. Untuk proyek sederhana, seperti website portofolio, biasanya memakan waktu sekitar 4-6 minggu. Proyek yang lebih kompleks, seperti aplikasi e-commerce atau sistem manajemen perusahaan, dapat memakan waktu beberapa bulan. Kami akan memberikan estimasi waktu yang lebih akurat setelah melakukan analisis kebutuhan proyek Anda.",
  },
  {
    question: "Bagaimana proses pengembangan proyek di perusahaan Drabs?",
    answer:
      "Proses pengembangan kami mengikuti metodologi Agile yang terdiri dari beberapa tahap, yaitu perencanaan, desain, pengembangan, pengujian, dan peluncuran. Kami berkolaborasi erat dengan klien selama setiap tahap untuk memastikan proyek berjalan sesuai dengan visi dan kebutuhan Anda.",
  },
];

const Faq: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto space-y-10">
        <div className="flex justify-center">
          <img
            src="/question-img.png"
            alt="question-img"
            className="md:w-1/3 w-2/3"
          />
        </div>
        <div className="my-4 space-y-1 md:w-1/2 mx-auto" id="faq">
          <h2 className="text-cdark text-center md:text-5xl text-4xl inter font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-cdark text-center">
            Temukan jawaban atas pertanyaan yang sering diajukan mengenai
            layanan kami.
          </p>
        </div>
        <Accordion type="single" collapsible className="">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                value={String(i)}
                className="border rounded-xl px-6 border-slate-500"
                key={i}
              >
                <AccordionTrigger className="text-start">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed w-full">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
