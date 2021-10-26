import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, TableCell, Typography } from "@mui/material";
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
          <Box sx={{ margin: "0 auto", padding: "1.8rem 0" }}>
            <Stack direction="row" spacing={8}>
              <Box>
                <Stack direction="column" spacing={1}>
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
                <OutlineBtnWhite>ORDER NOW</OutlineBtnWhite>
              </Box>
            </Stack>
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black", height: "15vh" }}>
        <TitleWrapper>
          <AdsTitle>All-New Interior</AdsTitle>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/177c0faf-b852-47ea-a218-394368e15a20/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop)`,
        }}
      ></BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "black" }}
      ></BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <InfoFeature>
          <Stack direction="row">
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/9865e92b-731c-4f1a-9430-e984ee0001ca/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop)`,
              }}
            ></GalleryContainer>
            <InfoContainer>
              <Stack
                direction="column"
                spacing={1}
                sx={{
                  width: "80%",
                  margin: "auto 0",
                  float: "right",
                }}
              >
                <InfoTitle>Game from Anywhere</InfoTitle>
                <InfoSubTitle>
                  Up to 10 teraflops of processing power enables in-car gaming
                  on-par with today’s newest consoles. Wireless controller
                  compatibility lets you game from any seat.
                </InfoSubTitle>
              </Stack>
            </InfoContainer>
          </Stack>
          <Stack direction="row">
            <InfoContainer>
              <Stack
                direction="column"
                spacing={1}
                sx={{
                  width: "80%",
                  margin: "auto 0",
                  float: "left",
                }}
              >
                <InfoTitle>Stay Connected</InfoTitle>
                <InfoSubTitle>
                  Multi-device Bluetooth, wireless and USB-C charging for every
                  passenger, with enough power to fast-charge your tablets and
                  laptop.
                </InfoSubTitle>
              </Stack>
            </InfoContainer>
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/08d2e941-2be2-4e1a-bed9-924ac30fb115/bvlatuR/std/1040x584/MS-Interior-Grid-B-Desktop)`,
              }}
            ></GalleryContainer>
          </Stack>
          <Stack direction="row">
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/dcfc40cb-6b46-4be7-b173-be10e0c9143c/bvlatuR/std/1040x584/MS-Interior-Grid-C-Desktop)`,
              }}
            ></GalleryContainer>
            <InfoContainer>
              <Stack
                direction="column"
                spacing={1}
                sx={{
                  width: "80%",
                  margin: "auto 0",
                  float: "right",
                }}
              >
                <InfoTitle>Your Best Audio System</InfoTitle>
                <InfoSubTitle>
                  A 22-speaker, 960-watt audio system with active noise
                  canceling offers the best listening experience at home or on
                  the road.
                </InfoSubTitle>
              </Stack>
            </InfoContainer>
          </Stack>
          <Stack direction="row">
            <InfoContainer>
              <Stack
                direction="column"
                spacing={1}
                sx={{
                  width: "80%",
                  margin: "auto 0",
                  float: "left",
                }}
              >
                <InfoTitle>Real Storage</InfoTitle>
                <InfoSubTitle>
                  With front and rear trunks and fold-flat seats, Model S is a
                  luxury car where you can fit your bike without taking the
                  wheel off, and your luggage too.
                </InfoSubTitle>
              </Stack>
            </InfoContainer>
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop)`,
              }}
            ></GalleryContainer>
          </Stack>
        </InfoFeature>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white", height: "auto" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/06e710a1-0428-45e9-8945-580e80d77b55/bvlatuR/std/2880x1800/MS-Performance-Hero-Desktop"
          loading="lazy"
          style={{
            width: "100%",
            height: "75vh",
            objectFit: "cover",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ margin: "-10rem auto", padding: "1.8rem 0" }}>
            <Stack direction="row" spacing={8} textAlign="center">
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>1,020 hp</FeatureTitle>
                  <FeatureSubTitle>Peak power</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>9.23 s</FeatureTitle>
                  <FeatureSubTitle>@155 mph 1/4 mile</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>1.99 s</FeatureTitle>
                  <FeatureSubTitle>0-60 mph</FeatureSubTitle>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ padding: "3rem 0 6rem 0" }}>
          <Stack
            direction="row"
            spacing={15}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Plaid</SubTitleContent>
                <MainTitleContent>Beyond Ludicrous</MainTitleContent>
                <Box>
                  <OutlineBtnBlack>ORDER NOW</OutlineBtnBlack>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                With the longest range and quickest acceleration of any electric
                vehicle in production, Model S Plaid is the highest performing
                sedan ever built. Both Long Range and Plaid powertrains, with
                updated battery architecture, are capable of back-to-back,
                consistent 1/4 mile runs.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "#f5f5f5" }}
      ></BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white", height: "auto" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/06af56e3-91c4-4bad-8d2e-0a24f64ec2a8/bvlatuR/std/2880x1800/MS-Exterior-Hero-Desktop"
          loading="lazy"
          style={{
            width: "100%",
            height: "75vh",
            objectFit: "cover",
          }}
        />
        <Box sx={{ padding: "2rem 0" }}>
          <Stack
            direction="row"
            spacing={5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Exterior</SubTitleContent>
                <MainTitleContent>Designed for Efficiency</MainTitleContent>
                <Box>
                  <OutlineBtnBlack>ORDER NOW</OutlineBtnBlack>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                With the lowest drag coefficient on Earth and unmatched
                efficiency, Model S is built for speed and range. Together with
                a wider body and chassis, these elements help you go down the
                straight or around corners quicker than ever.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <InfoFeature>
          <Stack direction="row">
            <InfoContainer>
              <Stack
                direction="column"
                spacing={1}
                sx={{
                  width: "80%",
                  margin: "auto 0",
                  float: "left",
                }}
              >
                <InfoTitle>Responsive Performance</InfoTitle>
                <InfoSubTitle>
                  Staggered, performance-focused wheels and tires keep the car
                  planted and transfer even more power down to the road.
                </InfoSubTitle>
              </Stack>
            </InfoContainer>
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/2cf7296e-1bba-40b6-9490-929b47eb50cd/bvlatuR/std/1040x584/MS-Exterior-Grid-B-Desktop)`,
              }}
            ></GalleryContainer>
          </Stack>
          <Stack direction="row">
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/5207af00-08c6-4b97-83c2-72b82e429977/bvlatuR/std/1040x584/MS-Exterior-Grid-A-Desktop)`,
              }}
            ></GalleryContainer>
            <InfoContainer>
              <Stack
                direction="column"
                spacing={1}
                sx={{
                  width: "80%",
                  margin: "auto 0",
                  float: "right",
                }}
              >
                <InfoTitle>Optimized Aerodynamics</InfoTitle>
                <InfoSubTitle>
                  Attention to detail on all exterior surfaces makes Model S the
                  most aerodynamic production car on Earth.
                </InfoSubTitle>
              </Stack>
            </InfoContainer>
          </Stack>
          <Stack direction="row">
            <InfoContainer>
              <Stack
                direction="column"
                spacing={1}
                sx={{
                  width: "80%",
                  margin: "auto 0",
                  float: "left",
                }}
              >
                <InfoTitle>Refined Styling</InfoTitle>
                <InfoSubTitle>
                  Exterior design combines an iconic look with elegant
                  proportions.
                </InfoSubTitle>
              </Stack>
            </InfoContainer>
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/2b807bf9-bd89-46a3-97a3-2fecca31beaf/bvlatuR/std/1040x584/MS-Exterior-Grid-C-Desktop)`,
              }}
            ></GalleryContainer>
          </Stack>
        </InfoFeature>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b6761e24-0f64-483a-b868-50c5bab803bd/bvlatuR/std/2880x1800/MS-Range-Hero-Desktop"
              loading="lazy"
              style={{
                width: "72vw",
                height: "100vh",
                objectFit: "cover",
              }}
            />
            <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            >
              <Stack direction="column" padding="2.5rem 0 0 1.5rem">
                <SubTitleContent>Range</SubTitleContent>
                <MainTitleContent>Go Anywhere</MainTitleContent>
                <SubContent
                style={{padding: "1rem 0"}}>
                Travel farther on a single charge than any other electric vehicle—and keep going
                 with access to 25,000+ Superchargers globally. By combining up to 405 miles of
                 estimated range with Tesla fast charging technology, you’ll spend less time charging and even more time on the road.
                </SubContent>
              </Stack>
              <Box>
                <OutlineBtnBlack
                  style={{
                    padding: ".3rem 1.5rem",
                    marginLeft: "1.5rem",
                    marginBottom: "7rem",
                  }}
                >Order now</OutlineBtnBlack>
              </Box>
            </Box>
          </Stack>
        </Box>
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
