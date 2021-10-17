import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Drawer, Grid, Stack, Typography } from "@mui/material";
import { fontSize, styled } from "@mui/system";
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

const SidebarList = [
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
  {
    label: "Existing Inventory",
    path: "existing-inventory",
  },
  {
    label: "Used Inventory",
    path: "used-inventory",
  },
  {
    label: "Trade-in",
    path: "trade-in",
  },
  {
    label: "Test Drive",
    path: "test-drive",
  },
  {
    label: "Powerwall",
    path: "powerwall",
  },
  {
    label: "Commercial Energy",
    path: "commercial-energy",
  },
  {
    label: "Utilities",
    path: "utilities",
  },
  {
    label: "Charging",
    path: "charging",
  },
  {
    label: "Find Us",
    path: "find-us",
  },
  {
    label: "Support",
    path: "support",
  },
  {
    label: "Investor Relations",
    path: "investor-relations",
  },
  {
    label: "Shop",
    path: "shop",
  },
  {
    label: "Account",
    path: "account",
  },
  {
    label: "More",
    path: "more",
  },
];

const SideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  minInlineSize: "245px",
  [theme.breakpoints.down("lg")]: {
    minInlineSize: "0px",
  },
}));

const MenuBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  justifyContent: "flex-start",
  ":hover": {
    backgroundColor: "#eee",
  },
  borderRadius: 13,
  margin: "0.26rem 0",
}));

const MenuBtnText = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: "#393c41",
  textTransform: "capitalize",
  fontWeight: 500,
  paddingLeft: "0.3rem",
}));

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

    setIsMobile(width < 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", position: "fixed", top: 0, left: 0 }}>
      <React.Fragment>
        <Drawer
          anchor="right"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          style={{ backdropFilter: "blur(5px)" }}
        >
          <Box width={280} sx={{ margin: "1rem" }}>
            <Box
              sx={{
                width: "100%",
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <Button
                sx={{
                  ":hover": {
                    backgroundColor: "#fff",
                    pointerEvents: "none",
                  },
                  padding: 0,
                  margin: 0,
                }}
              >
                <CloseIcon
                  sx={{
                    ":hover": {
                      backgroundColor: "#eee",
                      borderRadius: "100%",
                      pointerEvents: "visible",
                    },
                    width: "auto",
                    padding: "0.1rem",
                    color: "#000",
                  }}
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "1rem",
                flexDirection: "column",
              }}
            >
              {SidebarList.map(({ label }, index) => (
                <MenuBtn>
                  <MenuBtnText>{label}</MenuBtnText>
                </MenuBtn>
              ))}
            </Box>
          </Box>
        </Drawer>
      </React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="0 2rem"
      >
        <SideBox>
          <img src={Logo} style={{ height: "12.5px" }} />
        </SideBox>
        <Box display={isMobile ? "none" : "flex"}>
          <Stack direction="row" spacing={2}>
            {NavbarProducts.map(({ label }, index) => (
              <Button
                size="large"
                sx={{
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
        <SideBox>
          <Stack direction="row" spacing={2} padding=".5rem 0">
            <Button
              size="large"
              style={{
                color: "#393c41",
                fontWeight: 600,
                textTransform: "capitalize",
                display: isMobile ? "none" : "block",
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
                display: isMobile ? "none" : "block",
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
        </SideBox>
      </Grid>
    </Box>
  );
};
