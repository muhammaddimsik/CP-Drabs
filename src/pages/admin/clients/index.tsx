import Layout from "@/components/Layout";
import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import ClientsTable from "./ClientsTable";
import { TClients } from "@/lib/models";

const path = [
  {
    name: "Clients",
    url: "/administrator/clients",
  },
];

const App: React.FC = () => {
  const [data, setData] = useState<TClients[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getClients = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("client");
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Layout path={path} title="Clients">
      {data ? (
        <ClientsTable data={data} getClients={getClients} />
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
