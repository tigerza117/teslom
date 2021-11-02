import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import Chat from "@layouts/ChatSupport";

const BackgroundWrapper = styled(Box)(({ theme }) => ({
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
}));

const TitleWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
  margin: "auto",
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "2.5rem",
  marginBottom: 0,
  color: "#181b21",
  padding: 0,
  transform: "translateY(20px)",
}));

const MainSubTitle = styled("h5")(({ theme }) => ({
  fontWeight: 200,
  fontSize: "1.2rem",
  padding: "1.3rem 0",
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  fontSize: "1.8rem",
}));

const FeatureSubTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 500,
  fontSize: "0.8rem",
}));

const OutlineBtnWhite = styled(Button)(({ theme }) => ({
  fontSize: ".8rem",
  padding: ".3rem 2.5rem",
  borderRadius: "25px",
  border: "3px solid white",
  boxShadow: "none",
  color: "white",
  marginTop: ".8rem",
}));

const OutlineBtnBlack = styled(Button)(({ theme }) => ({
  fontSize: ".8rem",
  padding: ".3rem 2.5rem",
  borderRadius: "25px",
  border: "3px solid black",
  boxShadow: "none",
  color: "black",
  marginTop: ".8rem",
}));

const AdsTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  fontSize: "1.8rem",
  margin: "auto 0",
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "40vh",
    marginTop: "2vh",
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgb(0, 0, 0, 0))",
  },
}));

const InfoFeature = styled(Box)(({ theme }) => ({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5rem 0",
}));

const GalleryContainer = styled(Box)(({ theme }) => ({
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "45vh",
  width: "80vh",
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  height: "45vh",
  width: "80vh",
  verticalAlign: "middle",
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 700,
  fontSize: ".9rem",
  padding: "6rem 0 0 0",
}));

const InfoSubTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 500,
  fontSize: "0.9rem",
}));

const MainTitleContent = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.8rem",
  margin: 0,
  color: "#181b21",
  padding: 0,
}));

const SubTitleContent = styled("h5")(({ theme }) => ({
  fontWeight: 200,
  fontSize: "1.2rem",
  margin: "0",
  padding: "0",
}));

const SubContent = styled("h5")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1rem",
  margin: "0",
  padding: "0",
  color: "#393c41",
}));

const TriBtnTitle = styled("h5")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1rem",
  margin: "0",
  padding: "0",
  color: "#393c41",
  textTransform: "capitalize",
}));

const TriBtnContent = styled("h5")(({ theme }) => ({
  fontWeight: 500,
  fontSize: ".75rem",
  margin: "0",
  padding: "0",
  color: "#393c41",
  textTransform: "capitalize",
}));

const BtnFeatTitle = styled("h5")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.5rem",
  margin: "0",
  padding: "0",
  color: "#393c41",
  textTransform: "capitalize",
}));

const MapButton = styled("h5")(({ theme }) => ({
  width: "12rem",
  borderTop: "3px solid black",
  borderRadius: "0",
}));

const ButtonStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  padding: "1rem",
  textAlign: "left",
}));

const HomeFeatureWrapper = styled(Box)(({ theme }) => ({
  width: "210px",
  margin: "0",
  padding: "0",
}));

const SpecTitle = styled("h5")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "2rem",
  margin: "0",
  padding: "0",
  color: "#393c41",
  "& span": {
    fontWeight: 300,
  },
}));

const SpecUl = styled("ul")(({ theme }) => ({
  listStyleType: "none",
  display: "block",
  width: "250px",
  margin: "0",
  padding: "2rem 0",
}));

const Specli = styled("li")(({ theme }) => ({
  display: "list-item",
  color: "white",
  margin: "0",
  padding: "0",
  lineHeight: "6px",
  "&::before": {
    content: "''",
    display: "block",
    blockSize: "1px",
    width: "2rem",
    backgroundColor: "#8f8f8f",
  },
}));

const SpecSubText = styled("p")(({ theme }) => ({
  color: "white",
  margin: "1rem 0 2rem 0",
  padding: "0",
}));

function ModelS() {
  return (
    <>
    </>
  );
}

export default ModelS;
