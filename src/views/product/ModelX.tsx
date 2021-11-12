import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import Chat from "@layouts/ChatSupport";
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

function ModelX() {
  return (
    <Container>
      <Chat />
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop)`,
        }}
      >
        <TitleWrapper>
          <Box sx={{ marginTop: "12vh" }}>
            <Stack direction="column" spacing={-1}>
              <MainTitle>Model X</MainTitle>
              <MainSubTitle>Plaid</MainSubTitle>
            </Stack>
          </Box>
          <Box sx={{ margin: "0 auto", padding: "1.8rem 0" }}>
            <Stack direction="row" spacing={8}>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>morbi</FeatureTitle>
                  <FeatureSubTitle>tristique</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>morbi</FeatureTitle>
                  <FeatureSubTitle>tristique</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>morbi</FeatureTitle>
                  <FeatureSubTitle>tristique</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>morbi</FeatureTitle>
                  <FeatureSubTitle>tristique</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <BtnOutline color="white">ORDER NOW</BtnOutline>
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
        <InfoFeatureWrapper>
          <Stack direction="row">
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/287c75d3-2f5d-481e-8a0f-0dc987f54e6b/bvlatuR/std/1040x584/MX-Interior-Grid-A-Desktop)`,
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
                <InfoTitle>Nunc consequat</InfoTitle>
                <InfoSubTitle>
                  Condimentum vitae sapien pellentesque habitant morbi tristique
                  senectus et netus. Ac tortor dignissim convallis aenean et.
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
                <InfoTitle>Convallis posuere</InfoTitle>
                <InfoSubTitle>
                  Condimentum vitae sapien pellentesque habitant morbi tristique
                  senectus et netus. Ac tortor dignissim convallis aenean et.
                </InfoSubTitle>
              </Stack>
            </InfoContainer>
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/a7e9b42b-3433-4ad3-9d25-8995c8b750f4/bvlatuR/std/1040x584/MX-Interior-Grid-B-Desktop)`,
              }}
            ></GalleryContainer>
          </Stack>
          <Stack direction="row">
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/b2e30e61-96ae-4e0a-813d-fa39f35c5797/bvlatuR/std/1040x584/MX-Interior-Grid-C-Desktop)`,
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
                <InfoTitle>Aenean sed</InfoTitle>
                <InfoSubTitle>
                  Condimentum vitae sapien pellentesque habitant morbi tristique
                  senectus et netus. Ac tortor dignissim convallis aenean et.
                </InfoSubTitle>
              </Stack>
            </InfoContainer>
          </Stack>
        </InfoFeatureWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white", height: "auto" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/e13368c8-5657-468e-aa16-a28d9dc763c6/bvlatuR/std/2880x1800/MX-Performance-Hero-Desktop"
          loading="lazy"
          style={{
            width: "100%",
            height: "80vh",
            objectFit: "cover",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ margin: "-10rem auto", padding: "1.8rem 0" }}>
            <Stack direction="row" spacing={8} textAlign="center">
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>Mattis</FeatureTitle>
                  <FeatureSubTitle>Peak power</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>Mattis</FeatureTitle>
                  <FeatureSubTitle>@155 mph 1/4 mile</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>Mattis</FeatureTitle>
                  <FeatureSubTitle>0-60 mph</FeatureSubTitle>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ padding: "2rem 0 6rem 0" }}>
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
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                Eget sit amet tellus cras adipiscing. Volutpat commodo sed
                egestas egestas. Mattis pellentesque id nibh tortor id aliquet.
                Aliquet eget sit amet tellus cras adipiscing enim eu turpis.
                Condimentum vitae sapien pellentesque habitant morbi tristique
                senectus et netus.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5", height: "auto" }}>
        <TitleWrapper>
          <Box
            sx={{
              margin: "auto",
              width: "60vw",
              padding: "1rem 0",
            }}
          >
            <Stack direction="column" textAlign="left" spacing={1}>
              <MainTitleContent>Electric Powertrain</MainTitleContent>
              <SubContent>
                Eget sit amet tellus cras adipiscing. Volutpat commodo sed
                egestas egestas. Mattis pellentesque id nibh tortor id aliquet.
                Aliquet eget sit amet tellus cras adipiscing enim eu turpis.
                Condimentum vitae sapien pellentesque habitant morbi tristique
                senectus et netus.
              </SubContent>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Box
                sx={{
                  padding: "1rem 0",
                }}
              >
                <img
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                    display: "none",
                  }}
                  src="https://tesla-cdn.thron.com/delivery/public/image/tesla/209dce99-0353-49b1-b0ac-c3aa6de68b71/bvlatuR/std/1920x900/Model-S-Performance-Dual-Motor-Desktop"
                  alt="LongRange"
                />
                <img
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                  }}
                  src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3da49427-d22a-4fe1-bc36-3653dc426dfd/bvlatuR/std/1920x900/Model-S-Performance-Tri-Motor-Desktop"
                  alt="Plaid"
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
                  <Button
                    sx={{
                      width: "25rem",
                      borderTop: "3px solid black",
                      borderRadius: "0",
                    }}
                  >
                    <Stack
                      direction="column"
                      sx={{
                        padding: ".6rem",
                        textAlign: "left",
                      }}
                      spacing={2}
                    >
                      <TriBtnTitle style={{}}>Long Range</TriBtnTitle>
                      <TriBtnContent>
                        Dual Motor All-Wheel Drive platform allows for the
                        longest range, and now delivers insane power and
                        acceleration
                      </TriBtnContent>
                      <Box sx={{ margin: "0 auto", padding: "1.5rem 0 0 0" }}>
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>3.1 s</BtnFeatTitle>
                              <TriBtnContent>0-60 mph</TriBtnContent>
                            </Stack>
                          </Box>
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>405 mi</BtnFeatTitle>
                              <TriBtnContent>range (est.)</TriBtnContent>
                            </Stack>
                          </Box>
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>670 hp</BtnFeatTitle>
                              <TriBtnContent>peak power</TriBtnContent>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>
                    </Stack>
                  </Button>
                  <Button
                    sx={{
                      width: "25rem",
                      borderTop: "3px solid black",
                      borderRadius: "0",
                    }}
                  >
                    <ButtonStack spacing={2}>
                      <TriBtnTitle style={{}}>Plaid</TriBtnTitle>
                      <TriBtnContent>
                        Tri Motor All-Wheel Drive platform with torque vectoring
                        features three independent motors, each with a
                        carbon-sleeved rotor that maintains peak power output
                        all the way to top speed.
                      </TriBtnContent>
                      <Box sx={{ margin: "0 auto", padding: ".3rem 0 0 0" }}>
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>1.99 s*</BtnFeatTitle>
                              <TriBtnContent>0-60 mph</TriBtnContent>
                            </Stack>
                          </Box>
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>396 mi</BtnFeatTitle>
                              <TriBtnContent>range (EPA est.)</TriBtnContent>
                            </Stack>
                          </Box>
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>1,020 hp</BtnFeatTitle>
                              <TriBtnContent>peak power</TriBtnContent>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>
                    </ButtonStack>
                  </Button>
                </Stack>
              </Box>
            </Stack>
            <TriBtnContent
              style={{
                padding: "0 0 5rem 0",
                color: "#5c5d61",
              }}
            >
              * With rollout subtracted
            </TriBtnContent>
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="column" padding="2.5rem 2rem 0 2rem">
                <SubTitleContent>Pharetra</SubTitleContent>
                <MainTitleContent>Facilisis volutpat</MainTitleContent>
                <SubContent style={{ padding: "4rem 0 0 0" }}>
                  Turpis egestas sed tempus urna et pharetra pharetra massa.
                  Imperdiet nulla malesuada pellentesque elit eget gravida cum
                  sociis. Nec feugiat nisl pretium fusce id velit. Diam ut
                  venenatis tellus in metus vulputate. Faucibus scelerisque
                  eleifend donec pretium vulputate sapien nec sagittis aliquam.
                </SubContent>
              </Stack>
              <Box>
                <BtnOutline
                  style={{
                    padding: ".3rem 1.5rem",
                    marginLeft: "2rem",
                    marginBottom: "7rem",
                  }}
                >
                  Order now
                </BtnOutline>
              </Box>
            </Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/a3472e33-60ae-44ff-a0b9-43e62cf1ff31/bvlatuR/std/2880x1800/MX-Utility-Hero-Desktop"
              loading="lazy"
              style={{
                width: "70vw",
                height: "100vh",
                objectFit: "cover",
              }}
            />
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/4b516502-71a4-476f-acd4-0e326c785657/bvlatuR/std/2880x1800/MX-Exterior-Hero-Desktop"
          loading="lazy"
          style={{
            width: "100%",
            height: "70vh",
            objectFit: "cover",
            objectPosition: "0 60%",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ margin: "-11rem auto", padding: "1.8rem 0" }}>
            <Stack direction="row" spacing={12} textAlign="center">
              <Box>
                <Stack direction="column" margin="3rem 0">
                  <FeatureSubTitle>Performance-focused chassis</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={0.5}>
                  <FeatureTitle style={{ textAlign: "left" }}>
                    0.208 <i style={{ fontSize: "1rem" }}>Cd</i>
                  </FeatureTitle>
                  <FeatureSubTitle>Lowest-drag car on Earth</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" margin="3rem 0">
                  <FeatureSubTitle>Refined exterior styling</FeatureSubTitle>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
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
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                Turpis egestas sed tempus urna et pharetra pharetra massa.
                Imperdiet nulla malesuada pellentesque elit eget gravida cum
                sociis. Nec feugiat nisl pretium fusce id velit. Diam ut
                venenatis tellus in metus vulputate. Faucibus scelerisque
                eleifend donec pretium vulputate sapien nec sagittis aliquam.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <InfoFeatureWrapper>
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
                <InfoTitle>Eget felis eget</InfoTitle>
                <InfoSubTitle>
                  Etiam non quam lacus suspendisse faucibus. Facilisis volutpat
                  est velit egestas dui id ornare.
                </InfoSubTitle>
              </Stack>
            </InfoContainer>
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/a9b54155-913f-4a82-b696-89b176c95ca1/bvlatuR/std/1040x584/MX-Exterior-Grid-B-Desktop)`,
              }}
            ></GalleryContainer>
          </Stack>
          <Stack direction="row">
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/309b7de6-f67c-4d11-85da-2061f9124859/bvlatuR/std/1040x584/MX-Exterior-Grid-A-Desktop)`,
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
                <InfoTitle>Eget felis egets</InfoTitle>
                <InfoSubTitle>
                  Etiam non quam lacus suspendisse faucibus. Facilisis volutpat
                  est velit egestas dui id ornare.
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
                <InfoTitle>Eget felis eget</InfoTitle>
                <InfoSubTitle>
                  Etiam non quam lacus suspendisse faucibus. Facilisis volutpat
                  est velit egestas dui id ornare.
                </InfoSubTitle>
              </Stack>
            </InfoContainer>
            <GalleryContainer
              sx={{
                backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/e35bae00-d08b-40f1-b978-0b9656dc1a94/bvlatuR/std/1040x584/MX-Exterior-Grid-C-Desktop)`,
              }}
            ></GalleryContainer>
          </Stack>
        </InfoFeatureWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <Stack>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/6c49b283-8777-4cdd-8719-bd1dd93b985e/bvlatuR/std/2880x1800/MX-Range-Hero-Desktop"
                loading="lazy"
                style={{
                  width: "70vw",
                  height: "100vh",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ margin: "-10rem auto 0 auto" }}>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    width: "55vw",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingRight: "10vh",
                  }}
                >
                  <Box>
                    <Stack direction="column" spacing={1} textAlign="center">
                      <FeatureTitle>405 mi</FeatureTitle>
                      <FeatureSubTitle>
                        Go anywhere with up to 405 miles of estimated range on a
                        single charge
                      </FeatureSubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction="column" spacing={1} textAlign="center">
                      <FeatureTitle>200 mi</FeatureTitle>
                      <FeatureSubTitle>
                        Supercharge up to 200 miles in 15 minutes
                      </FeatureSubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction="column" spacing={1} textAlign="center">
                      <FeatureTitle>25,000+</FeatureTitle>
                      <FeatureSubTitle>
                        Superchargers placed along popular routes
                      </FeatureSubTitle>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Stack>
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
                <SubContent style={{ padding: "1rem 0" }}>
                  Travel farther on a single charge than any other electric
                  vehicle—and keep going with access to 25,000+ Superchargers
                  globally. By combining up to 405 miles of estimated range with
                  Tesla fast charging technology, you’ll spend less time
                  charging and even more time on the road.
                </SubContent>
              </Stack>
              <Box>
                <BtnOutline
                  style={{
                    padding: ".3rem 1.5rem",
                    marginLeft: "1.5rem",
                    marginBottom: "7rem",
                  }}
                >
                  Order now
                </BtnOutline>
              </Box>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white", height: "auto" }}>
        <TitleWrapper>
          <Box
            sx={{
              margin: "auto",
              width: "55vw",
              padding: "22vh 0 2rem 0",
            }}
          >
            <Stack direction="column" textAlign="left" spacing={1}>
              <MainTitleContent>Freedom to Travel</MainTitleContent>
              <SubContent>
                Enter a destination on your touchscreen and Trip Planner will
                automatically calculate your route with Superchargers along the
                way.
              </SubContent>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Box
                sx={{
                  padding: "1rem 0",
                }}
              >
                <img
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                  }}
                  src="https://cdn.discordapp.com/attachments/896728497979019294/902589779466653706/1635264436900.jpg"
                  alt="SanJose"
                />
                <img
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                    display: "none",
                  }}
                  src="https://cdn.discordapp.com/attachments/896728497979019294/902589782742417418/1635264486681.jpg"
                  alt="Berkeley"
                />
                <img
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                    display: "none",
                  }}
                  src="https://cdn.discordapp.com/attachments/896728497979019294/902589778741055528/1635264404630.jpg"
                  alt="Manhattan"
                />
                <img
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                    display: "none",
                  }}
                  src="https://cdn.discordapp.com/attachments/896728497979019294/902589783585460294/1635264519801.jpg"
                  alt="Fort"
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
                  <MapButton style={{ margin: "0" }}>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <BtnFeatTitle>670 hp</BtnFeatTitle>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <BtnFeatTitle>670 hp</BtnFeatTitle>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <BtnFeatTitle>670 hp</BtnFeatTitle>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <BtnFeatTitle>670 hp</BtnFeatTitle>
                    </ButtonStack>
                  </MapButton>
                </Stack>
              </Box>
            </Stack>
            <BtnOutline
              style={{
                margin: "2rem 0",
              }}
            >
              Learn more
            </BtnOutline>
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="column" padding="2.5rem 0 0 3rem">
                <SubTitleContent>Safety</SubTitleContent>
                <MainTitleContent>Nunc consequat</MainTitleContent>
                <SubContent style={{ padding: "4rem 0 0 0" }}>
                  Curabitur vitae nunc sed velit. Placerat in egestas erat
                  imperdiet sed. Ut faucibus pulvinar elementum integer enim
                  neque. Amet facilisis magna etiam tempor orci eu. Posuere urna
                  nec tincidunt praesent semper feugiat nibh sed pulvinar. Velit
                  euismod in pellentesque massa.
                </SubContent>
              </Stack>
              <Box>
                <BtnOutline
                  style={{
                    padding: ".3rem 1.5rem",
                    marginLeft: "3rem",
                    marginBottom: "7rem",
                  }}
                >
                  Order now
                </BtnOutline>
              </Box>
            </Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c072655e-fe87-438f-9f5f-54dc587f64fd/bvlatuR/std/1920x1080/MX-Safety-Hero-Desktop"
              loading="lazy"
              style={{
                width: "70vw",
                height: "100vh",
                objectFit: "cover",
              }}
            />
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <video
          src="https://tesla-cdn.thron.com/static/WCL9WK_autopilot.mp4-2000_QQHSUM.mp4?xseo="
          style={{
            width: "100%",
            height: "75vh",
            objectFit: "cover",
          }}
          autoPlay
          loop
          preload="auto"
        />
        <Box sx={{ padding: "2rem 0" }}>
          <Stack
            direction="row"
            spacing={14}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Autopilot</SubTitleContent>
                <MainTitleContent>Future of Driving</MainTitleContent>
                <Box>
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                Autopilot enables your car to steer, accelerate and brake
                automatically within its lane under your active supervision,
                assisting with the most burdensome parts of driving. With
                over-the-air software updates, the latest enhancements are
                available instantly.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white", height: "auto" }}>
        <TitleWrapper>
          <Box
            sx={{
              margin: "auto",
              width: "55vw",
              padding: "14vh 0 2rem 0",
            }}
          >
            <Stack direction="column" textAlign="left" spacing={1}>
              <MainTitleContent>Features</MainTitleContent>
              <SubContent>
                Full Self-Driving Capability introduces additional features and
                improves existing functionality to make your car more capable
                over time including:
              </SubContent>
            </Stack>
          </Box>
          <Box>
            <Stack marginBottom="3rem">
              <Box
                sx={{
                  padding: "1rem 0",
                }}
              >
                <video
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                  }}
                  autoPlay
                  loop
                  preload="auto"
                  src="https://tesla-cdn.thron.com/static/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4?xseo="
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
                  <MapButton style={{ margin: "0" }}>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <Stack direction="column" spacing={3}>
                        <BtnFeatTitle>670 hp</BtnFeatTitle>
                        <TriBtnContent>
                          Automatically change lanes while driving on the
                          highway
                        </TriBtnContent>
                      </Stack>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <Stack direction="column" spacing={3}>
                        <BtnFeatTitle>670 hp</BtnFeatTitle>
                        <TriBtnContent>
                          Automatically change lanes while driving on the
                          highway
                        </TriBtnContent>
                      </Stack>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <Stack direction="column" spacing={3}>
                        <BtnFeatTitle>670 hp</BtnFeatTitle>
                        <TriBtnContent>
                          Automatically change lanes while driving on the
                          highway
                        </TriBtnContent>
                      </Stack>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <Stack direction="column" spacing={3}>
                        <BtnFeatTitle>670 hp</BtnFeatTitle>
                        <TriBtnContent>
                          Automatically change lanes while driving on the
                          highway
                        </TriBtnContent>
                      </Stack>
                    </ButtonStack>
                  </MapButton>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <Box style={{ width: "100%" }}>
          <Stack direction="row">
            <Box>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3d7892b2-7246-42e5-819a-cc119ede91b7/bvlatuR/std/1440x1080/MX-Specs-Hero-Desktop"
                loading="lazy"
                style={{
                  width: "50vw",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box>
              <Box style={{ padding: "2.2rem 3rem" }}>
                <Stack direction="column">
                  <Box>
                    <SpecTitle style={{ color: "white" }}>
                      Model X <span>Specs</span>{" "}
                    </SpecTitle>
                  </Box>
                  <Box>
                    <Stack direction="row">
                      <BtnOutline
                        color="white"
                        style={{
                          padding: ".1rem 6rem",
                          textTransform: "capitalize",
                        }}
                      >
                        Plaid
                      </BtnOutline>
                      <BtnOutline
                        color="white"
                        style={{
                          padding: ".1rem 6rem",
                          textTransform: "capitalize",
                        }}
                      >
                        Long Range
                      </BtnOutline>
                    </Stack>
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

                              <p
                                style={{
                                  lineHeight: "120%",
                                  fontStyle: "italic",
                                }}
                              >
                                †with rollout subtracted
                              </p>
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
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box alignItems="center" margin="auto" padding="0 1rem 0 10rem ">
              <Stack spacing={6}>
                <MainTitleContent>Model X</MainTitleContent>
                <Box>
                  <Stack direction="row" spacing={4}>
                    <BtnOutline style={{ margin: "0", padding: ".4rem 4rem" }}>
                      order now
                    </BtnOutline>
                    <BtnOutline style={{ padding: ".4rem 5.5rem" }}>
                      compare
                    </BtnOutline>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f63a4f07-09f2-486b-b92f-bafdbcd2e4d3/bvlatuR/std/1660x920/MX-Order-Hero-Desktop"
              loading="lazy"
              style={{
                width: "50vw",
                height: "100%",
                objectFit: "contain",
                float: "right",
              }}
            />
          </Stack>
        </Box>
      </BackgroundWrapper>
    </Container>
  );
}

export default ModelX;
