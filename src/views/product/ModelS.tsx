import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import Chat from "@layouts/ChatSupport";

function ModelS() {
  return (
    <>
      <Chat />
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
                Long Range and Plaid platforms unite powertrain and battery
                technologies for unrivaled performance, range and efficiency.
                New module and pack thermal architecture allows faster charging
                and gives you more power and endurance in all conditions.
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
                padding: "0 0 12rem 0",
                color: "#5c5d61",
              }}
            >
              * With rollout subtracted
            </TriBtnContent>
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white", height: "auto" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/06af56e3-91c4-4bad-8d2e-0a24f64ec2a8/bvlatuR/std/2880x1800/MS-Exterior-Hero-Desktop"
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
            <Stack>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b6761e24-0f64-483a-b868-50c5bab803bd/bvlatuR/std/2880x1800/MS-Range-Hero-Desktop"
                loading="lazy"
                style={{
                  width: "72vw",
                  height: "100vh",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ margin: "-8rem auto 0 auto" }}>
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
                <OutlineBtnBlack
                  style={{
                    padding: ".3rem 1.5rem",
                    marginLeft: "1.5rem",
                    marginBottom: "7rem",
                  }}
                >
                  Order now
                </OutlineBtnBlack>
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
            <OutlineBtnBlack
              style={{
                margin: "2rem 0",
              }}
            >
              Learn more
            </OutlineBtnBlack>
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
                <MainTitleContent>High Impact Protection</MainTitleContent>
                <SubContent style={{ padding: "4rem 0 0 0" }}>
                  Model S is built from the ground up as an electric vehicle,
                  with a high-strength architecture and floor-mounted battery
                  pack for incredible occupant protection and low rollover risk.
                  Every Model S includes Tesla’s latest active safety features,
                  such as Automatic Emergency Braking, at no extra cost.
                </SubContent>
              </Stack>
              <Box>
                <OutlineBtnBlack
                  style={{
                    padding: ".3rem 1.5rem",
                    marginLeft: "3rem",
                    marginBottom: "7rem",
                  }}
                >
                  Order now
                </OutlineBtnBlack>
              </Box>
            </Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b7e5f13a-e8f8-4428-b29e-b2ba6cf5220b/bvlatuR/std/1920x1080/MS-Safety-Hero-Desktop"
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
                  <OutlineBtnBlack>ORDER NOW</OutlineBtnBlack>
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
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ea201786-4dec-4ca2-b266-c7a180443853/bvlatuR/std/1440x1080/MS-Specs-Hero-Desktop"
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
                      Model S <span>Specs</span>{" "}
                    </SpecTitle>
                  </Box>
                  <Box>
                    <Stack direction="row">
                      <OutlineBtnWhite
                        style={{
                          padding: ".1rem 6rem",
                          textTransform: "capitalize",
                        }}
                      >
                        Plaid
                      </OutlineBtnWhite>
                      <OutlineBtnWhite
                        style={{
                          padding: ".1rem 6rem",
                          textTransform: "capitalize",
                        }}
                      >
                        Long Range
                      </OutlineBtnWhite>
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
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
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
                                †when equipped with the proper wheels and tires
                                (available fall 2021)
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
                <MainTitleContent>Model S</MainTitleContent>
                <Box>
                  <Stack direction="row" spacing={4}>
                    <OutlineBtnBlack
                      style={{ margin: "0", padding: ".4rem 4rem" }}
                    >
                      order now
                    </OutlineBtnBlack>
                    <OutlineBtnBlack style={{ padding: ".4rem 5.5rem" }}>
                      compare
                    </OutlineBtnBlack>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1c9e3fa8-7eba-4d75-bf00-03a3dbdd6d06/bvlatuR/std/1660x920/MS-Order-Hero-Desktop"
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
    </>
  );
}

export default ModelS;
