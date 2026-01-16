import { Outlet } from "react-router-dom";
import "./App.css";
import "antd/dist/reset.css";
import React from "react";

function App() {
  return (
    <div className="app-container">
      {/* Global providers, modals, toasts, theme, etc. */}
      <Outlet />
    </div>
  );
}

export default App;
