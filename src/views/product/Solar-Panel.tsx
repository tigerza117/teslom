import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Chat from "@layouts/ChatSupport";
import ExpandingLight from "@layouts/ExpandIcon-light";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
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
  padding: ".35rem 3.5rem",
  borderRadius: "25px",
  border: "3px solid white",
  boxShadow: "none",
  color: "white",
  marginTop: ".8rem",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
}));

const OutlineBtnBlack = styled(Button)(({ theme }) => ({
  fontSize: ".8rem",
  padding: ".4rem 1.5rem",
  borderRadius: "25px",
  border: "3px solid black",
  boxShadow: "none",
  color: "black",
  marginTop: ".8rem",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
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
  "& a": {
    color: "#393c41",
  },
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
  padding: "2.5rem 0",
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
          <Box sx={{ marginTop: "12vh", marginBottom: "auto" }}>
            <Stack direction="column" spacing={-1}>
              <MainTitle>Solar for Existing Roofs</MainTitle>
              <MainSubTitle>
                Lowest Cost Solar Panels in America—Money-back guarantee
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
                      Convert Sunlight
                      <br />
                      to Energy
                    </FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>$</FeatureTitle>
                    <FeatureSubTitle>
                      Guaranteed Lowest
                      <br />
                      Price for Solar
                    </FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>24/7</FeatureTitle>
                    <FeatureSubTitle>
                      Energy
                      <br />
                      Monitoring
                    </FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <OutlineBtnWhite>ORDER NOW</OutlineBtnWhite>
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
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
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
                  <SubTitleContent>Savings</SubTitleContent>
                  <MainTitleContent>Electricity For Less</MainTitleContent>
                  <SubContent style={{ padding: "1rem 0" }}>
                    Use solar energy to power your home and reduce your
                    dependence on the grid. Purchase solar at the lowest price
                    of any national provider with{" "}
                    <a href="">Tesla's price match guarantee</a> and take
                    control of your monthly electricity bill. Learn more about
                    your potential savings in our Design Studio.
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "10rem 0 0 1.5rem",
                  }}
                >
                  <OutlineBtnBlack>SEE YOUR SAVINGS</OutlineBtnBlack>
                </Box>
              </Stack>
            </Box>
            <Box>
              <video
                src="https://tesla-cdn.thron.com/delivery/public/video/tesla/1e3dd39b-49f4-43ff-895a-74fa93dddfdf/bvlatuR/WEBHD/_25-Savings-D"
                autoPlay
                muted
                loop
                style={{
                  width: "70vw",
                  height: "100vh",
                  objectFit: "cover",
                  objectPosition: "50%",
                  float: "right",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Stack direction="row">
          <Box
            sx={{
              padding: "3rem",
              display: "flex",
            }}
          >
            <Stack
              direction="column"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <SubTitleContent>Design</SubTitleContent>
                <MainTitleContent>Sleek and Durable</MainTitleContent>
              </Box>
              <Box>
                <SubContent>
                  Our solar panels are low-profile and durable — quietly
                  converting sunlight to energy for decades to come. Integrated
                  hardware and simple design achieve this by securing the panels
                  close to your roof and to each other for a minimalist
                  aesthetic.
                </SubContent>
              </Box>
              <Box padding="4rem 0">
                <Stack
                  direction="row"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <ControlPointIcon
                      sx={{
                        padding: ".5rem 0 0 0",
                        fontSize: "2.5rem",
                      }}
                    />
                  </Box>
                  <Box>
                    <SubContent>LEARN MORE</SubContent>
                  </Box>
                  <Box>
                    <OutlineBtnBlack>ORDER NOW</OutlineBtnBlack>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9ddad34a-7766-499d-b99e-65983e68f10a/bvlatuR/std/2090x1800/_25-Design-D"
              alt=""
              loading="lazy"
              style={{
                width: "70vw",
                height: "100vh",
                objectFit: "cover",
                objectPosition: "0 100%",
                float: "right",
              }}
            />
          </Box>
        </Stack>
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
        <Box sx={{ padding: "3rem 0 6rem 0" }}>
          <Stack
            direction="row"
            spacing={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Powerwall</SubTitleContent>
                <MainTitleContent>Home Battery Backup</MainTitleContent>
                <Stack
                  direction="row"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box>
                    <OutlineBtnBlack>ORDER NOW</OutlineBtnBlack>
                  </Box>
                  <Box>
                    <OutlineBtnBlack>LEARN MORE</OutlineBtnBlack>
                  </Box>
                </Stack>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                Powerwall is bundled with every Tesla solar purchase, allowing
                you to store your solar energy for use anytime—at night or
                during an outage.
              </SubContent>
            </Box>
          </Stack>
        </Box>
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
        <Box sx={{ padding: "3rem 0 6rem 0" }}>
          <Stack
            direction="row"
            spacing={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Powerwall</SubTitleContent>
                <MainTitleContent>Order and Installation</MainTitleContent>
                <Box>
                  <OutlineBtnBlack>ORDER NOW</OutlineBtnBlack>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                From permitting to powering on, we’ll take care of everything.
                After you order, we’ll gather remote aerial imagery of your
                home, design your system, take care of any necessary permits and
                schedule your installation.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
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
                  <SubTitleContent>Efficiency</SubTitleContent>
                  <MainTitleContent>Maximum Solar Production</MainTitleContent>
                  <SubContent style={{ padding: "1rem 0" }}>
                    Tesla solar panels are designed to be highly efficient,
                    delivering maximum solar production year-round, even on
                    roofs with complicated angles. Powered by{" "}
                    <a href="">Tesla Solar Inverter</a>, your fully integrated
                    system is safe and reliable.
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "10rem 0 0 1.5rem",
                  }}
                >
                  <OutlineBtnBlack>ORDER NOW</OutlineBtnBlack>
                </Box>
              </Stack>
            </Box>
            <Box>
              <img
                src="https://www.tesla.com/sites/default/files/solarpanels/inverter/Inverter_V8_D.jpg"
                alt=""
                loading="lazy"
                style={{
                  width: "70vw",
                  height: "100vh",
                  objectFit: "cover",
                  objectPosition: "50% 100%",
                  float: "right",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f7e7ce60-a70b-4dd9-883c-7baf1c0eb636/bvlatuR/std/2880x1800/SP-tesla-app-D"
          alt=""
          loading="lazy"
          style={{
            width: "100vw",
            height: "69vh",
            objectFit: "cover",
            objectPosition: "50%",
          }}
        />
        <Box sx={{ padding: "3rem 0 6rem 0" }}>
          <Stack
            direction="row"
            spacing={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Experience</SubTitleContent>
                <MainTitleContent>24/7 Monitoring</MainTitleContent>
                <Box>
                  <OutlineBtnBlack>ORDER NOW</OutlineBtnBlack>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                Manage your solar system from anywhere in the world with 24/7
                mobile monitoring. Watch your energy in real time or set your
                preferences to optimize for energy independence.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <Box style={{ width: "100%" }}>
          <Stack direction="row">
            <Box>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2e1f9207-01b8-4455-a9c8-b4ca95b7afb4/bvlatuR/std/2880x1800/_25-Specs-D"
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
              <Box style={{ padding: "5rem 3rem" }}>
                <Stack direction="column">
                  <Box>
                    <SpecTitle style={{ color: "white" }}>
                      Solar Panel <span>Specs</span>{" "}
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
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
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
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <TitleWrapper style={{ justifyContent: "center" }}>
          <Stack direction="column" spacing={1}>
            <Box>
              <MainTitleContent style={{ color: "white" }}>
                Power Your Home
              </MainTitleContent>
            </Box>
            <Box>
              <SubContent style={{ color: "white" }}>
                Purchase solar today
              </SubContent>
            </Box>
            <Box>
              <OutlineBtnWhite style={{ margin: "1.5rem 0" }}>
                ORDER NOW
              </OutlineBtnWhite>
            </Box>
          </Stack>
        </TitleWrapper>
      </BackgroundWrapper>
    </>
  );
}

export default SolarPanel;
