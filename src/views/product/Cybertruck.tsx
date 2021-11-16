import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React, { useState, useEffect, useRef } from "react";
import { CybertruckPictureSlider } from "@constants/cybertruckSlider";

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

const MainTitleContent = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  fontSize: "24px",
  margin: 0,
  padding: "0px 0px 8px",
}));

const MainSubtitleContent = styled(Typography)(({ theme }) => ({
  color: "#BABABA",
  padding: "0px 0px 16px",
  fontWeight: 700,
}));

const SubtitleContent = styled(Typography)(({ theme }) => ({
  color: "#BABABA",
  padding: "0px 0px 16px",
  fontSize: "0.875rem",
}));

const FeatureContainer = styled(Box)(({ theme }) => ({
  margin: "auto",
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
  height: "64vh",
  width: "133vh",
  paddingBottom: "20px",
  marginBottom: "20px",
}));

const ButtonSlider = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  fontSize: "medium",
  padding: "10px",
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  height: "10vh",
  width: "80vh",
}));

const PictureSliderContainer = styled(Box)(({ theme }) => ({
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

const PictureSliderImage = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  paddingBottom: "20px",
  marginBottom: "20px",
}));

const SliderBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "#00000066",
  color: "#BABABA",
  border: "solid 2px white",
  zIndex: 10,
  height: "4vh",
}));

interface picSub {
  image: string;
  txt: string;
  title: string;
}

const ImageSlider = ({ slides }: { slides: any }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const refText = useRef(null);
  const refTitle = useRef(null);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <PictureSliderContainer
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <ArrowForwardIosIcon
        sx={{
          color: "#fff",
          position: "relative",
          left: "80px",
          border: "#fff solid 2px",
          fontSize: "25px",
          backgroundColor: "#00000066",
          transform: "rotate(180deg)",
          cursor: "pointer",
        }}
        onClick={prevSlide}
      ></ArrowForwardIosIcon>
      {CybertruckPictureSlider.map((slide, index) => {
        return (
          <BackgroundWrapper
            style={{ backgroundColor: "black", height: "auto" }}
          >
            <Box
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image}></img>}
            </Box>

            <Box>
              <Stack direction="column">
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <Box
                      ref={refTitle}
                      sx={{
                        color: "white",
                        fontSize: "100px",
                      }}
                    >
                      {slide.title}
                    </Box>
                  )}
                </Box>
                <Box
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <Box
                      ref={refText}
                      sx={{
                        color: "white",
                        fontSize: "100px",
                      }}
                    >
                      {slide.txt}
                    </Box>
                  )}
                </Box>
              </Stack>
            </Box>
          </BackgroundWrapper>
        );
      })}
      <ArrowForwardIosIcon
        sx={{
          color: "#fff",
          position: "relative",
          right: "80px",
          border: "#fff solid 2px",
          fontSize: "25px",
          backgroundColor: "#00000066",
          cursor: "pointer",
        }}
        onClick={nextSlide}
      ></ArrowForwardIosIcon>
    </PictureSliderContainer>
  );
};

