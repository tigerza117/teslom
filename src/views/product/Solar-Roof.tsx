import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Chat from "@layouts/ChatSupport";
import ExpandingLight from "@layouts/ExpandIcon-light";
import {
  Container,
  GalleryContainer,
  InfoContainer,
} from "@components/shared/Container";
import {
  BackgroundWrapper,
  BtnFeatTitle,
  ButtonStack,
  HomeFeatureWrapper,
  InfoFeatureWrapper,
  TitleWrapper,
} from "@components/shared/Wrapper";
import {
  BtnOutline,
  MapButton,
  TriBtnContent,
  TriBtnTitle,
} from "@components/shared/Button";
import {
  AdsTitle,
  FeatureSubTitle,
  FeatureTitle,
  InfoSubTitle,
  InfoTitle,
  MainSubTitle,
  MainTitle,
  MainTitleContent,
  SpecTitle,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { RowSectionBlock } from "@components/shared/Section";
import { Specli, SpecSubText, SpecUl } from "@components/shared/Spect";

function SolarRoof() {
  return (
    <Container>
      <Chat />
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/b614dd66-cc50-4cba-8c15-186b95bb4a8d/bvlatuR/std/2880x1800/sr-storm-desktop)`,
        }}
      >
        <TitleWrapper>
          <Box sx={{ marginTop: "12vh", marginBottom: "auto" }}>
            <Stack direction="column" spacing={-1}>
              <MainTitle>Solar Roof</MainTitle>
              <MainSubTitle>
                sed quia consequuntur magni dolores eos qui ratione
              </MainSubTitle>
            </Stack>
          </Box>
          <Box margin="0 auto" display="flex">
            <Stack direction="column">
              <Box>
                <Stack direction="row" margin="auto">
                  <HomeFeatureWrapper>
                    <Box>
                      <img
                        style={{
                          height: "2.8rem",
                          margin: "0",
                        }}
                        src="https://www.tesla.com/sites/default/files/solarroof/v3/hero/solar-roof-hero-solar_badge.svg"
                        alt=""
                      />
                    </Box>
                    <FeatureSubTitle>
                      Sed ut perspiciatis unde
                      <br />
                      Lorem
                    </FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>Lorem</FeatureTitle>
                    <FeatureSubTitle>
                      Sed ut perspiciatis unde
                      <br />
                      Lorem
                    </FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>Lorem</FeatureTitle>
                    <FeatureSubTitle>
                      Sed ut perspiciatis unde
                      <br />
                      Lorem
                    </FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <BtnOutline color="white">ORDER NOW</BtnOutline>
                  </HomeFeatureWrapper>
                </Stack>
              </Box>
              <Box>
                <ExpandingLight />
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
            height: "63vh",
            objectFit: "cover",
            objectPosition: "0 62%",
          }}
        />
        <RowSectionBlock
          style={{
            margin: "3rem auto 0 auto",
          }}
        >
          <Box style={{ width: "40%" }}>
            <Stack direction="column">
              <SubTitleContent>quod maxime placeat</SubTitleContent>
              <MainTitleContent>maxime placeat</MainTitleContent>
              <Box style={{ padding: "1rem 0" }}>
                <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
              </Box>
            </Stack>
          </Box>
          <Box>
            <SubContent>
              Enter a destination on your touchscreen and Trip Planner will
              automatically calculate your route with Superchargers along the
              way.
            </SubContent>
          </Box>
        </RowSectionBlock>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <Stack direction="row">
            <Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    padding: "3rem 1.5rem",
                  }}
                >
                  <SubTitleContent>At vero eos et</SubTitleContent>
                  <MainTitleContent>Itaque earum rerum</MainTitleContent>
                  <SubContent style={{ padding: "1rem 0" }}>
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus.
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "10rem 0 0 1.5rem",
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                    <BtnOutline>LEARN MORE</BtnOutline>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2d6d1f7e-4462-442a-ba8e-d70dec628948/bvlatuR/std/2880x1800/powerwall-energy-storage-desktop"
                alt=""
                loading="lazy"
                style={{
                  width: "70vw",
                  height: "100vh",
                  objectFit: "cover",
                  float: "right",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <Stack direction="row">
            <Box>
              <video
                src="https://www.tesla.com/sites/default/files/solarroof/v3/durability/SR-Durability-Desktop.mp4"
                autoPlay
                muted
                style={{
                  width: "74vw",
                  height: "100vh",
                  objectFit: "cover",
                  float: "left",
                }}
              />
            </Box>
            <Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    padding: "3rem 1.5rem",
                  }}
                >
                  <SubTitleContent>At vero eos et</SubTitleContent>
                  <MainTitleContent>Itaque rerum</MainTitleContent>
                  <SubContent style={{ padding: "1rem 0" }}>
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore.
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "12rem 0 0 1.5rem",
                  }}
                >
                  <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5", height: "auto" }}>
        <TitleWrapper>
          <RowSectionBlock
            style={{
              margin: "3rem auto 0 auto",
            }}
          >
            <Box style={{ width: "40%" }}>
              <Stack direction="column">
                <SubTitleContent>quod maxime placeat</SubTitleContent>
                <MainTitleContent>maxime placeat</MainTitleContent>
                <Box style={{ padding: "1rem 0" }}>
                  <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box>
              <SubContent>
                Enter a destination on your touchscreen and Trip Planner will
                automatically calculate your route with Superchargers along the
                way.
              </SubContent>
            </Box>
          </RowSectionBlock>
          <Box>
            <Stack>
              <Box
                sx={{
                  padding: "1rem 0",
                }}
              >
                <video
                  autoPlay
                  muted
                  style={{
                    width: "45vw",
                    margin: "0 auto",
                    display: "none",
                  }}
                  src="https://www.tesla.com/sites/default/files/solarroof/v3/installation/Carousel_Design.mp4"
                />
                <video
                  autoPlay
                  muted
                  style={{
                    width: "45vw",
                    margin: "0 auto",
                  }}
                  src="https://www.tesla.com/sites/default/files/solarroof/v3/installation/Carousel_Installation2.mp4"
                />
                <video
                  autoPlay
                  muted
                  style={{
                    width: "45vw",
                    margin: "0 auto",
                    display: "none",
                  }}
                  src="https://tesla-cdn.thron.com/delivery/public/video/tesla/18fba275-3adb-4c8f-b2aa-f151350ad5c9/bvlatuR/WEBHD/Carousel-PowerOn"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem 0",
                }}
              >
                <Stack direction="row" spacing={4}>
                  <MapButton style={{ margin: "0", padding: "0 0 1rem 0" }}>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <TriBtnContent>
                        Et harum quidem rerum facilis est et expedita
                        distinctio.
                      </TriBtnContent>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <TriBtnContent>
                        Et harum quidem rerum facilis est et expedita
                        distinctio.
                      </TriBtnContent>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <TriBtnContent>
                        Et harum quidem rerum facilis est et expedita
                        distinctio.
                      </TriBtnContent>
                    </ButtonStack>
                  </MapButton>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <Stack direction="row">
            <Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    padding: "3rem 1.5rem",
                  }}
                >
                  <SubTitleContent>At vero eos et</SubTitleContent>
                  <MainTitleContent>Itaque earum rerum</MainTitleContent>
                  <SubContent style={{ padding: "1rem 0" }}>
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus.
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "10rem 0 0 1.5rem",
                  }}
                >
                  <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box>
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
            </Box>
          </Stack>
        </Box>
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
        <RowSectionBlock
          style={{
            margin: "3rem auto 0 auto",
          }}
        >
          <Box style={{ width: "40%" }}>
            <Stack direction="column">
              <SubTitleContent>quod maxime placeat</SubTitleContent>
              <MainTitleContent>maxime placeat</MainTitleContent>
              <Box style={{ padding: "1rem 0" }}>
                <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
              </Box>
            </Stack>
          </Box>
          <Box>
            <SubContent>
              Enter a destination on your touchscreen and Trip Planner will
              automatically calculate your route with Superchargers along the
              way.
            </SubContent>
          </Box>
        </RowSectionBlock>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <Stack direction="row">
            <Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    padding: "3rem 1.5rem",
                  }}
                >
                  <SubTitleContent>At vero eos et</SubTitleContent>
                  <MainTitleContent>Itaque earum rerum</MainTitleContent>
                  <SubContent style={{ padding: "1rem 0" }}>
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus.
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "10rem 0 0 1.5rem",
                  }}
                >
                  <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/4aedd73e-cd73-4051-9cc7-68955ad4646d/bvlatuR/std/2880x1800/SR-Value-D"
                alt=""
                loading="lazy"
                style={{
                  width: "70vw",
                  height: "100vh",
                  objectFit: "cover",
                  float: "right",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <Box style={{ width: "100%" }}>
          <Stack direction="row">
            <Box>
              <img
                src="https://www.tesla.com/sites/default/files/solarroof/specs/PanelMeasure_desktop2x.png"
                alt=""
                loading="lazy"
                style={{
                  width: "50vw",
                  height: "100vh",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box>
              <Box style={{ padding: "8rem 3rem" }}>
                <Stack direction="column">
                  <Box>
                    <SpecTitle style={{ color: "white" }}>
                      Solar Roof <span>Specs</span>{" "}
                    </SpecTitle>
                  </Box>
                  <Box>
                    <Stack direction="row">
                      <Box>
                        <SpecUl>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                        </SpecUl>
                      </Box>
                      <Box>
                        <SpecUl>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                        </SpecUl>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <TitleWrapper style={{ justifyContent: "center" }}>
          <Stack direction="column" spacing={1}>
            <Box>
              <MainTitleContent style={{ color: "white" }}>
                Transform Your Roof
              </MainTitleContent>
            </Box>
            <Box>
              <SubContent style={{ color: "white" }}>
                Power your home with Solar Roof
              </SubContent>
            </Box>
            <Box>
              <BtnOutline color="white" style={{ margin: "1.5rem 0" }}>
                ORDER NOW
              </BtnOutline>
            </Box>
          </Stack>
        </TitleWrapper>
      </BackgroundWrapper>
    </Container>
  );
}

export default SolarRoof;
