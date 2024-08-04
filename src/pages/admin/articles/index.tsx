import Layout from "@/components/Layout";
import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import ArticlesTabel from "./ArticlesTable";
import { TArticles } from "@/lib/models";

const path = [
  {
    name: "Articles",
    url: "/administrator/articles",
  },
];

const App: React.FC = () => {
  const [data, setData] = useState<TArticles[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getArticles = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("article?limit=9999&offset=0");
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Layout path={path} title="Articles">
      {data ? (
        <ArticlesTabel data={data} getArticles={getArticles} />
      ) : (
        isLoading && (
          <div className="w-full h-[60vh] flex items-center justify-center">
            <div className="flex flex-col justify-center items-center space-x-2">
              <Loader className="animate-spin" />
              <i>Loading...</i>
            </div>
          </div>
        )
      )}
    </Layout>
  );
};

export default App;
