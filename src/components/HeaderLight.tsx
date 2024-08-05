import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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

  return (
    <header className="w-full flex justify-between items-center py-10">
      <div className="w-3/12">
        <Link to="/">
          <p className="font-medium text-[#0F2028]">Drabsky</p>
        </Link>
      </div>
      <nav className="w-6/12">
        <ul className="flex justify-center gap-6">
          {navigations.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className={`text-sm hover:text-slate-500 hover:border-b border-slate-500 ${
                  location.pathname == item.path
                    ? "text-slate-500 border-b border-slate-500"
                    : "text-[#0F2028]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-3/12 flex justify-end">
        <button className="flex items-center gap-1 text-sm border border-[#0F2028] rounded-full py-3 px-6 hover:text-white hover:bg-[#0F2028] hover:border-[#0F2028]">
          Get in Touch
          <ArrowUpRight className="w-5" />
        </button>
      </div>
    </header>
  );
};

export default HeaderLight;
