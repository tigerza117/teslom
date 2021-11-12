import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const TitleWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
  margin: "auto",
}));

export const MainTitleContent = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  fontSize: "24px",
  margin: 0,
  padding: "0px 0px 8px",
}));

export const MainSubtitleContent = styled(Typography)(({ theme }) => ({
  color: "#BABABA",
  padding: "0px 0px 16px",
  fontWeight: 700,
}));

export const SubtitleContent = styled(Typography)(({ theme }) => ({
  color: "#BABABA",
  padding: "0px 0px 16px",
  fontSize: "0.875rem",
}));

export const FeatureContainer = styled(Box)(({ theme }) => ({
  margin: "auto",
}));

export const InfoFeatureWrapper = styled(Box)(({ theme }) => ({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5rem 0",
}));

export const GalleryContainer = styled(Box)(({ theme }) => ({
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "64vh",
  width: "133vh",
  paddingBottom: "20px",
  marginBottom: "20px",
}));

export const ButtonSlider = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  fontSize: "medium",
  padding: "10px",
}));

export const InfoContainer = styled(Box)(({ theme }) => ({
  height: "10vh",
  width: "80vh",
}));

export const PictureSliderContainer = styled(Box)(({ theme }) => ({
  width: "160vh",
  height: "77vh",
  backgroundPosition: "center",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  margin: "auto",
  display: "flex",
  padding: 0,
}));

export const PictureSliderImage = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  paddingBottom: "20px",
  marginBottom: "20px",
}));

export const SliderBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "#00000066",
  color: "#BABABA",
  border: "solid 2px white",
  zIndex: 10,
  height: "4vh",
}));
