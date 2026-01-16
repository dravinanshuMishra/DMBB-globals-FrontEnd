// MainLayout.jsx         # Landing page layouts
import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Public navbar */}
      <Header />

      <main className="flex-1">
        <Outlet /> {/* This renders the nested route */}
      </main>

      {/* Public footer */}
      <Footer />

    </div>
  );
};

export default MainLayout;
