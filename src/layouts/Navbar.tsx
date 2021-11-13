import { NavbarProducts } from "@constants/layout";
import { Box, Button, Fade, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "@assets/images/logo.svg";
import { useLayoutContext } from "@contexts/LayoutContext";
import { DrawerBar } from "./DrawerBar";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { BaseButton } from "@components/shared/Button";

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

const Btn = styled(BaseButton)(({ theme }) => ({
  padding: "0.5rem 1.25rem",
  borderRadius: "4px",
  fontSize: "0.8rem",
}));

const ResponsiveBtn = styled(Btn)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const TabsHighlight = styled("div")`
  background: hsl(0 0% 90.9%);
  backdrop-filter: blur(5px) contrast(200%);
  position: absolute;
  left: 0;
  border-radius: 10px;
  height: 32px;
  transition: 0.15s ease;
  transition-property: width, transform, opacity;
`;

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

  const [tabBoundingBox, setTabBoundingBox] = useState<DOMRect | undefined>(
    undefined
  );
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<
    DOMRect | undefined
  >(undefined);
  const [highlightedTab, setHighlightedTab] = useState(false);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  const highlightRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLInputElement>(null);

  const repositionHighlight = (
    e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    setTabBoundingBox(e.currentTarget.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef?.current?.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(true);
  };

  const resetHighlight = () => setHighlightedTab(false);

  const highlightStyles = {} as React.CSSProperties;

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "500ms";
    highlightStyles.opacity = highlightedTab ? 0.5 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <NavbarWrapper ref={ref}>
      <DrawerBar />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="0 2rem"
        sx={{ position: "relative" }}
        ref={wrapperRef}
        onMouseLeave={resetHighlight}
      >
        <TabsHighlight ref={highlightRef} style={highlightStyles} />
        <SideWrapper>
          <Link to="/">
            <img src={Logo} style={{ height: "12.5px" }} />
          </Link>
        </SideWrapper>
        <NavbarProductsWrapper>
          <Stack direction="row" spacing={0}>
            {NavbarProducts.map(({ label, path }, index) => (
              <ResponsiveBtn
                size="large"
                key={index}
                {...({ to: "/" + path } as any)}
                component={Link}
                onMouseOver={repositionHighlight}
              >
                {label}
              </ResponsiveBtn>
            ))}
          </Stack>
        </NavbarProductsWrapper>
        <SideWrapper>
          <Stack direction="row" spacing={0} padding=".5rem 0">
            <ResponsiveBtn onMouseOver={repositionHighlight}>
              shop
            </ResponsiveBtn>
            <ResponsiveBtn onMouseOver={repositionHighlight}>
              account
            </ResponsiveBtn>
            <Btn onMouseOver={repositionHighlight} onClick={toggleDrawer}>
              Menu
            </Btn>
          </Stack>
        </SideWrapper>
      </Grid>
    </NavbarWrapper>
  );
};
