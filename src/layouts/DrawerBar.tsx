import { Button, Drawer, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useLayoutContext } from "@contexts/LayoutContext";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { DrawerBarList } from "@constants/layout";
import { Link } from "react-router-dom";

const DrawerWrapper = styled(Box)(({ theme }) => ({
  margin: "1rem",
  width: "280px",
}));

const MenuWrapper = styled(Box)(({ theme }) => ({
  padding: "5rem 1rem",
  flexDirection: "column",
}));

const MenuLink = styled(Button)(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  justifyContent: "flex-start",
  ":hover": {
    backgroundColor: "#eee",
  },
  borderRadius: 13,
  margin: "0.25rem 0",
}));

const TextLink = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: "#393c41",
  textTransform: "capitalize",
  fontWeight: 600,
  svg: {
    padding: ".3rem .8rem 0 0",
    fontSize: "1.6rem",
  },
}));

const CloseWrapper = styled(Box)(({ theme }) => ({
  width: "280px",
  backgroundColor: "#fff",
  padding: "2rem 0",
  display: "flex",
  justifyContent: "flex-end",
  position: "fixed",
}));

const CloseBtn = styled(CloseRoundedIcon)(({ theme }) => ({
  ":hover": {
    backgroundColor: "#eee",
    borderRadius: "100%",
    pointerEvents: "visible",
  },
  cursor: "pointer",
  padding: ".2rem",
  color: "#000",
  transition: ".2s linear",
}));

export const DrawerBar = () => {
  const { isDrawerOpen, toggleDrawer } = useLayoutContext();

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => {
        toggleDrawer();
      }}
      style={{ backdropFilter: "blur(5px)" }}
    >
      <DrawerWrapper>
        <MenuWrapper>
          {DrawerBarList.map(({ label, path }, index) => (
            <MenuLink
              key={index}
              {...({ to: "/" + path } as any)}
              component={Link}
            >
              <TextLink>{label}</TextLink>
            </MenuLink>
          ))}
        </MenuWrapper>
      </DrawerWrapper>
      <CloseWrapper>
        <CloseBtn
          onClick={() => {
            toggleDrawer();
          }}
        />
      </CloseWrapper>
    </Drawer>
  );
};
