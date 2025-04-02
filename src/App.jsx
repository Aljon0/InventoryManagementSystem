import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Categories from "./components/Categories";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";
import AlertBanner from "./components/AlertBanner";

function App() {
  const [activeView, setActiveView] = useState("dashboard");
  const [showAlert, setShowAlert] = useState(true);

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "inventory":
        return <Inventory />;
      case "categories":
        return <Categories />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#E5E7E6]">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {showAlert && (
          <AlertBanner
            message="Low stock alert: 5 products below threshold"
            type="warning"
            onClose={() => setShowAlert(false)}
          />
        )}
        <main className="flex-1 overflow-y-auto p-4">{renderView()}</main>
      </div>
    </div>
  );
}

export default App;
