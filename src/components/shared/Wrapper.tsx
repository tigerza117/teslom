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

export const SubFeatureWrapper = styled(Box)(({ theme }) => ({
  width: "340px",
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
  marginBottom: "10vh",
}));

export const SliderAdjust = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const SliderText = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  paddingTop: "1.2rem",
}));

export const HorizonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "90vh",
}));

export const VerticalWrapper = styled(Box)(({ theme }) => ({
  width: "45%",
}));
