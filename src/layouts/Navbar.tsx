import { Box, Button, Drawer, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.svg";

const NavbarProducts = [
  {
    label: "Model S",
    path: "models",
  },
  {
    label: "Model 3",
    path: "model3",
  },
  {
    label: "Model X",
    path: "modelx",
  },
  {
    label: "Model Y",
    path: "modely",
  },
  {
    label: "Solar Roof",
    path: "solar-roof",
  },
  {
    label: "Solar Panels",
    path: "solar-panel",
  },
];

/*
const NavbarPortal = [
  {
    label: "Shop",
    path: "shop",
  },
  {
    label: "Account",
    path: "account",
  },
  {
    label: "Menu",
    path: "menu",
  },
];*/

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  const handleResize = () => {
    const width = window.innerWidth;
    //const height = window.innerHeight;

    setIsMobile(width < 1200)
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div style={{ width: "100vw" }}>
      <React.Fragment>
        <Drawer
          anchor="right"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          style={{backdropFilter: "blur(5px)"}}
        >
          <Box width={300}>
            <Button>Hello</Button>
          </Box>
        </Drawer>
      </React.Fragment>
      <Box justifyContent="space-between" display="flex" padding="0 1rem">
        <Box>
          <img
            src={Logo}
            style={{ width: "100%", height: "12.5px", padding: "20px" }}
          />
        </Box>
        <Box display={isMobile ? "none" : "flex"}>
          <Stack direction="row" spacing={2}>
            {NavbarProducts.map(({ label }, index) => (
              <Button
                size="large"
                style={{
                  color: "#393c41",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
                key={index}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Box>
        <Box display="flex">
          <Stack direction="row" spacing={2} padding=".5rem 0">
            <Button
              size="large"
              style={{
                color: "#393c41",
                fontWeight: 600,
                textTransform: "capitalize",
                display: isMobile ? "none" : "block"
              }}
            >
              shop
            </Button>
            <Button
              size="large"
              style={{
                color: "#393c41",
                fontWeight: 600,
                textTransform: "capitalize",
                display: isMobile ? "none" : "block"
              }}
            >
              account
            </Button>
            <Button
              size="large"
              style={{
                color: "#393c41",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
              onClick={() => {
                setOpen(true);
              }}
            >
              Menu
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};
