import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AlertBanner from "../components/AlertBanner";

const MainLayout = () => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="flex h-screen bg-[#E5E7E6]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {showAlert && (
          <AlertBanner
            message="Low stock alert: 5 products below threshold"
            type="warning"
            onClose={() => setShowAlert(false)}
          />
        )}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
