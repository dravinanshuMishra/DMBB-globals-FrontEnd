import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home.jsx";
import React from "react";
import MainLayout from "../layout/MainLayout.jsx";
import NotFound from "../pages/NotFound.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Services from "../pages/Services.jsx";
import Testimonials from "../pages/Testimonials.jsx";
import ContactUs from "../pages/ContactUs.jsx";

// Pages (lazy-loaded)
const App = lazy(() => import("../App.jsx"));


// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Global wrapper
    children: [
      // Public pages
      {
        element: <MainLayout />, // Public layout
        children: [
          { path: "/", element: <Home /> },
          { path: "/about", element: <AboutUs /> },
          { path: "/services", element: <Services /> },
          { path: "/testimonials", element: <Testimonials /> },
          { path: "/contact", element: <ContactUs /> }
        ],
      },

      // 404
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
