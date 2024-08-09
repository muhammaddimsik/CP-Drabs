import Footer from "@/components/Footer";
import HeaderLight from "@/components/HeaderLight";
import Seo from "@/components/Seo";
import { Skeleton } from "@/components/ui/skeleton";
import { TPortfolio } from "@/lib/models";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataPortfolio, setDataPortfolio] = useState<TPortfolio[]>();

  const getPortfolio = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/portofolio`
      );
      setDataPortfolio(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  const location = useLocation();

  useEffect(() => {
    // Scroll ke elemen dengan ID yang sesuai dengan hash di URL
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, dataPortfolio]);

  return (
    <>
      <Seo
        title="Portfolio - Drabsky"
        description="PT Drabsky Technology telah bekerjasama dengan banyak mitra dan klien dalam berbagai project luar biasa."
        type="website"
        name="Drabsky"
        image="/logo.png"
        url="https://www.drabsky.com/portfolio"
      />
      <div className="w-full">
        <HeaderLight isOpen={false} />
        <div className="container mx-auto">
          <section
            className="pt-10 md:pb-20 pb-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex flex-col items-center">
              <p className="border rounded-full py-1 px-3 text-center text-xs text-white inline backdrop-blur-sm bg-gradient-to-r from-purple-500 to-pink-500">
                Our Portfolio!🔥
              </p>
              <div className="md:w-1/2 mx-auto py-4">
                <h1 className="text-cdark md:text-5xl text-4xl text-center anton">
                  Our Works &<span className="text-cprimary"> Portfolio</span>
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

        <section className="mb-20">
          <div className="container mx-auto">
            <div className="">
              {isLoading
                ? [1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="p-4">
                      <div className="space-y-2">
                        <Skeleton className="w-full h-72" />
                        <Skeleton className="w-full h-10" />
                        <Skeleton className="w-2/3 h-10" />
                      </div>
                    </div>
                  ))
                : dataPortfolio?.map((item) => (
                    <div
                      className="p-2 md:p-4 w-full"
                      key={item.id_portofolio}
                      id={String(item.id_portofolio)}
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="md:flex">
                        <div className="md:w-4/12 md:h-40">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="md:w-8/12 md:px-4 px-2 py-6">
                          <p className="font-semibold text-xl leading-relaxed">
                            {item.title}
                          </p>
                          <p className="text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <hr className="my-10" />
                    </div>
                  ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default index;
