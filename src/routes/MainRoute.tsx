import Dashboard from "@/pages/admin/dashboard/index";
import Articles from "@/pages/admin/articles/index";
import Client from "@/pages/admin/clients/index";
import Portfolio from "@/pages/admin/portfolio/index";
import Services from "@/pages/admin/services/index";
import Category from "@/pages/admin/category/index";
import Login from "@/pages/auth/Login";
import NotFoundScreen from "@/pages/404/NotFound";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AddArticle from "@/pages/admin/articles/AddArticle";
import AddService from "@/pages/admin/services/AddService";
import AddClient from "@/pages/admin/clients/AddClient";
import AddPortfolio from "@/pages/admin/portfolio/AddPortfolio";
import Homepage from "@/pages/users/homepage/index";
import Blogs from "@/pages/users/blogs/index";
import AlertSessionExpired from "@/components/AlertSessionExpired";
import DetailBlogs from "@/pages/users/blogs/DetailBlog";
import AboutUs from "@/pages/users/about/index";
import PortfolioUser from "@/pages/users/portfolio/index";
import EditArticle from "@/pages/admin/articles/EditArticle";
import ScrollToTop from "@/lib/scrollToTop";

const MainRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <AlertSessionExpired />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<PortfolioUser />} />
        <Route path="/blogs/detail/:slug/:id" element={<DetailBlogs />} />
        <Route path="/drabs/login" element={<Login />} />
        <Route path="administrator">
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="clients">
            <Route
              path=""
              element={
                <PrivateRoute>
                  <Client />
                </PrivateRoute>
              }
            />
            <Route
              path="add-client"
              element={
                <PrivateRoute>
                  <AddClient />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="portfolio">
            <Route
              path=""
              element={
                <PrivateRoute>
                  <Portfolio />
                </PrivateRoute>
              }
            />
            <Route
              path="add-portfolio"
              element={
                <PrivateRoute>
                  <AddPortfolio />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="kategori">
            <Route
              path=""
              element={
                <PrivateRoute>
                  <Category />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="articles">
            <Route
              path=""
              element={
                <PrivateRoute>
                  <Articles />
                </PrivateRoute>
              }
            />
            <Route
              path="add-article"
              element={
                <PrivateRoute>
                  <AddArticle />
                </PrivateRoute>
              }
            />
            <Route
              path="edit/:id"
              element={
                <PrivateRoute>
                  <EditArticle />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="services">
            <Route
              path=""
              element={
                <PrivateRoute>
                  <Services />
                </PrivateRoute>
              }
            />
            <Route
              path="add-service"
              element={
                <PrivateRoute>
                  <AddService />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route path="/*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
