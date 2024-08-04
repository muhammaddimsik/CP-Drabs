import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

import { ReactNode } from "react";

interface Path {
  name: string;
  url: string;
}

interface Props {
  children: ReactNode;
  title: string;
  path: Path[];
}

const Layout: React.FC<Props> = ({ children, title, path }) => {
  return (
    <section className="w-full flex min-h-screen">
      <div className="w-2/12 sticky">
        <Sidebar />
      </div>
      <div className="w-10/12 bg-gray-100 min-h-screen">
        <div className="py-10 px-6 space-y-3">
          <h4 className="font-bold text-2xl text-slate-800 capitalize">
            {title}
          </h4>
          <Breadcrumb>
            <BreadcrumbList>
              {path.map((item, i) =>
                i == path.length - 1 ? (
                  <BreadcrumbItem key={i}>
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                ) : (
                  <div key={i} className="flex items-center gap-2">
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to={item.url}>{item.name}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </div>
                )
              )}
            </BreadcrumbList>
          </Breadcrumb>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;
