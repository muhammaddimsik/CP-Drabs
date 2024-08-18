import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChevronRight,
  GalleryVerticalEnd,
  HandHelping,
  Layers3,
  NotepadText,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import TableDashboard from "./TableDashboard";
import {
  TArticles,
  TCategories,
  TClients,
  TPortfolio,
  TServices,
} from "@/lib/models";

const Statistics: React.FC = () => {
  const [dataArticles, setDataArticles] = useState<TArticles[]>();
  const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>();
  const getDataArticles = async () => {
    setIsLoadingArticles(true);
    try {
      const response = await axiosInstance.get("article?limit=9999&offset=0");
      setDataArticles(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingArticles(false);
    }
  };

  const [dataServices, setDataServices] = useState<TServices[]>();
  const [isLoadingServices, setIsLoadingServices] = useState<boolean>(false);
  const getDataServices = async () => {
    setIsLoadingServices(true);
    try {
      const response = await axiosInstance.get("services");
      setDataServices(response.data);
      // console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingServices(false);
    }
  };

  const [dataKategori, setDataKategori] = useState<TCategories[]>();
  const [isLoadingKategori, setIsLoadingKategori] = useState<boolean>(false);
  const getCategories = async () => {
    setIsLoadingKategori(true);
    try {
      const response = await axiosInstance.get("kategori");
      setDataKategori(response.data);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingKategori(false);
    }
  };

  const [dataClients, setDataClients] = useState<TClients[]>();
  const [isLoadingClients, setIsLoadingClients] = useState<boolean>();
  const getDataClients = async () => {
    setIsLoadingClients(true);
    try {
      const response = await axiosInstance.get("client");
      setDataClients(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingClients(false);
    }
  };

  const [dataPortfolio, setDataPortfolio] = useState<TPortfolio[]>();
  const [isLoadingPortfolio, setIsLoadingPortfolio] = useState<boolean>();
  const getDataPortfolio = async () => {
    setIsLoadingPortfolio(true);
    try {
      const response = await axiosInstance.get("portofolio");
      setDataPortfolio(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingPortfolio(false);
    }
  };

  useEffect(() => {
    getDataArticles();
    getDataServices();
    getCategories();
    getDataClients();
    getDataPortfolio();
  }, []);

  return (
    <div className="space-y-1">
      <div className="flex gap-2">
        <div className="flex flex-wrap w-full space-y-3 md:space-y-0">
          <div className="w-1/2 md:w-1/5 p-1">
            <div className=" bg-white rounded-md px-4 py-5 text-sm flex gap-2">
              {isLoadingArticles ? (
                <>
                  <div className="w-4/12 flex justify-center items-center">
                    <Skeleton className="w-[40px] h-[40px] rounded-xl" />
                  </div>
                  <div className="w-8/12 space-y-1">
                    <Skeleton className="h-[14px] w-[80px] rounded" />
                    <Skeleton className="w-[60px] h-[30px] rounded-lg" />
                    <Skeleton className="h-[14px] w-[80px] rounded" />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-4/12 flex justify-center items-center">
                    <div className="bg-orange-50 rounded p-3">
                      <NotepadText className="h-5 w-5 text-fuchsia-500" />
                    </div>
                  </div>
                  <div className="w-8/12">
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500 font-medium">
                        Articles
                      </p>
                      {isLoadingArticles ? (
                        <Skeleton className="w-[60px] h-[30px] rounded-lg" />
                      ) : (
                        <p className="font-bold text-slate-800 text-2xl">
                          {dataArticles?.length}
                        </p>
                      )}
                      <Link
                        to="/administrator/articles"
                        className="flex items-center gap-1 hover:underline"
                      >
                        <p className="text-xs">Lihat Detail</p>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="w-1/2 md:w-1/5 p-1">
            <div className=" bg-white rounded-md px-4 py-5 text-sm flex gap-2">
              {isLoadingServices ? (
                <>
                  <div className="w-4/12 flex justify-center items-center">
                    <Skeleton className="w-[40px] h-[40px] rounded-xl" />
                  </div>
                  <div className="w-8/12 space-y-1">
                    <Skeleton className="h-[14px] w-[80px] rounded" />
                    <Skeleton className="w-[60px] h-[30px] rounded-lg" />
                    <Skeleton className="h-[14px] w-[80px] rounded" />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-4/12 flex justify-center items-center">
                    <div className="bg-orange-50 rounded p-3">
                      <HandHelping className="h-5 w-5 text-orange-500" />
                    </div>
                  </div>
                  <div className="w-8/12">
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500 font-medium">
                        Services
                      </p>
                      {isLoadingServices ? (
                        <Skeleton className="w-[60px] h-[30px] rounded-lg" />
                      ) : (
                        <p className="font-bold text-slate-800 text-2xl">
                          {dataServices?.length}
                        </p>
                      )}
                      <Link
                        to="/administrator/services"
                        className="flex items-center gap-1 hover:underline"
                      >
                        <p className="text-xs">Lihat Detail</p>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="w-1/2 md:w-1/5 p-1">
            <div className=" bg-white rounded-md px-4 py-5 text-sm flex gap-2">
              {isLoadingKategori ? (
                <>
                  <div className="w-4/12 flex justify-center items-center">
                    <Skeleton className="w-[40px] h-[40px] rounded-xl" />
                  </div>
                  <div className="w-8/12 space-y-1">
                    <Skeleton className="h-[14px] w-[80px] rounded" />
                    <Skeleton className="w-[60px] h-[30px] rounded-lg" />
                    <Skeleton className="h-[14px] w-[80px] rounded" />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-4/12 flex justify-center items-center">
                    <div className="bg-violet-50 rounded p-3">
                      <Layers3 className="h-5 w-5 text-violet-900" />
                    </div>
                  </div>
                  <div className="w-8/12">
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500 font-medium">
                        Categories
                      </p>
                      {isLoadingKategori ? (
                        <Skeleton className="w-[60px] h-[30px] rounded-lg" />
                      ) : (
                        <p className="font-bold text-slate-800 text-2xl">
                          {dataKategori?.length}
                        </p>
                      )}
                      <Link
                        to="/administrator/kategori"
                        className="flex items-center gap-1 hover:underline"
                      >
                        <p className="text-xs">Lihat Detail</p>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="w-1/2 md:w-1/5 p-1">
            <div className=" bg-white rounded-md px-4 py-5 text-sm flex gap-2">
              {isLoadingClients ? (
                <>
                  <div className="w-4/12 flex justify-center items-center">
                    <Skeleton className="w-[40px] h-[40px] rounded-xl" />
                  </div>
                  <div className="w-8/12 space-y-1">
                    <Skeleton className="h-[14px] w-[80px] rounded" />
                    <Skeleton className="w-[60px] h-[30px] rounded-lg" />
                    <Skeleton className="h-[14px] w-[80px] rounded" />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-4/12 flex justify-center items-center">
                    <div className="bg-yellow-50 rounded p-3">
                      <User className="h-5 w-5 text-yellow-500" />
                    </div>
                  </div>
                  <div className="w-8/12">
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500 font-medium">
                        Clients
                      </p>
                      {isLoadingClients ? (
                        <Skeleton className="w-[60px] h-[30px] rounded-lg" />
                      ) : (
                        <p className="font-bold text-slate-800 text-2xl">
                          {dataClients?.length}
                        </p>
                      )}
                      <Link
                        to="/administrator/clients"
                        className="flex items-center gap-1 hover:underline"
                      >
                        <p className="text-xs">Lihat Detail</p>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="w-1/2 md:w-1/5 p-1">
            <div className=" bg-white rounded-md px-4 py-5 text-sm flex gap-2">
              {isLoadingPortfolio ? (
                <>
                  <div className="w-4/12 flex justify-center items-center">
                    <Skeleton className="w-[40px] h-[40px] rounded-xl" />
                  </div>
                  <div className="w-8/12 space-y-1">
                    <Skeleton className="h-[14px] w-[80px] rounded" />
                    <Skeleton className="w-[60px] h-[30px] rounded-lg" />
                    <Skeleton className="h-[14px] w-[80px] rounded" />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-4/12 flex justify-center items-center">
                    <div className="bg-green-50 rounded p-3">
                      <GalleryVerticalEnd className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                  <div className="w-8/12">
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500 font-medium">
                        Portfolio
                      </p>
                      {isLoadingPortfolio ? (
                        <Skeleton className="w-[60px] h-[30px] rounded-lg" />
                      ) : (
                        <p className="font-bold text-slate-800 text-2xl">
                          {dataPortfolio?.length}
                        </p>
                      )}
                      <Link
                        to="/administrator/clients"
                        className="flex items-center gap-1 hover:underline"
                      >
                        <p className="text-xs">Lihat Detail</p>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <TableDashboard
        dataArticles={dataArticles}
        dataPortfolio={dataPortfolio}
      />
    </div>
  );
};

export default Statistics;
