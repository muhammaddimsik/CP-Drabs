import ShareMedsos from "@/components/ShareMedsos";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/formatDate";
import { TArticles } from "@/lib/models";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ListBlogs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataBlogs, setDataBlogs] = useState<TArticles[]>([]);
  const [limit, setLimit] = useState(5);
  const [totalBlogs, setTotalBlogs] = useState(0);

  const footerRef = useRef<HTMLDivElement>(null);

  const getBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/article?limit=${limit}&offset=0`
      );

      setDataBlogs(response.data.data);
      setTotalBlogs(response.data.total);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [limit]);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerPosition = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (
          footerPosition <= windowHeight &&
          !isLoading &&
          dataBlogs.length < totalBlogs
        ) {
          setLimit((prevLimit) => prevLimit + 5);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, dataBlogs.length, totalBlogs]);

  const [blogsTrending, setBlogsTrending] = useState<TArticles[]>();
  useEffect(() => {
    if (dataBlogs) {
      const sortedBlogs = [...dataBlogs].sort(
        (a, b) => b.view_count - a.view_count
      );
      setBlogsTrending(sortedBlogs);
    }
  }, [dataBlogs]);

  return (
    <div className="md:flex justify-between">
      <main className="md:w-8/12 w-full space-y-6 mt-4 md:mt-0">
        <p>Blog Terbaru</p>
        <hr />
        <div className="md:pr-10 md:max-h-[500px] md:overflow-y-scroll md:no-scrollbar">
          {dataBlogs?.map((item) => (
            <div key={item.id_article} className="space-y-6 mt-4">
              <Link to={`/blogs/${item.slug}`} className="space-y-4">
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
                    <div
                      className="line-clamp-2 text-sm mt-1"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                  <div className="w-4/12 flex justify-end">
                    {item.image === "" ? (
                      <img
                        src="/no-picture.png"
                        alt={item.title}
                        className="md:h-28 md:w-40 w-20 h-16 object-contain"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="md:h-28 md:w-40 w-20 h-16 object-cover"
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm">Share:</p>
                  <ShareMedsos
                    url={`https://www.drabsky.com/blogs/${item.slug}`}
                    size="6"
                  />
                </div>
              </Link>
              <hr />
            </div>
          ))}
          {isLoading &&
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
            ))}
        </div>
      </main>
      <aside className="md:block hidden w-4/12 border-l pl-10">
        <div className="mt-10 mb-6">
          <h3>Trending</h3>
        </div>
        <div className="">
          <ol className="space-y-4">
            {isLoading
              ? [1, 2, 3, 4, 5].map((item) => (
                  <div className="flex gap-3" key={item}>
                    <Skeleton className="w-10 h-8" />
                    <div className="w-full space-y-2">
                      <Skeleton className="w-full h-8" />
                      <div className="space-y-1">
                        <Skeleton className="w-full h-6" />
                        <Skeleton className="w-2/3 h-6" />
                      </div>
                    </div>
                  </div>
                ))
              : blogsTrending?.slice(0, 5).map((item, i) => (
                  <li key={item.id_article} className="flex gap-3">
                    <span>{i + 1}. </span>
                    <Link to={`/blogs/${item.slug}`}>
                      <p className="font-semibold hover:underline line-clamp-2 lora">
                        {item.title}
                      </p>
                      <div
                        className="text-sm line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </Link>
                  </li>
                ))}
          </ol>
        </div>
      </aside>
      <div ref={footerRef}></div>
    </div>
  );
};

export default ListBlogs;
