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
  color: "white",
  padding: 0,
  transform: "translateY(20px)",
}));

const MainSubTitle = styled("h5")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1rem",
  padding: "1.5rem 0",
  color: "white",
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

function SolarRoof() {
  return (
    <>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/b614dd66-cc50-4cba-8c15-186b95bb4a8d/bvlatuR/std/2880x1800/sr-storm-desktop)`,
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
          <Box sx={{ margin: "0 auto", padding: "1.8rem 0" }}>
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
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/de6a52fa-f842-422e-a248-c44f036154a6/bvlatuR/std/2880x1800/SR-Design-D"
            alt=""
            loading="lazy"
            style={{
              width: "100vw",
              height: "72vh",
              objectFit: "cover",
              objectPosition: "0 60%",
            }}
          />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
      <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2d6d1f7e-4462-442a-ba8e-d70dec628948/bvlatuR/std/2880x1800/powerwall-energy-storage-desktop"
            alt=""
            loading="lazy"
            style={{
              width: "73vw",
              height: "100vh",
              objectFit: "cover",
              float: "right",
            }}
          />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
      <video
            src="https://www.tesla.com/sites/default/files/solarroof/v3/durability/SR-Durability-Desktop.mp4"
            style={{
              width: "74vw",
              height: "100vh",
              objectFit: "cover",
              float: "left",
            }}
          />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <img
            src="https://www.tesla.com/sites/default/files/solarroof/v3/inverter/Inverter_V8_D.jpg"
            alt=""
            loading="lazy"
            style={{
              width: "73vw",
              height: "100vh",
              objectFit: "cover",
              float: "right",
            }}
          />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/7218535a-a8b7-4630-b4d5-17edcf5daa1d/bvlatuR/std/2880x1800/SR-tesla-app-D"
            alt=""
            loading="lazy"
            style={{
              width: "100vw",
              height: "65vh",
              objectFit: "cover",
              objectPosition: "0 51%",
            }}
          />
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/4aedd73e-cd73-4051-9cc7-68955ad4646d/bvlatuR/std/2880x1800/SR-Value-D"
            alt=""
            loading="lazy"
            style={{
              width: "73vw",
              height: "100vh",
              objectFit: "cover",
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

export default SolarRoof;
