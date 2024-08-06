import { Skeleton } from "@/components/ui/skeleton";
import { formatDateSort } from "@/lib/formatDateSort";
import { TArticles } from "@/lib/models";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListBlogs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataBlogs, setDataBlogs] = useState<TArticles[]>();
  const getBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/article?limit=9999&offset=0`
      );
      setDataBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const [blogsTrending, setBlogsTrending] = useState<TArticles[]>();

  useEffect(() => {
    if (dataBlogs) {
      const sortedBlogs = dataBlogs?.sort(
        (a, b) => b.view_count - a.view_count
      );
      setBlogsTrending(sortedBlogs);
    }
  }, [dataBlogs]);

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Menghapus karakter khusus
      .replace(/\s+/g, "-") // Mengganti spasi dengan tanda hubung
      .replace(/-+/g, "-"); // Mengganti beberapa tanda hubung dengan satu
  };

  return (
    <div className="md:flex justify-between">
      <main className="md:w-8/12 w-full space-y-6 mt-10">
        <p>Blog Terbaru</p>
        <hr />
        <div className="md:pr-10">
          {isLoading
            ? [1, 2, 3, 4, 5].map((item) => (
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
            : dataBlogs?.slice(0, 10).map((item) => (
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
                      <p className="text-sm">
                        {formatDateSort(item.createdAt)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8/12">
                        <h2 className="text-xl font-semibold line-clamp-2 hover:underline">
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
                      <p className="text-sm">
                        {item.categories?.name_categori}
                      </p>
                    </div>
                  </Link>
                  <hr />
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
                    <Link to={`/blogs/detail/${item.id_article}`}>
                      <p className="font-medium hover:underline line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-sm line-clamp-2">
                        <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </p>
                    </Link>
                  </li>
                ))}
          </ol>
        </div>
      </aside>
    </div>
  );
};

export default ListBlogs;
