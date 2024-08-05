import HeaderLight from "@/components/HeaderLight";
import Seo from "@/components/Seo";
import { TArticles } from "@/lib/models";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    getDetailBlog();
  }, []);

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
        <div className="container mx-auto">
          <HeaderLight />
        </div>
        <div className="md:w-[700px] mx-auto">
          <div className="space-y-4">
            <div className="">
              <h2 className="font-bold text-4xl">{detailBlog?.title}</h2>
              <p>{detailBlog?.meta_description}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="border p-1 rounded-full">
                  <img src="/logo.png" alt="drabsky" width={40} height={40} />
                </div>
                <p className="font-semibold">Drabs</p>
              </div>
              <p className="text-sm">{detailBlog?.createdAt}</p>
            </div>
            <hr />
            <div className="pt-6">
              <img
                src={detailBlog?.image}
                alt={detailBlog?.title}
                className="w-full"
              />
            </div>
            {detailBlog && (
              <div className="">
                <div dangerouslySetInnerHTML={{ __html: detailBlog.content }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBlog;
