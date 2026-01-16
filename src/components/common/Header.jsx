import React from "react";
import { Typography } from "antd";
import logo from "../../assets/logo/logoSet.png";

const { Title, Text } = Typography;

const Header = () => {
  const establishedYear = `20XX`;

  return (
    <header className="h-auto! leading-normal! px-4 md:px-12 py-4 border-b border-gray-400 bg-gray-400">
      <div className="max-w-7xl bg-gray-400 mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        {/* Logo */}
        <img
          src={logo}
          alt="DMBB Global"
          className="h-16 md:h-32 w-auto object-contain"
        />

        {/* Text Block */}
        <div className="text-center md:text-left leading-tight">
          <Title
            level={2}
            className="mb-1! text-gray-900! font-semibold tracking-tight"
          >
            DMBB Global Freelance Tech Partners & Network
          </Title>

          {/* Meta Info */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <Text className="text-xs text-gray-600">
              Partners:{" "}
              <span className="font-medium text-gray-800">
                Dravinanshu Mishra
              </span>{" "}
              & <span className="font-medium text-gray-800">Biplab Biswas</span>
            </Text>

            <span className="hidden md:inline text-gray-300">|</span>

            <Text className="text-xs text-gray-500">
              Established 5 January {establishedYear}
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
