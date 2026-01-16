import React from "react";
import { Layout, Typography } from "antd";
import logo from "../../assets/logo/logoSet.png";

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white! border-t border-gray-200 px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-3">
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
        </div>

        {/* Center: Tagline */}
        <Text className="text-xs text-gray-500 text-center max-w-md">
          © {year} DMBB Global. All rights reserved.
        </Text>

      </div>
    </footer>
  );
};

export default Footer;
