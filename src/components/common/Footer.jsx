import React from "react";
import { Layout, Typography } from "antd";
import { motion as Motion } from "framer-motion";
import logo from "../../assets/logo/logoSet.png";

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

// Variants
const footerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Motion.footer
      variants={footerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white! border-t border-gray-200 px-6 md:px-12 py-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Logo + Brand */}
        <Motion.div
          variants={footerItem}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="DMBB Global"
            className="h-10 w-auto object-contain"
          />

          <div className="leading-tight">
            <Text className="block text-sm font-semibold text-gray-800">
              DMBB Global Freelance Tech Partners & Network
            </Text>
            <Text className="block text-xs text-gray-500">
              Building scalable web & mobile solutions for modern businesses
            </Text>
          </div>
        </Motion.div>

        {/* Center: Copyright */}
        <Motion.div variants={footerItem}>
          <Text className="text-xs text-gray-500 text-center max-w-md">
            © {year} DMBB Global. All rights reserved.
          </Text>
        </Motion.div>

      </div>
    </Motion.footer>
  );
};

export default Footer;
