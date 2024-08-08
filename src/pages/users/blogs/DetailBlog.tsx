import Footer from "@/components/Footer";
import HeaderLight from "@/components/HeaderLight";
import Seo from "@/components/Seo";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/formatDate";
import { TArticles } from "@/lib/models";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailBlog: React.FC = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [detailBlog, setDetailBlog] = useState<TArticles>();

  const getDetailBlog = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/article/${params.id}`
      );
      setDetailBlog(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const [dataArticles, setDataArticles] = useState<TArticles[]>();
  const [isLoadingArticles, setIsLoadingArticles] = useState(false);
  const getDataArticles = async () => {
    setIsLoadingArticles(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/article?limit=9999&offset=0"`
      );
      setDataArticles(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingArticles(false);
    }
  };

  useEffect(() => {
    getDetailBlog();
    getDataArticles();
  }, [params.id]);

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Menghapus karakter khusus
      .replace(/\s+/g, "-") // Mengganti spasi dengan tanda hubung
      .replace(/-+/g, "-"); // Mengganti beberapa tanda hubung dengan satu
  };

  return (
    <>
      {detailBlog && (
        <Seo
          title={detailBlog.title}
          description={detailBlog.meta_description}
          type="article"
          name="Drabsky"
          image={detailBlog.image}
          url={`https://www.drabsky.com/blogs/detail/${params.slug}/${params.id}`}
        />
      )}
      <div className="w-full">
        <HeaderLight isOpen={false} />
        <div className="px-6 md:w-[700px] mx-auto md:mt-10 mt-4">
          {isLoading ? (
            <div className="space-y-4 mb-10">
              <div className="space-y-1">
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-2/3 h-10" />
              </div>
              <div className="space-y-2">
                <Skeleton className="w-1/2 h-6" />
                <Skeleton className="w-full h-6" />
              </div>
              <div className="space-y-4">
                <Skeleton className="w-full h-96" />
                <div className="space-y-1">
                  <Skeleton className="w-full h-6" />
                  <Skeleton className="w-2/3 h-6" />
                </div>
              </div>
            </div>
          ) : detailBlog ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="font-bold md:text-4xl text-3xl lora">
                  {detailBlog?.title}
                </h1>
                <p>{detailBlog?.meta_description}</p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="border p-1 rounded-full">
                    <img src="/logo.png" alt="drabsky" width={40} height={40} />
                  </div>
                  <p className="font-semibold">Drabs</p>
                </div>
                <p className="text-sm">{formatDate(detailBlog?.createdAt)}</p>
              </div>
              <hr />
              <div className="pt-6">
                <img
                  src={detailBlog?.image}
                  alt={detailBlog?.title}
                  className="w-full rounded-xl"
                />
              </div>
              {detailBlog && (
                <div className="leading-relaxed">
                  <div
                    dangerouslySetInnerHTML={{ __html: detailBlog.content }}
                  />
                  <div className="my-10">
                    <span className="py-2 px-6 bg-gray-100 rounded-full text-sm">
                      {detailBlog.categories?.name_categori}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p>Data Blog tidak ditemukan</p>
          )}
        </div>
        <div className="px-6 py-12">
          <div className="md:w-[700px] mx-auto">
            <p className="md:text-sm font-semibold">
              Berita Lainnya dari Drabs
            </p>
            <div className="flex flex-wrap justify-between mt-6">
              {isLoadingArticles
                ? [1, 2, 3, 4].map((item) => (
                    <div
                      className="w-full md:w-1/2 md:p-4 space-y-4"
                      key={item}
                    >
                      <Skeleton className="w-full h-44" />
                      <div className="space-y-1">
                        <Skeleton className="w-full h-6" />
                        <Skeleton className="w-2/3 h-6" />
                        <div className="">
                          <Skeleton className="w-full h-4" />
                        </div>
                      </div>
                    </div>
                  ))
                : dataArticles?.slice(0, 5).map((item) => (
                    <Link
                      to={`/blogs/detail/${createSlug(item.title)}/${
                        item.id_article
                      }`}
                      className="w-full md:w-1/2 md:p-4 py-4 md:py-4 space-y-4"
                      key={item.id_article}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <div className="space-y-2">
                        <div className="flex gap-2 items-center">
                          <div className="border p-1 rounded-full">
                            <img
                              src="/logo.png"
                              alt="drabsky"
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="text-sm">Drabs</p>
                        </div>
                        <div className="min-h-16">
                          <h3 className="line-clamp-2 font-semibold lora text-lg">
                            {item.title}
                          </h3>
                          <p className="line-clamp-1 text-sm text-gray-500">
                            {item.meta_description}
                          </p>
                        </div>
                        <hr />
                        <div className="flex gap-2">
                          <p className="text-xs text-gray-500">
                            {formatDate(item.createdAt)}
                          </p>
                          <p className="text-xs text-gray-500">||</p>
                          <p className="text-xs text-gray-500">
                            {item.categories?.name_categori}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DetailBlog;
