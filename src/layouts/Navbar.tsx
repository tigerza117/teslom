import { NavbarProducts } from "@constants/layout";
import { Box, Button, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "@assets/images/logo.svg";
import { useLayoutContext } from "@contexts/LayoutContext";
import { DrawerBar } from "./DrawerBar";

const SideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  minInlineSize: "245px",
  [theme.breakpoints.down("lg")]: {
    minInlineSize: "0px",
  },
}));

export const Navbar = () => {
  const { isMobile, toggleDrawer } = useLayoutContext();

  return (
    <Box sx={{ width: "100%", position: "fixed", top: 0, left: 0 }}>
      <DrawerBar />
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
                toggleDrawer();
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
