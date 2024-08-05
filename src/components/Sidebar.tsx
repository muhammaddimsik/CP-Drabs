import {
  Home,
  LogOut,
  Loader,
  Layers3,
  GalleryVerticalEnd,
  NotepadText,
  HandHelping,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/stores/AuthStore";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  // AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { axiosInstance } from "@/lib/axios";

import Logo from "/logo.png";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const { setAccessToken, accessToken } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await axiosInstance.delete("logout", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setAccessToken(null);
    }
  };

  return (
    <section className="sticky z-10 top-0 left-0 text-slate-800 border border-white">
      <Link to="/administrator/dashboard">
        <div className="flex flex-col items-center gap-2 mt-3 p-4">
          <img src={Logo} alt="logo" className="h-14" />
          <p className="font-medium text-[#00AEF0] hidden lg:inline">Drabsky</p>
        </div>
      </Link>
      <hr className="mx-4" />
      <div className="mt-4">
        <div className="lg:ml-7 my-2">
          <p className="font-medium text-center lg:text-start text-xs text-gray-400 uppercase">
            menu
          </p>
        </div>
        <div
          className={`border-l-4 ${
            location.pathname.startsWith("/administrator/dashboard")
              ? "border-blue-400"
              : "border-white"
          }  hover:border-l-4 hover:border-blue-400`}
        >
          <Link to="/administrator/dashboard">
            <div
              className={`flex justify-center lg:justify-start gap-3 items-center rounded-md ${
                location.pathname.startsWith("/administrator/dashboard") &&
                "bg-slate-100 text-blue-600"
              } hover:bg-slate-100 hover:text-blue-600 lg:px-4 py-3 lg:ml-4 mr-3`}
            >
              <Home className="w-4 h-4" />
              <p className="text-sm hidden lg:inline">Dashboard</p>
            </div>
          </Link>
        </div>

        <div className="border-l-4 border-white hover:border-l-4 hover:border-blue-400">
          <Link to="/administrator/articles">
            <div
              className={`flex justify-center lg:justify-start gap-3 items-center rounded-md ${
                location.pathname.startsWith("/administrator/articles") &&
                "bg-slate-100 text-blue-600"
              } hover:bg-slate-100 hover:text-blue-600 lg:px-4 py-3 lg:ml-4 mr-3`}
            >
              <NotepadText className="w-4 h-4" />
              <p className="text-sm hidden lg:inline">Articles</p>
            </div>
          </Link>
        </div>
        <div className="border-l-4 border-white hover:border-l-4 hover:border-blue-400">
          <Link to="/administrator/services">
            <div
              className={`flex justify-center lg:justify-start gap-3 items-center rounded-md ${
                location.pathname.startsWith("/administrator/services") &&
                "bg-slate-100 text-blue-600"
              } hover:bg-slate-100 hover:text-blue-600 lg:px-4 py-3 lg:ml-4 mr-3`}
            >
              <HandHelping className="w-4 h-4" />
              <p className="text-sm hidden lg:inline">Services</p>
            </div>
          </Link>
        </div>
        <div className="border-l-4 border-white hover:border-l-4 hover:border-blue-400">
          <Link to="/administrator/kategori">
            <div
              className={`flex justify-center lg:justify-start gap-3 items-center rounded-md ${
                location.pathname.startsWith("/administrator/kategori") &&
                "bg-slate-100 text-blue-600"
              } hover:bg-slate-100 hover:text-blue-600 lg:px-4 py-3 lg:ml-4 mr-3`}
            >
              <Layers3 className="w-4 h-4" />
              <p className="text-sm hidden lg:inline">Categories</p>
            </div>
          </Link>
        </div>

        <div className="border-l-4 border-white hover:border-l-4 hover:border-blue-400">
          <Link to="/administrator/clients">
            <div
              className={`flex justify-center lg:justify-start gap-3 items-center rounded-md ${
                location.pathname.startsWith("/administrator/clients") &&
                "bg-slate-100 text-blue-600"
              } hover:bg-slate-100 hover:text-blue-600 lg:px-4 py-3 lg:ml-4 mr-3`}
            >
              <Users className="w-4 h-4" />
              <p className="text-sm hidden lg:inline">Clients</p>
            </div>
          </Link>
        </div>

        <div className="border-l-4 border-white hover:border-l-4 hover:border-blue-400">
          <Link to="/administrator/portfolio">
            <div
              className={`flex justify-center lg:justify-start gap-3 items-center rounded-md ${
                location.pathname.startsWith("/administrator/portfolio") &&
                "bg-slate-100 text-blue-600"
              } hover:bg-slate-100 hover:text-blue-600 lg:px-4 py-3 lg:ml-4 mr-3`}
            >
              <GalleryVerticalEnd className="w-4 h-4" />
              <p className="text-sm hidden lg:inline">Portfolio</p>
            </div>
          </Link>
        </div>

        <div className="lg:ml-7 my-2">
          <p className="font-medium text-center lg:text-start text-xs text-gray-400 uppercase">
            accounts
          </p>
        </div>

        <div className="border-l-4 border-white hover:border-l-4 hover:border-blue-400">
          <AlertDialog>
            <AlertDialogTrigger
              className={`w-full flex justify-center lg:justify-start gap-3 items-center rounded-md hover:bg-slate-100 hover:text-blue-600 lg:px-4 py-3 lg:ml-4 mr-3`}
            >
              <LogOut className="w-4 h-4" />
              <p className="text-sm hidden lg:inline">Logout</p>
            </AlertDialogTrigger>
            <AlertDialogContent className="mx-4 lg:mx-0">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Apakah anda yakin ingin logout?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleLogout}
                  className="bg-red-500"
                >
                  {isLoading ? <Loader className="animate-spin" /> : "Continue"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
