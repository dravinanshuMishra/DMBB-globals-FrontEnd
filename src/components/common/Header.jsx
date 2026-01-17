import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Typography } from "antd";
import { FiMenu, FiX } from "react-icons/fi";
import { motion as Motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/logoSet.png";

const { Title, Text } = Typography;

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const mobileMenuContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const mobileMenuItem = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const Header = () => {
  const establishedYear = "2025";
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("dmmb:lastRoute", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Motion.header
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="sticky top-0 z-50 bg-[linear-gradient(to_bottom_right,#eef2ff,#ffffff,#e0e7ff)] border-b border-slate-200 backdrop-blur"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-16 py-4 flex items-center justify-between">
          {/* LOGO (comes first) */}
          <Motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
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
          </Motion.div>

          {/* DESKTOP NAV (one by one) */}
          <Motion.nav
            variants={containerVariants}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <Motion.div key={link.path} variants={itemVariants}>
                <NavLink
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
              </Motion.div>
            ))}
          </Motion.nav>

          {/* MOBILE BUTTON */}
          <Motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-700"
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </Motion.button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <Motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuContainer}
              className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur"
            >
              <Motion.nav className="flex flex-col px-6 py-4 gap-4">
                {navLinks.map((link) => (
                  <Motion.div key={link.path} variants={mobileMenuItem}>
                    <NavLink
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
                  </Motion.div>
                ))}

                <Motion.div
                  variants={mobileMenuItem}
                  className="pt-4 border-t border-slate-200 text-xs text-slate-500"
                >
                  © {establishedYear} DMBB Global
                </Motion.div>
              </Motion.nav>
            </Motion.div>
          )}
        </AnimatePresence>
      </Motion.header>
    </>
  );
};

export default Header;
