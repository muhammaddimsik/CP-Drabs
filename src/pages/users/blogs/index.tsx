import React, { FormEvent, useState } from "react";
import ListBlogs from "./ListBlogs";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Search } from "@/components/ui/search";
import { useNavigate } from "react-router-dom";
import HeaderLight from "@/components/HeaderLight";

const index: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <>
      <Seo
        title="Blog's - Drabsky"
        description="Temukan perkembangan dan tips teknologi di blog Drab Sky Technology"
        type="website"
        name="Drabsky"
        image="/logo.png"
        url="https://www.drabsky.com/blogs"
      />
      <div className="w-full">
        <HeaderLight isOpen={false} />
        <div className="w-full">
          <div className="container mx-auto">
            <section className="pt-10 md:pb-20 pb-4">
              <div className="flex flex-col items-center">
                <p className="border rounded-full py-1 px-3 text-center text-xs text-white inline backdrop-blur-sm bg-gradient-to-r from-purple-500 to-pink-500">
                  Our Blogs!🔥
                </p>
                <div className="md:w-1/3 mx-auto py-4">
                  <h1 className="text-cdark md:text-5xl text-4xl text-center anton">
                    Discover Tech
                    <span className="text-cprimary"> Trend & Tips</span>
                  </h1>
                </div>
              </div>
              <div className="md:flex justify-center gap-2  text-center md:text-start">
                <p className="text-cdark">Web Development</p>
                <p className="text-cdark md:inline hidden">|</p>
                <p className="text-cdark">Mobile Apps</p>
                <p className="text-cdark md:inline hidden">|</p>
                <p className="text-cdark">IT Consultan</p>
              </div>
              <div className="flex gap-2 item-center justify-center mt-4">
                <form onSubmit={handleSubmit} className="w-full">
                  <Search
                    placeholder="Search blog..."
                    onChange={(e) => setQuery(e.target.value)}
                    className="md:w-1/2 mx-auto border border-cprimary"
                  />
                </form>
              </div>
            </section>
          </div>
        </div>
        <section className="mb-20">
          <div className="container mx-auto">
            <ListBlogs />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default index;
