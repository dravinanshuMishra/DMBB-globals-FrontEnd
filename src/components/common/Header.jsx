import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Typography } from "antd";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo/logoSet.png";

const { Title, Text } = Typography;

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const establishedYear = "2025";
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on navigation
  useEffect(() => {
    setTimeout(() => setMenuOpen(false), 0);
    localStorage.setItem("dmmb:lastRoute", location.pathname);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[linear-gradient(to_bottom_right,#eef2ff,#ffffff,#e0e7ff)] border-b border-slate-200 backdrop-blur">
      <div className="max-w-7xl mx-auto px-5 md:px-16 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="DMBB Global"
            className="h-10 w-auto object-contain"
          />
          <div className="leading-tight">
            <Title level={5} className="mb-0! text-slate-900! font-semibold!">
              DMBB Global
            </Title>
            <Text className="text-[11px] text-slate-600">
              Freelance Tech Partners
            </Text>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium relative transition ${
                  isActive
                    ? "text-sky-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-sky-600"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-700 hover:text-slate-900"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } border-t border-slate-200 bg-white/90 backdrop-blur`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? "text-sky-600"
                    : "text-slate-700 hover:text-slate-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
            © {establishedYear} DMBB Global
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
