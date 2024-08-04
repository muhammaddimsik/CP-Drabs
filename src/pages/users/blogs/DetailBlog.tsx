import HeaderLight from "@/components/HeaderLight";
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
    <div className="w-full">
      <div className="container mx-auto">
        <HeaderLight />
      </div>
      <div className="container mx-auto">
        <div className="">
          <p>Next.js Pragmatis: Server Components & Client Components</p>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
