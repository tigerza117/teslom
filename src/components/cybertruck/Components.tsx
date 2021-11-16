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
  position: "relative",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "40px",
  textTransform: "uppercase",
  backgroundColor: "transparent",
  fontSize: "12px",
  fontWeight: "bold",
  letterSpacing: 2,
  color: "white",
  border: "none",
  outline: "none",
  cursor: "pointer",
  transition :"0.5s ease",
  zIndex: 1,
  "&:before": {
      position: "absolute",
      display: "block",
      content: "''",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      clipPath: "polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 4px,4px 4px,4px calc(100% - 4px),calc(100% - 12px) calc(100% - 4px),calc(100% - 4px) calc(100% - 12px),calc(100% - 4px) 4px,0 4px)",
      backgroundColor: "#fff",
      zIndex: -1,
      opacity: 1,
  },
  "&:after": {
      position: "absolute",
      display: "block",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      clipPath: "polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%)",
      backgroundColor: "#fff",
      opacity: 0,
      zIndex: -1,
  },
  "&:hover": {
      animation: "turn-on--outline 1s",
      animationFillMode: "forwards",
      filter: "drop-shadow(0 0 8px rgba(255,255,255,.33))",
      "&:before": {
          animation: "turn-on--outline-before 1s",
      },
      "&:after": {
          animation: "turn-on--outline-after 1s",
          animationFillMode: "forwards",
          backgroundColor: "#fff",
      },
  },
  "@keyframes turn-on--outline ": {
      "0%": {
          color: "#fff",
      },
    "48%": {
          color: "#fff"
    },
    "to": {
          color: "#000",
    },
  },
    "@keyframes turn-on--outline-before": {
        "0%": {
            opacity: 1,
        },
        "8%": {
            opacity: .5,
        },
        "16%": {
            opacity: 1,
        },
        "24%": {
            opacity: .5,
        },
        "32%": {
            opacity: 1,
        },
        "40%": {
            opacity: .5,
        },
        "48%": {
            opacity: 1,
        },
        "to": {
            opacity: 1,
        },
    },
    "@keyframes turn-on--outline-after": {
        "0%": {
            opacity: 0,
        },
        "48%": {
            opacity: 0,
        },
        "to": {
            opacity: 1,
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