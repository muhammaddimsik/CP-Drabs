import Layout from "@/components/Layout";
import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import ServicesTable from "./ServicesTable";
import { TServices } from "@/lib/models";

const path = [
  {
    name: "Services",
    url: "/services",
  },
];

const App: React.FC = () => {
  const [data, setData] = useState<TServices[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getServices = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("services");
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <Layout path={path} title="Services">
      {data ? (
        <ServicesTable data={data} getServices={getServices} />
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