const Cybertruck = () => {
  return (
    <>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/01_Main_Hero_Desktop.jpg)`,
        }}
      >
        <Box
          sx={{
            width: "20%",
            margin: "auto",
            paddingTop: "8rem",
          }}
        >
          <img
            loading="lazy"
            src="https://i.imgur.com/6hFfw9f.png"
            alt=""
            style={{ width: "100%" }}
          />
        </Box>
        <TitleWrapper
          sx={{
            color: "#ffffff",
            paddingTop: "29rem",
            letterSpacing: "0.188rem",
            textShadow: "white 0px 0px 8px",
            fontWeight: "Bold",
            fontSize: "14px",
          }}
        >
          BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR
        </TitleWrapper>
      </BackgroundWrapper>

      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <InfoFeature>
          <Stack direction="column">
            <GalleryContainer
              style={{
                backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg)`,
              }}
            ></GalleryContainer>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "inline" }}>
                <FeatureContainer>
                  <InfoContainer
                    style={{
                      padding: "0px 0px 80px",
                    }}
                  >
                    <MainTitleContent sx={{ letterSpacing: "0.188rem" }}>
                      EXOSKELETON
                    </MainTitleContent>

                    <SubtitleContent>
                      Cybertruck is built with an exterior shell made for
                      ultimate durability and passenger protection. Starting
                      with a nearly impenetrable exoskeleton, every component is
                      designed for superior strength and endurance, from
                      Ultra-Hard 30X Cold-Rolled stainless-steel structural skin
                      to Tesla armor glass.
                    </SubtitleContent>
                  </InfoContainer>
                </FeatureContainer>
              </Box>
            </Box>

            <GalleryContainer
              style={{
                backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/03_Desktop.jpg)`,
              }}
            ></GalleryContainer>
            <InfoContainer
              style={{
                padding: "0px 0px 40px",
              }}
            >
              <Box sx={{ padding: "0px 0px 80px", width: "133vh" }}>
                <Stack
                  direction="row"
                  spacing={14}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box>
                    <MainSubtitleContent
                      sx={{
                        letterSpacing: "0.110rem",
                        padding: "0 0 1.125rem",
                        width: "31vh",
                      }}
                    >
                      ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL
                    </MainSubtitleContent>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    <SubtitleContent>
                      If there was something better, we’d use it. Help eliminate
                      dents, damage and long-term corrosion with a smooth
                      monochrome exoskeleton that puts the shell on the outside
                      of the car and provides you and your passengers maximum
                      protection.
                    </SubtitleContent>
                  </Box>
                </Stack>
              </Box>
            </InfoContainer>

            <GalleryContainer
              style={{
                backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg)`,
              }}
            ></GalleryContainer>

            <InfoContainer
              style={{
                padding: "0px 0px 40px",
              }}
            >
              <Box sx={{ padding: "0px 0px 80px", width: "133vh" }}>
                <Stack
                  direction="row"
                  spacing={14}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box>
                    <MainSubtitleContent
                      sx={{
                        letterSpacing: "0.110rem",
                        padding: "0 0 1.125rem",
                        width: "31vh",
                      }}
                    >
                      TESLA ARMOR GLASS
                    </MainSubtitleContent>
                  </Box>
                  <Box
                    sx={{
                      width: " 100%",
                      textAlign: "left",
                    }}
                  >
                    <SubtitleContent>
                      Ultra-strong glass and polymer-layered composite can
                      absorb and redirect impact force for improved performance
                      and damage tolerance.
                    </SubtitleContent>
                  </Box>
                </Stack>
              </Box>
            </InfoContainer>
          </Stack>
        </InfoFeature>
      </BackgroundWrapper>

      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <PictureSliderContainer
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <BackgroundWrapper
            style={{ backgroundColor: "black", height: "auto" }}
          >
            <PictureSliderContainer>
              <ImageSlider slides={CybertruckPictureSlider}></ImageSlider>
            </PictureSliderContainer>
          </BackgroundWrapper>
        </PictureSliderContainer>
      </BackgroundWrapper>

      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <InfoFeature>
          <Stack direction="column">
            <video
              src="https://www.tesla.com/xNVh4yUEc3B9/performance_video_desktop.mp4"
              style={{
                height: "64vh",
                width: "133vh",
                objectFit: "cover",
                paddingBottom: "20px",
              }}
              autoPlay
              loop
              preload="auto"
            />
            <InfoContainer
              style={{
                padding: "0px 0px 40px",
              }}
            >
              <Box sx={{ padding: "0px 0px 80px", width: "133vh" }}>
                <Stack
                  direction="row"
                  spacing={14}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box>
                    <MainSubtitleContent
                      sx={{
                        letterSpacing: "0.110rem",
                        padding: "0 0 1.125rem",
                        width: "34vh",
                        fontSize: "1.56rem",
                      }}
                      style={{
                        color: "white",
                      }}
                    >
                      PERFORMANCE AND EFFICIENCY
                    </MainSubtitleContent>
                  </Box>
                  <Box
                    sx={{
                      width: " 100%",
                      textAlign: "left",
                    }}
                  >
                    <SubtitleContent>
                      Now entering a new class of strength, speed and
                      versatility—only possible with an all-electric design. The
                      powerful drivetrain and low center of gravity provides
                      extraordinary traction control and torque—enabling
                      acceleration from 0-60 mph in as little as 2.9 seconds and
                      up to 500 miles of range.
                    </SubtitleContent>
                  </Box>
                </Stack>
              </Box>
            </InfoContainer>
          </Stack>
        </InfoFeature>
      </BackgroundWrapper>

      <BackgroundWrapper
        style={{ backgroundColor: "black", height: "100%", width: "100%" }}
      >
        <GalleryContainer
          style={{
            backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/c834642e-bd02-47d1-a16d-eddabd15ddb8/bvlatuR/std/1251x704/Cybertruck-Order-Hero-Global)`,
            height: "32vh",
            width: "80vh",
            marginRight: "0",
            padding: "0",
          }}
        ></GalleryContainer>
      </BackgroundWrapper>
    </>
  );
};

export default Cybertruck;
