import { Box, Button, Stack } from "@mui/material";
import React from "react";
import Logo from "../assets/images/logo.svg";
import { Navside } from "./Sidebar";

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
  return (
    <div style={{ width: "100vw" }}>
      <Box justifyContent="space-between" display="flex" padding="0 1rem">
        <Box>
          <img
            src={Logo}
            style={{ width: "100%", height: "12.5px", padding: "20px"}}
          />
        </Box>
        <Box display="flex">
          <Stack direction="row" spacing={2}>
            {NavbarProducts.map(({ label }, index) => (
              <Button size="large" style={{color: "#393c41", fontWeight: "600", textTransform:"capitalize"}} key={index}>
                {label}
              </Button>
            ))}
          </Stack>
        </Box>
        <Box display="flex" >
          <Navside />
        </Box>
      </Box>
    </div>
  );
};
