import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Faq from "./faq";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { TArticles, TClients, TPortfolio, TServices } from "@/lib/models";
import axios from "axios";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import HeaderLight from "@/components/HeaderLight";

const index: React.FC = () => {
  const [dataServices, setDataServices] = useState<TServices[]>();
  const [isLoadingServices, setIsLoadingServices] = useState<boolean>(false);

  const getServices = async () => {
    setIsLoadingServices(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/services`
      );
      setDataServices(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingServices(false);
    }
  };

  const [dataPortfolio, setDataPortfolio] = useState<TPortfolio[]>();
  const [isLoadingPortfolio, setIsLoadingPortfolio] = useState<boolean>(false);
  const getPortfolio = async () => {
    setIsLoadingPortfolio(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/portofolio`
      );
      setDataPortfolio(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingPortfolio(false);
    }
  };

  const [dataClient, setDataClient] = useState<TClients[]>();
  const [isLoadingClient, setIsLoadingClient] = useState<boolean>(false);

  const getClient = async () => {
    setIsLoadingClient(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/client`
      );
      setDataClient(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingClient(false);
    }
  };

  const [dataBlogs, setDataBlogs] = useState<TArticles[]>();
  const [isLoadingBlogs, setIsLoadingBlogs] = useState<boolean>(false);

  const getBlogs = async () => {
    setIsLoadingBlogs(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/article`
      );
      setDataBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingBlogs(false);
    }
  };

  useEffect(() => {
    getServices();
    getPortfolio();
    getClient();
    getBlogs();
  }, []);

  return (
    <>
      <Seo
        title="Drabsky Technology"
        description="Software House - Jasa Pembuatan Website dan Aplikasi Android"
        type="website"
        name="Drabsky"
        image="/logo.png"
        url="https://www.drabsky.com"
      />
      <div className="w-full">
        <HeaderLight isOpen={false} />

        <div className="w-full">
          <div className="container mx-auto">
            <section className="md:flex items-center gap-10 space-y-4 md:space-y-0">
              <div className="md:w-1/2 w-full md:space-y-4 space-y-2 mt-6 md:mt-0 flex flex-col items-center md:block">
                <p className="rounded-full py-1 px-3 text-sm text-white inline backdrop-blur-sm bg-gradient-to-r from-purple-500 to-pink-500">
                  Growth your business with us!🔥
                </p>
                <h1 className="text-cdark md:text-5xl text-4xl inter font-bold text-center md:text-start">
                  Transformasi Bisnis Dengan{" "}
                  <span className="text-cprimary">Inovasi Teknologi</span>
                </h1>
                <div className="md:flex gap-2 text-center md:text-start">
                  <p className="text-cdark">Web Development</p>
                  <p className="text-cdark md:inline hidden">|</p>
                  <p className="text-cdark">Mobile Apps</p>
                  <p className="text-cdark md:inline hidden">|</p>
                  <p className="text-cdark">IT Consultan</p>
                </div>
              </div>
              <div className="md:w-1/2 w-full flex justify-center">
                <img
                  src="/analytics.png"
                  alt="analytics"
                  className="md:w-full"
                />
              </div>
            </section>
          </div>
        </div>

        <section className="mt-20 bg-gray-100 py-20">
          <div className="container mx-auto">
            <div className="flex flex-col items-center">
              <p className="rounded-full py-1 px-3 text-center text-sm text-white inline backdrop-blur-sm bg-gradient-to-r from-purple-500 to-pink-500">
                Growth your business with us!🔥
              </p>
              <div className="md:w-2/3 mx-auto my-4 space-y-1">
                <h2 className="anton text-center md:text-5xl text-4xl font-bold inter">
                  Transformasi Bisnis Anda Dengan{" "}
                  <span className="text-cprimary">Expertise & Creativity</span>
                </h2>
              </div>
            </div>
            <div className="md:w-1/2 mx-auto">
              <p className="text-cdark text-center">
                Kami menghadirkan layanan yang menggabungkan kreativitas dan
                keahlian teknis untuk kemajuan bisnis Anda.
              </p>
            </div>
            <div className="flex flex-wrap justify-center mt-6">
              {isLoadingServices
                ? [1, 2, 3].map((item) => (
                    <div key={item} className="p-2 w-full md:w-4/12">
                      <Skeleton className="w-full h-52" />
                    </div>
                  ))
                : dataServices?.map((item) => (
                    <div key={item.id_service} className="p-2 w-full md:w-4/12">
                      <div className="bg-white rounded-lg p-6">
                        <div className="bg-cprimary/20 w-10 h-10 rounded-lg flex items-center justify-center">
                          <div
                            dangerouslySetInnerHTML={{ __html: item.icon }}
                          />
                        </div>
                        <div className="mt-4 space-y-1">
                          <h3 className="text-cdark font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-cdark text-sm">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto py-20">
          <div className="flex flex-col items-center">
            <p className="rounded-full py-1 px-3 text-center text-sm text-white inline backdrop-blur-sm bg-gradient-to-r from-purple-500 to-pink-500">
              Our Portfolio!🔥
            </p>
            <div className="my-4 md:w-2/3 mx-auto">
              <h2 className="text-[#0F2028] text-center md:text-5xl text-4xl inter font-bold">
                Our Works Experience
              </h2>
            </div>
          </div>
          <div className="md:w-1/2 mx-auto">
            <p className="text-cdark text-center">
              Lihat beberapa karya terbaik kami yang telah membantu klien
              mencapai tujuan bisnis mereka.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            {isLoadingPortfolio ? (
              [1, 2, 3].map((item) => (
                <div key={item} className="w-full space-y-2">
                  <Skeleton className="w-full h-32" />
                  <div className="space-y-1">
                    <Skeleton className="w-full h-10" />
                    <Skeleton className="w-2/3 h-10" />
                  </div>
                </div>
              ))
            ) : (
              <div className="md:flex flex-wrap">
                {dataPortfolio?.slice(0, 3).map((item) => (
                  <div className="md:w-4/12 w-full space-y-4 p-2">
                    <div className="bg-white rounded shadow-md">
                      <div className="w-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full md:h-56 object-cover rounded"
                        />
                      </div>
                      <div className="py-4 px-6">
                        <p className="font-semibold line-clamp-2">
                          {item.title}
                        </p>
                        <p className="line-clamp-2 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <Link
              to="/portfolio"
              className="flex gap-1 bg-cprimary hover:bg-[#0592c9] text-white py-3 px-6 rounded"
            >
              <p>Lihat lainnya</p>
              <ArrowRight className="w-4" />
            </Link>
          </div>
        </section>

        <section>
          <div className="container mx-auto my-20">
            <div className="my-4 space-y-1 md:w-5/12 mx-auto">
              <h2 className="text-cdark font-bold inter text-center md:text-5xl text-4xl">
                Our Client & Mitra
              </h2>
              <p className="text-cdark text-center">
                Bekerjasama dengan Drabs untuk mencapai kesuksesan bersama
              </p>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-4 mt-10">
              {isLoadingClient ? (
                <p>loading</p>
              ) : (
                dataClient?.map((item) => (
                  <div
                    key={item.id_client}
                    className="w-full md:w-auto flex justify-center md:block"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="md:w-full md:h-20 grayscale"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F8F8F8]">
          <div className="container mx-auto">
            <div className="flex flex-col items-center">
              <p className="border rounded-full py-1 px-3 text-center text-sm text-white inline backdrop-blur-sm bg-gradient-to-r from-purple-500 to-pink-500">
                Our Blogs!🔥
              </p>
              <div className="my-4 md:w-2/3 mx-auto">
                <h2 className="text-[#0F2028] text-center md:text-5xl text-4xl inter font-bold">
                  Tech Trend & Tips
                </h2>
              </div>
            </div>
            <div className="md:w-1/2 mx-auto">
              <p className="text-cdark text-center">
                Wawasan dan Tips Terbaik untuk Mengikuti Perkembangan Teknologi
              </p>
            </div>

            <div className="space-y-4 mt-10">
              {isLoadingBlogs ? (
                [1, 2, 3].map((item) => (
                  <div key={item} className="w-full space-y-2">
                    <Skeleton className="w-full h-32" />
                    <div className="space-y-1">
                      <Skeleton className="w-full h-10" />
                      <Skeleton className="w-2/3 h-10" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="md:flex">
                  {dataBlogs?.slice(0, 3).map((item) => (
                    <div className="md:w-4/12 w-full space-y-4 p-2">
                      <div className="bg-white rounded">
                        <div className="w-full">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full md:h-56 object-cover rounded"
                          />
                        </div>
                        <div className="py-4 px-6">
                          <p className="font-semibold line-clamp-2">
                            {item.title}
                          </p>
                          <div
                            className="line-clamp-2 text-sm"
                            dangerouslySetInnerHTML={{
                              __html: item.content,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <Link
                to="/blogs"
                className="flex gap-1 bg-cprimary hover:bg-[#0592c9] text-white py-3 px-6 rounded"
              >
                <p>Lihat berita lainnya</p>
                <ArrowRight className="w-4" />
              </Link>
            </div>
          </div>
        </section>

        <Faq />

        <Footer />
      </div>
    </>
  );
};

export default index;
