import { Button, Drawer, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useLayoutContext } from "../contexts/LayoutContext";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LanguageIcon from "@mui/icons-material/Language";
import { DrawerBarList } from "@constants/layout";

const Btn = styled(Button)(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  justifyContent: "flex-start",
  ":hover": {
    backgroundColor: "#eee",
  },
  borderRadius: 13,
  margin: "0.26rem 0",
}));

const BtnText = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: "#393c41",
  textTransform: "capitalize",
  fontWeight: 600,
  paddingLeft: "0.3rem",
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
      <Box width={280} sx={{ margin: "1rem" }}>
        <Box
          sx={{
            padding: "5rem 1rem",
            flexDirection: "column",
          }}
        >
          {DrawerBarList.map(({ icon, label }, index) => (
            <Btn key={index}>
              <BtnText
                sx={{
                  svg: {
                    padding: ".3rem .8rem 0 0",
                    fontSize: "1.6rem",
                  },
                }}
              >
                {icon}
                {label}
              </BtnText>
            </Btn>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "280px",
          backgroundColor: "#fff",
          padding: "2rem 0",
          display: "flex",
          justifyContent: "flex-end",
          position: "fixed",
        }}
      >
        <CloseRoundedIcon
          sx={{
            ":hover": {
              backgroundColor: "#eee",
              borderRadius: "100%",
              pointerEvents: "visible",
            },
            padding: ".2rem",
            color: "#000",
            transition: ".2s linear",
          }}
          onClick={() => {
            toggleDrawer();
          }}
        />
      </Box>
    </Drawer>
  );
};
