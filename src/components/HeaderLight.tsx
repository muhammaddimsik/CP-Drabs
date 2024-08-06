import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonCustom from "./ButtonCustom";
import { ArrowUpRight, X } from "lucide-react";

const navigations = [
  {
    path: "/",
    label: "Home",
  },
  // {
  //   path: "/services",
  //   label: "Services",
  // },
  {
    path: "/portfolio",
    label: "Portfolio",
  },
  {
    path: "/blogs",
    label: "Blog's",
  },
  {
    path: "/about-us",
    label: "About us",
  },
];

const HeaderLight: React.FC = () => {
  const location = useLocation();

  const [animateOut, setAnimateOut] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setOpenNav(false);
      setAnimateOut(false);
    }, 500); // Harus sesuai dengan durasi animasi keluar
  };

  return (
    <header className="w-full flex justify-between items-center py-10">
      <div className="w-3/12">
        <Link to="/">
          <p className="font-medium text-cdark">Drabsky</p>
        </Link>
      </div>
      <nav className="hidden md:block w-6/12">
        <ul className="flex justify-center gap-6">
          {navigations.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className={`text-sm hover:text-[#EDFF71] hover:border-b border-[#EDFF71] ${
                  location.pathname == item.path
                    ? "text-[#EDFF71] border-b border-[#EDFF71]"
                    : "text-cdark"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {openNav && (
        <div className="bg-gray-900/40 fixed z-50 top-0 right-0 w-full h-screen">
          <div
            className={`bg-[#F2F2F2] w-[80%] float-end h-full py-10 ${
              animateOut ? "animate-slide-out-right" : "animate-slide-in-right"
            }`}
          >
            <div className="w-full flex justify-end pr-6">
              <button
                className="border bg-cdark rounded-full p-2"
                onClick={handleClose}
              >
                <X className="text-white" />
              </button>
            </div>
            <ul className="ml-6">
              {navigations.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className={`text-sm block py-1 hover:text-[#EDFF71] hover:border-b border-[#EDFF71] ${
                      location.pathname == item.path ? "" : "text-cdark"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-4 mt-4">
              <a
                href="https://api.whatsapp.com/send/?phone=6281586915991&text=Halo Drabs! Saya ingin konsultasi tentang sistem informasi.&type=phone_number&app_absent=0"
                target="_blank"
                className="inline-block"
              >
                <div className="flex gap-1 items-center px-6 py-2 bg-cyellow rounded-full text-sm text-cdark font-semibold">
                  <p>Konsultasi</p>
                  <ArrowUpRight className="w-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      <button className="md:hidden" onClick={() => setOpenNav(!openNav)}>
        <svg
          className="menu"
          width="26"
          height="14"
          viewBox="0 0 26 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10"
            y1="1"
            x2="25"
            y2="1"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="1"
            y1="7"
            x2="25"
            y2="7"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="8"
            y1="13"
            x2="25"
            y2="13"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <div className="hidden w-3/12 md:flex justify-end">
        <ButtonCustom>Konsultasi</ButtonCustom>
      </div>
    </header>
  );
};

export default HeaderLight;
