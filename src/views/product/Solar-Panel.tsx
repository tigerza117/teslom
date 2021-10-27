import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Chat from "@layouts/ChatSupport";
import ExpandingLight from "@layouts/ExpandIcon-light";
import ShowCaseWrapper from "@layouts/ShowCase_SolarPanel";

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
  color: "black",
  padding: 0,
  transform: "translateY(20px)",
}));

const MainSubTitle = styled("h5")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1rem",
  padding: "1.5rem 0",
  color: "black",
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
  padding: ".3rem 3.5rem",
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

function SolarPanel() {
  return (
    <>
      <Chat />
      <ShowCaseWrapper />
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/45992f1c-a33a-4a04-b1f0-338aff182f8e/bvlatuR/std/2880x1800/_25-Hero-D)`,
        }}
      >
        <TitleWrapper>
          <Box sx={{ marginTop: "12vh" }}>
            <Stack direction="column" spacing={-1}>
              <MainTitle>Solar Roof</MainTitle>
              <MainSubTitle>
                Transform your roof and produce clean energy
              </MainSubTitle>
            </Stack>
          </Box>
          <Box sx={{ margin: "0 auto", padding: "1.8rem 0 0 0" }}>
            <Stack direction="row" spacing={12}>
              <Box>
                <Stack direction="column" spacing={-1.5}>
                  <FeatureTitle>
                    <img
                      style={{
                        height: "2.8rem",
                        margin: "0",
                      }}
                      src="https://www.tesla.com/sites/default/files/solarroof/v3/hero/solar-roof-hero-solar_badge.svg"
                      alt=""
                    />
                  </FeatureTitle>
                  <FeatureSubTitle
                    style={{
                      padding: "-2rem 0 0 0",
                    }}
                  >
                    Beautiful Solar
                    <br />
                    Without Compromise
                  </FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column">
                  <FeatureTitle>25-Year</FeatureTitle>
                  <FeatureSubTitle>
                    Tile
                    <br />
                    Warranty
                  </FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column">
                  <FeatureTitle>24/7</FeatureTitle>
                  <FeatureSubTitle>
                    Outage
                    <br />
                    Protection
                  </FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <OutlineBtnWhite>ORDER NOW</OutlineBtnWhite>
              </Box>
            </Stack>
            <ExpandingLight/>
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
      <video
            src="https://tesla-cdn.thron.com/delivery/public/video/tesla/1e3dd39b-49f4-43ff-895a-74fa93dddfdf/bvlatuR/WEBHD/_25-Savings-D"
            autoPlay
            muted
            loop
            style={{
              width: "73vw",
              height: "100vh",
              objectFit: "cover",
              objectPosition: "0 100%",
              float: "right",
            }}
          />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
      <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9ddad34a-7766-499d-b99e-65983e68f10a/bvlatuR/std/2090x1800/_25-Design-D"
            alt=""
            loading="lazy"
            style={{
              width: "73vw",
              height: "100vh",
              objectFit: "cover",
              objectPosition: "0 100%",
              float: "right",
            }}
          />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/173055ff-afe2-4114-947e-ba62cf8e05c6/bvlatuR/std/2880x1800/PW-Inverter-Hero-D"
            alt=""
            loading="lazy"
            style={{
              width: "100vw",
              height: "67vh",
              objectFit: "cover",
              objectPosition: "50%",
            }}
          />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
      <video
            src="https://www.tesla.com/sites/default/files/solarpanels/power-on/solar-assessment-desktop.mp4"
            autoPlay
            muted
            style={{
              width: "100vw",
              height: "67vh",
              objectFit: "cover",
              objectPosition: "50%",
            }}
          />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
      <img
            src="https://www.tesla.com/sites/default/files/solarpanels/inverter/Inverter_V8_D.jpg"
            alt=""
            loading="lazy"
            style={{
              width: "73vw",
              height: "100vh",
              objectFit: "cover",
              objectPosition: "50% 100%",
              float: "right",
            }}
          />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
      </BackgroundWrapper>
    </>
  );
}

export default SolarPanel;
