import { NavbarProducts } from "@constants/layout";
import { Box, Button, Fade, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "@assets/images/logo.svg";
import { useLayoutContext } from "@contexts/LayoutContext";
import { DrawerBar } from "./DrawerBar";
import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

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

const Btn = styled(Button)(({ theme }) => ({
  color: "#393c41",
  fontWeight: 600,
  textTransform: "capitalize",
}));

const ResponsiveBtn = styled(Btn)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

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
            {NavbarProducts.map(({ label, path }, index) => (
              <ResponsiveBtn
                size="large"
                key={index}
                {...({ to: "/" + path } as any)}
                component={Link}
              >
                {label}
              </ResponsiveBtn>
            ))}
          </Stack>
        </NavbarProductsWrapper>
        <SideWrapper>
          <Stack direction="row" spacing={2} padding=".5rem 0">
            <ResponsiveBtn size="large">shop</ResponsiveBtn>
            <ResponsiveBtn size="large">account</ResponsiveBtn>
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
