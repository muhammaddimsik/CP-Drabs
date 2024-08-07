import Footer from "@/components/Footer";
import HeaderLight from "@/components/HeaderLight";
import Seo from "@/components/Seo";
import React from "react";

const lists = [
  {
    id: 1,
    paragraph:
      "Membantu mitra dalam pemecahan masalah melalui produk aplikasi yang selalu mengikuti perkembangan teknologi digital",
  },
  {
    id: 2,
    paragraph:
      "Membangun sumber daya manusia yang selalu siap akan tantangan era society 5.0",
  },
  {
    id: 3,
    paragraph: "Menciptakan produk baru yang berbeda, berguna dan berkualitas",
  },
];

const chooseus = [
  {
    id: 1,
    paragraph:
      "Kami selalu menggunakan teknologi terbaru dan terbaik untuk memaksimalkan kualitas dan performa setiap proyek yang kami kerjakan.",
  },
  {
    id: 2,
    paragraph:
      "Bekerja dengan teknologi terbaru dan memberikan solusi unik dan kreatif dalam pengembangan perangkat lunak.",
  },
  {
    id: 3,
    paragraph:
      "Pemahaman yang baik terhadap kebutuhan bisnis Anda dan fokus pada hasil untuk memberikan manfaat bagi Anda",
  },
  {
    id: 4,
    paragraph:
      "Kami mampu menghasilkan produk dengan kualitas yang baik, tepat waktu, dan sesuai dengan anggaran yang telah ditentukan.",
  },
  {
    id: 5,
    paragraph:
      "Berkomunikasi secara efektif dengan Anda sepanjang tahapan pengembangan perangkat lunak.",
  },
];

const index: React.FC = () => {
  return (
    <>
      <Seo
        title="Tentang Kami - Drabsky"
        description="Perusahaan kami berfokus pada pengembangan perangkat lunak dan layanan konsultasi IT. "
        type="website"
        name="Drabsky"
        image="/logo.png"
        url="https://www.drabsky.com/about-us"
      />
      <div className="w-full">
        <HeaderLight isOpen={false} />
        <div className="w-full">
          <div className="container mx-auto">
            <section className="pt-10 md:pb-20 pb-4">
              <div className="flex flex-col items-center">
                <p className="border rounded-full py-1 px-3 text-center text-xs text-white inline backdrop-blur-sm bg-gradient-to-r from-purple-500 to-pink-500">
                  Who We Are!🔥
                </p>
                <div className="md:w-1/2 mx-auto py-4">
                  <h1 className="text-cdark md:text-5xl text-4xl text-center anton">
                    Get to know our company
                    <span className="text-cprimary"> more deeply</span>
                  </h1>
                </div>
              </div>
              <div className="md:flex justify-center gap-2 text-center md:text-start">
                <p className="text-cdark">Web Development</p>
                <p className="text-cdark md:inline hidden">|</p>
                <p className="text-cdark">Mobile Apps</p>
                <p className="text-cdark md:inline hidden">|</p>
                <p className="text-cdark">IT Consultan</p>
              </div>
            </section>
          </div>
        </div>

        <section>
          <div className="container mx-auto py-12 px-6 md:px-0">
            <h2 className="text-4xl font-semibold text-center">
              About Our Business
            </h2>
            <p className="text-center mt-4">
              Perusahaan kami berfokus pada pengembangan perangkat lunak dan
              layanan konsultasi IT. Kami berkomitmen memberikan solusi
              teknologi terbaik dengan pengembang ahli dan berpengalaman dalam
              teknologi terkini, serta selalu
              <span className="underline decoration-wavy decoration-[#608AEE] font-semibold">
                {" "}
                menghasilkan produk berkualitas, tepat waktu, dan sesuai
                anggaran.{" "}
              </span>{" "}
              Kami juga memberikan dukungan teknis dan perawatan untuk sistem
              perangkat lunak secara terus-menerus.
            </p>
          </div>
        </section>

        <section>
          <div className="container mx-auto py-6 md:py-12 px-6 md:px-0">
            <h2 className="text-4xl font-semibold">Why Choose Us?</h2>
            <div className="block md:flex items-center">
              <div className="w-full md:w-6/12">
                {chooseus.map((p) => (
                  <div key={p.id} className="flex gap-4 mt-4">
                    <img
                      src="/checklist.png"
                      alt="checklist"
                      className="h-6 w-6"
                    />
                    <p className="text-sm">{p.paragraph}</p>
                  </div>
                ))}
              </div>
              <div className="w-full md:w-6/12">
                <img src="/1.avif" alt="whychooseus" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto py-12 px-6 md:px-0">
            <div className="block md:flex">
              <h2 className="w-full md:w-5/12 text-4xl font-semibold mb-3">
                Our Vision and Mission
              </h2>
              <p className="w-full md:w-7/12 text-sm">
                Kami percaya bahwa setiap bisnis memiliki potensi untuk tumbuh
                dan berkembang dengan baik, dan itulah mengapa kami hadir untuk
                membantu perusahaan klien kami meraih keberhasilan yang lebih
                besar lagi. Berikut ini adalah visi dan misi perusahaan kami
                yang akan membimbing setiap langkah kami dalam memberikan
                layanan terbaik bagi klien kami.
              </p>
            </div>
            <div className="block md:flex mt-12">
              <div className="w-full md:w-5/12 mb-3">
                <h3 className="text-2xl font-semibold underline decoration-wavy decoration-[#608AEE]">
                  Vision
                </h3>
                <p className="text-sm mt-4 w-full md:w-3/4">
                  Membangun ekosistem digital melalui pengembangan perangkat
                  lunak teknologi informasi menuju era society 5.0
                </p>
              </div>
              <div className="w-full md:w-6/12">
                <h3 className="text-2xl font-semibold underline decoration-wavy decoration-[#608AEE]">
                  Mission
                </h3>
                {lists.map((p) => (
                  <div key={p.id} className="flex gap-4 mt-4">
                    <img
                      src="/checklist.png"
                      alt="checklist"
                      className="h-6 w-6"
                    />
                    <p className="text-sm">{p.paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default index;
