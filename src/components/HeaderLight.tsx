import React, { FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, SearchIcon, X } from "lucide-react";
import { Search } from "./ui/search";

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

interface Props {
  isOpen: boolean;
}

const HeaderLight: React.FC<Props> = ({ isOpen }) => {
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

  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  const [isOpenSearch, setIsOpenSearch] = useState(isOpen);

  const [hasShadow, setHasShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full sticky top-0 z-10 bg-white transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : ""
      }`}
    >
      <header>
        <div className="py-3 px-10 bg-cprimary">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="flex gap-1 items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.71169 3.97081C10.2302 3.65621 13.7698 3.65621 17.2883 3.97081L18.8057 4.10648C20.318 4.2417 21.54 5.39708 21.7596 6.89951C22.2541 10.2818 22.2541 13.7181 21.7596 17.1004C21.54 18.6029 20.318 19.7582 18.8057 19.8935L17.2883 20.0291C13.7698 20.3437 10.2302 20.3437 6.71169 20.0291L5.19435 19.8935C3.68198 19.7582 2.46003 18.6029 2.24038 17.1004C1.74588 13.7181 1.74588 10.2818 2.24038 6.89951C2.46003 5.39708 3.68198 4.2417 5.19435 4.10648L6.71169 3.97081ZM5.85557 6.83962C5.62315 6.71446 5.34204 6.72072 5.11541 6.85608C4.88878 6.99145 4.75 7.23599 4.75 7.49997V17C4.75 17.4142 5.08579 17.75 5.5 17.75C5.91421 17.75 6.25 17.4142 6.25 17V8.75563L11.6444 11.6603C11.8664 11.7799 12.1336 11.7799 12.3556 11.6603L17.75 8.75563V17C17.75 17.4142 18.0858 17.75 18.5 17.75C18.9142 17.75 19.25 17.4142 19.25 17V7.49997C19.25 7.23599 19.1112 6.99145 18.8846 6.85608C18.658 6.72072 18.3769 6.71446 18.1444 6.83962L12 10.1482L5.85557 6.83962Z"
                    fill="white"
                  />
                </svg>

                <p className="hidden md:inline text-white text-xs">
                  drabsky77@gmail.com
                </p>
              </div>
              <Link
                to="https://api.whatsapp.com/send/?phone=6285640943430&text=Halo Drabs! Saya ingin konsultasi tentang sistem informasi.&type=phone_number&app_absent=0"
                className="flex gap-1 items-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00017 9.86053C6.91657 14.0344 10.3266 17.3529 14.5661 19.1519L15.2457 19.4547C16.8005 20.1475 18.6283 19.6212 19.5766 18.2077L20.4647 16.884C20.7534 16.4536 20.6655 15.8739 20.2622 15.5485L17.2503 13.1187C16.8079 12.7618 16.1574 12.845 15.819 13.3016L14.8873 14.5589C12.4965 13.3795 10.5554 11.4385 9.37607 9.04768L10.6333 8.11596C11.09 7.77754 11.1731 7.12702 10.8162 6.68464L8.38635 3.6727C8.061 3.26942 7.4815 3.18145 7.05113 3.47002L5.71829 4.36372C4.29595 5.31742 3.77257 7.16027 4.4813 8.71922L4.99939 9.85884L5.00017 9.86053Z"
                    fill="white"
                  />
                </svg>

                <p className="hidden md:inline text-white text-xs">
                  085240943430
                </p>
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <Link
                to="https://web.facebook.com/profile.php?id=100072729001703"
                target="_balnk"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2 2.875C12.9734 2.875 11.797 3.36228 10.9296 4.22963C10.0623 5.09699 9.575 6.27337 9.575 7.5V10.075H7.1C6.97574 10.075 6.875 10.1757 6.875 10.3V13.7C6.875 13.8243 6.97574 13.925 7.1 13.925H9.575V20.9C9.575 21.0243 9.67574 21.125 9.8 21.125H13.2C13.3243 21.125 13.425 21.0243 13.425 20.9V13.925H15.9219C16.0252 13.925 16.1152 13.8547 16.1402 13.7546L16.9902 10.3546C17.0257 10.2126 16.9183 10.075 16.7719 10.075H13.425V7.5C13.425 7.29446 13.5067 7.09733 13.652 6.95199C13.7973 6.80665 13.9945 6.725 14.2 6.725H16.8C16.9243 6.725 17.025 6.62426 17.025 6.5V3.1C17.025 2.97574 16.9243 2.875 16.8 2.875H14.2Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link to="https://www.instagram.com/drab.sky/" target="_balnk">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8.75005C10.2051 8.75005 8.75 10.2051 8.75 12C8.75 13.795 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.795 15.25 12C15.25 10.2051 13.7949 8.75005 12 8.75005Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.76954 3.08151C10.2177 2.69614 13.7824 2.69614 17.2305 3.08151C19.1289 3.29369 20.6601 4.78947 20.8829 6.69452C21.2952 10.2195 21.2952 13.7806 20.8829 17.3056C20.6601 19.2106 19.1289 20.7064 17.2305 20.9186C13.7824 21.304 10.2177 21.304 6.76954 20.9186C4.87114 20.7064 3.33995 19.2106 3.11713 17.3056C2.70485 13.7806 2.70485 10.2195 3.11713 6.69452C3.33995 4.78947 4.87114 3.29369 6.76954 3.08151ZM17 6.00005C16.4477 6.00005 16 6.44776 16 7.00005C16 7.55233 16.4477 8.00005 17 8.00005C17.5523 8.00005 18 7.55233 18 7.00005C18 6.44776 17.5523 6.00005 17 6.00005ZM7.25 12C7.25 9.37669 9.37665 7.25005 12 7.25005C14.6234 7.25005 16.75 9.37669 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link to="https://www.linkedin.com/drab.sky/" target="_balnk">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.75 1.875C3.57639 1.875 2.625 2.82639 2.625 4C2.625 5.1736 3.57639 6.125 4.75 6.125C5.9236 6.125 6.875 5.1736 6.875 4C6.875 2.82639 5.9236 1.875 4.75 1.875Z"
                    fill="white"
                  />
                  <path
                    d="M2.75 7.875C2.68096 7.875 2.625 7.93096 2.625 8V21C2.625 21.069 2.68096 21.125 2.75 21.125H6.75C6.81904 21.125 6.875 21.069 6.875 21V8C6.875 7.93096 6.81904 7.875 6.75 7.875H2.75Z"
                    fill="white"
                  />
                  <path
                    d="M9.25 7.875C9.18096 7.875 9.125 7.93096 9.125 8V21C9.125 21.069 9.18096 21.125 9.25 21.125H13.25C13.319 21.125 13.375 21.069 13.375 21V14C13.375 13.5027 13.5725 13.0258 13.9242 12.6742C14.2758 12.3225 14.7527 12.125 15.25 12.125C15.7473 12.125 16.2242 12.3225 16.5758 12.6742C16.9275 13.0258 17.125 13.5027 17.125 14V21C17.125 21.069 17.181 21.125 17.25 21.125H21.25C21.319 21.125 21.375 21.069 21.375 21V12.3802C21.375 9.9535 19.2644 8.05499 16.8498 8.2745C16.1052 8.34219 15.369 8.52731 14.6815 8.82194L13.375 9.38186V8C13.375 7.93096 13.319 7.875 13.25 7.875H9.25Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="container flex justify-between items-center md:py-6 py-3">
          <div className="w-3/12">
            <Link to="/">
              <div className="flex items-center">
                <img src="/logo.png" alt="logo-drabs" className="w-12" />
                <p className="font-medium text-[#00AEF0] ">Drabsky</p>
              </div>
            </Link>
          </div>
          <nav className="hidden md:block w-6/12">
            <ul className="flex justify-center gap-6 ">
              {navigations.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className={`hover:text-cprimary hover:border-b border-cprimary ${
                      location.pathname == item.path
                        ? "text-cprimary border-b border-cprimary"
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
                className={`bg-white w-[80%] float-end h-full py-10 ${
                  animateOut
                    ? "animate-slide-out-right"
                    : "animate-slide-in-right"
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
                        className={`text-sm block py-1 hover:text-cprimary hover:border-b border-cprimary ${
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
                    href="https://api.whatsapp.com/send/?phone=6285640943430&text=Halo Drabs! Saya ingin konsultasi tentang sistem informasi.&type=phone_number&app_absent=0"
                    target="_blank"
                    className="inline-block"
                  >
                    <div className="flex gap-1 items-center px-6 py-2 bg-cprimary rounded text-sm text-white">
                      <p>Konsultasi</p>
                      <ArrowUpRight className="w-4" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="w-3/12 flex justify-end items-center gap-6">
            <button onClick={() => setIsOpenSearch(!isOpenSearch)}>
              <SearchIcon />
            </button>

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

            <div className="hidden md:block">
              <a
                href="https://api.whatsapp.com/send/?phone=6285640943430&text=Halo Drabs! Saya ingin konsultasi tentang sistem informasi.&type=phone_number&app_absent=0"
                target="_blank"
              >
                <button className="flex items-center gap-1 text-sm rounded py-2 px-6 text-white bg-cprimary hover:bg-[#0592c9]">
                  Konsultasi
                  <ArrowUpRight className="w-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      {isOpenSearch && (
        <div className="container mx-auto bg-cprimary/70 rounded">
          <div className="md:w-1/2 py-3 mx-auto mb-6">
            <form onSubmit={handleSubmit}>
              <Search
                placeholder="Search blog..."
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderLight;
