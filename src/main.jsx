import React from "react"; // ✅ Missing import
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/reset.css"; // For latest version (v5)
import AppRouter from "./Router/AppRputer.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

