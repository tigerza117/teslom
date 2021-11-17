import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import {BaseButton} from "@components/shared/Button";

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
  padding: "2rem 0",
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
  alignItems: "center",
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


export const SlidershowContent = styled(Box)(({theme}) => ({
  width: "660px",
  height: "63px",
  color: "white",
  padding: "0 0 0 180px",
  margin: "auto",
  display: "block"
}));


export const OrderNowBtn = styled(Button)(({theme}) => ({
  color: "#fff",
  backgroundColor: "#fff",
  textTransform: "uppercase",
  border: "none",
  borderRadius: "0px",
  cursor: "pointer",
  transition: ".5s ease",
  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - .625rem), calc(100% - .625rem) 100%, 0 100%)",
  fontWeight: "bold",
  fontSize: ".75rem",
  height: "2.5rem",
  width: "11rem",
  letterSpacing: ".125rem",
  padding: "0 1.875rem",
  position: "relative",
  display: "block",
  margin: "auto",
  "&:after": {
    content: "''",
    position: "absolute",
    display: "block",
    backgroundColor: "#000",
    top: ".18rem",
    left: ".18rem",
    width: "calc(100% - 2 * .18rem)",
    height: "calc(100% - 2 * .18rem)",
    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - .625rem), calc(100% - .625rem) 100%, 0 100%)",
    zIndex: -1,
  },
  "&:hover": {
    color: "#000",
    backgroundColor: "#fff",
    transition: ".5s ease .48",
    animation: "lighting-fx 1s forwards",
    "&:after": {
      backgroundColor: "#fff",
    },
  },
  "@keyframes lighting-fx": {
    "0%": {
      opacity: 1
    },
    "8%": {
      opacity: .75
    },
    "16%": {
      opacity: 1
    },
    "24%": {
      opacity: .75
    },
    "32%": {
      opacity: 1
    },
    "40%": {
      opacity: .75
    },
    "48%": {
      opacity: 1
    },
    "to": {
      opacity: 1
    },
  },
}));

export const Carousel = styled(Box)(({theme}) => ({
  width: "16px",
  height: "16px",
  border: "solid white 3px",
  backgroundColor: "transparent",
  ":hover": {
    backgroundColor: "red",
  },
  cursor: "pointer",
}));

export const TitleSlideShow = styled(Box)(({theme}) => ({
  color: "#fff",
  fontSize: "1.5rem",
  textTransform: "uppercase",
  width: "360px",
  height: "80px",
  letterSpacing: "3px",
  fontWeight: 700,
  position: "relative",
}));