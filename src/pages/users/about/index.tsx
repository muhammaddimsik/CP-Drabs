import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
        <div className="bg-[url('/bg-home.png')] w-full">
          <div className="container mx-auto">
            <Header />
            <section className="pt-10 pb-20">
              <div className="flex flex-col items-center">
                <p className="border rounded-full py-1 px-3 text-center text-xs text-white inline backdrop-blur-sm bg-gradient-to-r from-purple-500 to-pink-500">
                  Who We Are!🔥
                </p>
                <div className="md:w-1/2 mx-auto py-4">
                  <h1 className="text-white md:text-5xl text-4xl text-center anton">
                    Get to know our company
                    <span className="text-[#EDFF71]"> more deeply</span>
                  </h1>
                </div>
              </div>
              <div className="md:flex justify-center gap-4">
                <p className="text-white text-sm text-center">
                  Web Development
                </p>
                <p className="text-white text-sm text-center md:inline hidden">
                  |
                </p>
                <p className="text-white text-sm text-center">Mobile Apps</p>
                <p className="text-white text-sm text-center md:inline hidden">
                  |
                </p>
                <p className="text-white text-sm text-center">IT Consultan</p>
              </div>
              <div className="flex gap-2 item-center justify-center mt-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=6281586915991&text=Halo Drabs! Saya ingin bertanya tentang pembuatan website.&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <button className="flex items-center gap-1 rounded-full py-3 px-6 bg-[#EDFF71] hover:bg-[#DBED5F]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.88595 7.16985C9.06891 7.17475 9.27175 7.18465 9.46474 7.61303C9.59271 7.89821 9.80829 8.42321 9.9839 8.85087C10.1206 9.18366 10.233 9.45751 10.2611 9.51356C10.3254 9.64156 10.365 9.78926 10.2809 9.96156C10.271 9.98188 10.2617 10.0013 10.2526 10.02C10.1852 10.16 10.1372 10.2597 10.0237 10.3899C9.97709 10.4435 9.9285 10.5022 9.88008 10.5607C9.79494 10.6636 9.71035 10.7658 9.63785 10.838C9.50924 10.9659 9.37563 11.1039 9.52402 11.3599C9.6725 11.6159 10.1919 12.4579 10.9587 13.1373C11.783 13.8712 12.4998 14.1805 12.8622 14.3368C12.9325 14.3672 12.9895 14.3918 13.0313 14.4126C13.2886 14.5406 13.4419 14.5209 13.5903 14.3486C13.7388 14.1762 14.2334 13.6001 14.4066 13.3441C14.5748 13.0881 14.7479 13.1275 14.9854 13.2161C15.2228 13.3047 16.4892 13.9251 16.7464 14.0531C16.7972 14.0784 16.8448 14.1012 16.8889 14.1224C17.0678 14.2082 17.1895 14.2665 17.2411 14.3535C17.3054 14.4618 17.3054 14.9739 17.0927 15.5746C16.8751 16.1752 15.8263 16.7513 15.3514 16.7956C15.3064 16.7999 15.2617 16.8053 15.2156 16.8108C14.7804 16.8635 14.228 16.9303 12.2596 16.1555C9.83424 15.2018 8.23322 12.8354 7.90953 12.357C7.88398 12.3192 7.86638 12.2932 7.85698 12.2806L7.8515 12.2733C7.70423 12.0762 6.80328 10.8707 6.80328 9.62685C6.80328 8.43682 7.38951 7.81726 7.65689 7.53467C7.67384 7.51676 7.6895 7.50021 7.70366 7.48494C7.94107 7.22895 8.21814 7.16495 8.39125 7.16495C8.56445 7.16495 8.73756 7.16495 8.88595 7.16985Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.18418 21.3314C2.10236 21.6284 2.37285 21.9025 2.6709 21.8247L7.27824 20.6213C8.7326 21.409 10.37 21.8275 12.0371 21.8275H12.0421C17.5281 21.8275 22 17.3815 22 11.9163C22 9.26735 20.966 6.77594 19.0863 4.90491C17.2065 3.03397 14.7084 2 12.042 2C6.55607 2 2.08411 6.44605 2.08411 11.9114C2.08348 13.65 2.5424 15.3582 3.41479 16.8645L2.18418 21.3314ZM4.86092 17.2629C4.96774 16.8752 4.91437 16.4608 4.71281 16.1127C3.97266 14.8348 3.58358 13.3855 3.58411 11.9114C3.58411 7.28158 7.37738 3.5 12.042 3.5C14.3119 3.5 16.4296 4.37698 18.0281 5.96805C19.6248 7.55737 20.5 9.66611 20.5 11.9163C20.5 16.5459 16.7068 20.3275 12.0421 20.3275H12.0371C10.6206 20.3275 9.22863 19.9718 7.99266 19.3023C7.65814 19.1211 7.26726 19.0738 6.89916 19.17L4.13676 19.8915L4.86092 17.2629Z"
                        fill="black"
                      />
                    </svg>
                    <p className="text-sm text-[#0F2028] font-medium">
                      Whatsapp
                    </p>
                  </button>
                </a>
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
