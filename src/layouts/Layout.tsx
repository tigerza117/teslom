import React, { Component, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Box } from "@mui/system";
import LayoutContext from "@contexts/LayoutContext";
import Footer from "./Footer";
import ChatSupport from "./ChatSupport";
import { SnapContainer } from "@components/shared/Container";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ViewAction } from "schema/types";

export const Layout: React.FC = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isDark, setDark] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [textColor, setTextColor] = useState("#181B21");

  const handleResize = () => {
    const width = window.innerWidth;
    setIsMobile(width < 1200);
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
        isDark: isDark,
        isDrawerOpen: isDrawerOpen,
        heroColor: textColor,
        toggleDrawer: () => {
          setIsDrawerOpen(!isDrawerOpen);
        },
        setDark: (d: boolean) => {
          setDark(d);
          setTextColor(d ? "#181B21" : "white");
        },
        callViewAction: (a: ViewAction) => {
          switch (a) {
            case ViewAction.OPENING:
              window.history.scrollRestoration = "manual";
              break;
            case ViewAction.OPENED:
              if (document.getElementById("hero") !== null) {
                gsap.to(".nav", {
                  scrollTrigger: {
                    trigger: "#hero",
                    scrub: true,
                    start: "80% 0%",
                    end: "100% 0%",
                    id: "hero",
                  },
                  display: "none",
                  opacity: 0,
                });
                gsap.to(".scroll-up", {
                  scrollTrigger: {
                    trigger: "#hero",
                    scrub: true,
                    start: "90% 0%",
                    end: "100% 0%",
                  },
                  display: "inline",
                  opacity: 1,
                });
                gsap.set(".show", { y: 100, opacity: 0 });

                ScrollTrigger.batch(".show", {
                  onEnter: (batch) =>
                    gsap.to(batch, {
                      opacity: 1,
                      y: 0,
                      stagger: { each: 0.15, grid: [1, 3] },
                      overwrite: true,
                    }),
                  onLeaveBack: (batch) =>
                    gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
                });
              }
              break;
            case ViewAction.CLOSED:
              ScrollTrigger.getAll().forEach((s) => {
                s.kill();
              });
              break;
          }
        },
      }}
    >
      <>
        <Box
          className="layout__main__wrapper"
          sx={{ minHeight: "100vh", position: "relative" }}
        >
          <Navbar />
          <ChatSupport />
          <Box
            className="layout__content__wrapper"
            style={{ minHeight: "100vh" }}
          >
            {children}
          </Box>
          <Footer />
        </Box>
      </>
    </LayoutContext.Provider>
  );
};
