import Layout from "@/components/Layout";
import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import CategoryTable from "./CategoryTable";
import { useAuth } from "@/stores/AuthStore";
import { Loader } from "lucide-react";
import { TCategories } from "@/lib/models";

const path = [
  {
    name: "Kategori",
    url: "/administrator/kategori",
  },
];

const App: React.FC = () => {
  const [data, setData] = useState<TCategories[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { accessToken } = useAuth();

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("kategori", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setData(response.data);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Layout path={path} title="Kategori">
      {data ? (
        <CategoryTable data={data} getCategories={getCategories} />
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
