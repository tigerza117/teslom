import { NavbarProducts } from "@constants/layout";
import { Box, Button, Fade, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "@assets/images/logo.svg";
import { useLayoutContext } from "@contexts/LayoutContext";
import { DrawerBar } from "./DrawerBar";
import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";

interface CustomProps {}

const NavbarWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "fixed",
  left: 0,
  opacity: 0,
  zIndex: 999,
}));

const NavbarProductsWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const SideWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  minInlineSize: "245px",
  [theme.breakpoints.down("lg")]: {
    minInlineSize: "0px",
  },
}));

const Btn = styled(Button)<{ mobileHide?: boolean }>(
  ({ theme, mobileHide }) => ({
    color: "#393c41",
    fontWeight: 600,
    textTransform: "capitalize",
    [theme.breakpoints.down("lg")]: {
      display: mobileHide ? "none" : "",
    },
  })
);

export const Navbar = () => {
  const { toggleDrawer } = useLayoutContext();
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      duration: 0.8,
      opacity: 1,
    });
    return () => {};
  }, []);

  return (
    <NavbarWrapper ref={ref}>
      <DrawerBar />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="0 2rem"
      >
        <SideWrapper>
          <img src={Logo} style={{ height: "12.5px" }} />
        </SideWrapper>
        <NavbarProductsWrapper>
          <Stack direction="row" spacing={2}>
            {NavbarProducts.map(({ label }, index) => (
              <Btn size="large" key={index}>
                {label}
              </Btn>
            ))}
          </Stack>
        </NavbarProductsWrapper>
        <SideWrapper>
          <Stack direction="row" spacing={2} padding=".5rem 0">
            <Btn size="large" mobileHide={true}>
              shop
            </Btn>
            <Btn size="large" mobileHide={true}>
              account
            </Btn>
            <Btn
              size="large"
              onClick={() => {
                toggleDrawer();
              }}
            >
              Menu
            </Btn>
          </Stack>
        </SideWrapper>
      </Grid>
    </NavbarWrapper>
  );
};
