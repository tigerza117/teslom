import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

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

const OrderBtn = styled(Button)(({ theme }) => ({
  fontSize: ".8rem",
  padding: ".3rem 2.5rem",
  borderRadius: "25px",
  border: "3px solid white",
  boxShadow: "none",
  color: "white",
  marginTop: ".8rem",
}));

const AdsTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  fontSize: "1.8rem",
  margin: "auto 0",
  "&::after" : {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "40vh",
    marginTop: "2vh",
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgb(0, 0, 0, 0))",
  }
}));

function ModelS() {
  return (
    <>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop)`,
        }}
      >
        <TitleWrapper>
          <Box sx={{ marginTop: "12vh" }}>
            <Stack direction="column" spacing={-1}>
              <MainTitle>Model S</MainTitle>
              <MainSubTitle>Plaid</MainSubTitle>
            </Stack>
          </Box>
          <Box sx={{margin:"0 auto", padding: "1.8rem 0"}}>
            <Stack direction="row" spacing={8}>
              <Box>
                <Stack direction="column" spacing={1} >
                  <FeatureTitle>396 mi</FeatureTitle>
                  <FeatureSubTitle>Range (EPA est.)</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>1.99 s</FeatureTitle>
                  <FeatureSubTitle>0-60 mph*</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>200 mph</FeatureTitle>
                  <FeatureSubTitle>Top Speed</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>1,020 hp</FeatureTitle>
                  <FeatureSubTitle>Peak Power</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <OrderBtn>ORDER NOW</OrderBtn>
              </Box>
            </Stack>
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "black",
        height: "15vh",
       }}
      >
        <TitleWrapper>
          <AdsTitle>All-New Interior</AdsTitle>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/177c0faf-b852-47ea-a218-394368e15a20/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop)`,
        }}
      >
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "black" }}
      >

      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/06e710a1-0428-45e9-8945-580e80d77b55/bvlatuR/std/2880x1800/MS-Performance-Hero-Desktop"
          loading="lazy"
          style={{
            width: "100%",
            height: "75vh",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "#f5f5f5" }}
      ></BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/06af56e3-91c4-4bad-8d2e-0a24f64ec2a8/bvlatuR/std/2880x1800/MS-Exterior-Hero-Desktop"
          loading="lazy"
          style={{
            width: "100%",
            height: "75vh",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "black" }}
      ></BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b6761e24-0f64-483a-b868-50c5bab803bd/bvlatuR/std/2880x1800/MS-Range-Hero-Desktop"
          loading="lazy"
          style={{
            width: "80vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "white" }}
      ></BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b7e5f13a-e8f8-4428-b29e-b2ba6cf5220b/bvlatuR/std/1920x1080/MS-Safety-Hero-Desktop"
          loading="lazy"
          style={{
            width: "80vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <video
          src="https://tesla-cdn.thron.com/delivery/public/video/tesla/65011bbb-6f1c-422e-9e7a-727ba24bad15/bvlatuR/WEBHD/autopilot"
          style={{
            width: "100%",
            height: "75vh",
            objectFit: "cover",
          }}
          autoPlay
          loop
          preload="auto"
        />
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "white" }}
      ></BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ea201786-4dec-4ca2-b266-c7a180443853/bvlatuR/std/1440x1080/MS-Specs-Hero-Desktop"
          loading="lazy"
          style={{
            width: "50vw",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1c9e3fa8-7eba-4d75-bf00-03a3dbdd6d06/bvlatuR/std/1660x920/MS-Order-Hero-Desktop"
          loading="lazy"
          style={{
            width: "50vw",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </BackgroundWrapper>
    </>
  );
}

export default ModelS;
