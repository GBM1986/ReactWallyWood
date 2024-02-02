import { Outlet } from "react-router-dom";
import { GenreNav } from "../../components/Posters/GenreNav";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const Posters = () => {
  return (
    <div className="bg-white max-w-[1200px] mx-auto">
      <Navbar />
      <div className="flex flex-col bg-white max-w-[1200px] mx-auto mb-[-50px]">
        <div className="max-w-[1000px] mx-auto pb-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:mr-6">
              <GenreNav className="w-full md:w-80" />
            </div>
            <div className="mt-6 md:mt-0 max-w-[880px] md:w-full md:flex-row"> {/* Adjusted width for responsive */}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
