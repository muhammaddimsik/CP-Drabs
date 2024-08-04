import Layout from "@/components/Layout";
import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import PortfoliosTable from "./PortfoliosTable";
import { TPortfolio } from "@/lib/models";

const path = [
  {
    name: "Portfolio",
    url: "/administrator/portfolio",
  },
];

const App: React.FC = () => {
  const [data, setData] = useState<TPortfolio[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPortfolio = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("portofolio");
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <Layout path={path} title="Portfolio">
      {data ? (
        <PortfoliosTable data={data} getPortfolio={getPortfolio} />
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
