import { Outlet } from "react-router-dom";
import { GenreNav } from "../../components/Posters/GenreNav";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const Posters = () => {
  return (
    <div className="bg-white max-w-[1600px] mx-auto">
      <Navbar />
      <div className="flex bg-white max-w-[1600px] mx-auto mb-[-50px] ">
        <div className="flex relative max-w-[1400px] mx-auto pb-10">
          <div className="mr-0">
            <GenreNav className="w-100 h-120" />
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
