import React from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonCustom from "./ButtonCustom";

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

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="w-full flex justify-between items-center py-10">
      <div className="w-3/12">
        <p className="font-medium text-white">Drabsky</p>
      </div>
      <nav className="w-6/12">
        <ul className="flex justify-center gap-6">
          {navigations.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className={`text-sm hover:text-[#EDFF71] hover:border-b border-[#EDFF71] ${
                  location.pathname == item.path
                    ? "text-[#EDFF71] border-b border-[#EDFF71]"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-3/12 flex justify-end">
        <ButtonCustom>Get in Touch</ButtonCustom>
      </div>
    </header>
  );
};

export default Header;
