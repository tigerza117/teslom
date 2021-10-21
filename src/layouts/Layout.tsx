import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Box } from "@mui/system";
import LayoutContext from "../contexts/LayoutContext";

export const Layout: React.FC = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    setIsMobile(width < 1200);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        isMobile: isMobile,
        isDrawerOpen: isDrawerOpen,
        toggleDrawer: toggleDrawer,
      }}
    >
      <Box sx={{ minHeight: "100vh" }}>
        <Navbar />
        {children}
      </Box>
    </LayoutContext.Provider>
  );
};
