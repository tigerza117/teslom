import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";

export const BackgroundWrapper = styled(Box)(({}) => ({
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  scrollSnapAlign: "start",
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
  margin: "auto",
}));

export const HomeFeatureWrapper = styled(Box)(({ theme }) => ({
  width: "210px",
  margin: "0",
  padding: "0",
}));

export const InfoFeatureWrapper = styled(Box)(({ theme }) => ({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5rem 0",
}));

export const BtnFeatTitle = styled("h5")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.5rem",
  margin: "0",
  padding: "0",
  color: "#393c41",
  textTransform: "capitalize",
}));

export const ButtonStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  padding: "1rem",
  textAlign: "left",
}));

export const VdoOverlay = styled(Box)(({ theme }) => ({
  width: "20%",
  padding: "0 10rem",
  marginTop: "-65vh",
  marginBottom: "30vh",
}));
