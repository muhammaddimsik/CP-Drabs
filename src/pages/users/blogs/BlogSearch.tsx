import Footer from "@/components/Footer";
import HeaderLight from "@/components/HeaderLight";
import Seo from "@/components/Seo";
import ShareMedsos from "@/components/ShareMedsos";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/formatDate";
import { TArticles } from "@/lib/models";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const BlogSearch: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [isLoading, setIsLoading] = useState(false);
  const [dataBlogs, setDataBlogs] = useState<TArticles[]>();

  const getBlogSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/article?search=${query}`
      );
      setDataBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogSearch();
  }, [query]);

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Menghapus karakter khusus
      .replace(/\s+/g, "-") // Mengganti spasi dengan tanda hubung
      .replace(/-+/g, "-"); // Mengganti beberapa tanda hubung dengan satu
  };

  return (
    <>
      <Seo
        title="Blog's - Drabsky"
        description="Temukan perkembangan dan tips teknologi di blog Drab Sky Technology"
        type="website"
        name="Drabsky"
        image="/logo.png"
        url="https://www.drabsky.com/blogs"
      />
      <div className="w-full">
        <HeaderLight isOpen={true} />
        <div className="container mx-auto">
          <div className="mt-6 mb-10">
            {isLoading ? (
              [1, 2, 3, 4, 5].map((item) => (
                <div className="space-y-4" key={item}>
                  <div className="flex gap-2">
                    <div className="w-8/12 space-y-2">
                      <Skeleton className="w-full h-10" />
                      <Skeleton className="w-full h-6" />
                      <Skeleton className="w-2/3 h-6" />
                    </div>
                    <div className="w-4/12 flex justify-end">
                      <Skeleton className="w-full h-28" />
                    </div>
                  </div>
                  <div className="">
                    <Skeleton className="w-1/3 h-6" />
                  </div>
                </div>
              ))
            ) : dataBlogs && dataBlogs.length != 0 ? (
              dataBlogs.slice(0, 10).map((item) => (
                <div key={item.id_article} className="space-y-6 mt-4">
                  <Link
                    to={`/blogs/detail/${createSlug(item.title)}/${
                      item.id_article
                    }`}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between md:justify-start gap-4">
                      <div className="flex items-center gap-2">
                        <div className="border p-1 rounded-full">
                          <img
                            src="/logo.png"
                            alt="drabsky"
                            width={25}
                            height={25}
                          />
                        </div>
                        <p className="text-sm">Drabs</p>
                      </div>
                      <p className="text-sm">{formatDate(item.createdAt)}</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8/12">
                        <h2 className="lora text-xl font-semibold line-clamp-2 hover:underline">
                          {item.title}
                        </h2>
                        <p className="line-clamp-2 text-sm mt-1">
                          <div
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                        </p>
                      </div>
                      <div className="w-4/12 flex justify-end">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="md:h-28 md:w-40 w-20 h-16 object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm">Share:</p>
                      <ShareMedsos url={`/blogs/${item.slug}`} size="6" />
                    </div>
                  </Link>
                  <hr />
                </div>
              ))
            ) : (
              <p className="text italic">
                Hasil pencarian "<b>{query}</b>" tidak ditemukan
              </p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogSearch;
