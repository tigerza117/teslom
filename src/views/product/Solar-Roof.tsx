import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Chat from "@layouts/ChatSupport";
import ExpandingLight from "@layouts/ExpandIcon-light";

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

const HomeFeatureWrapper = styled(Box)(({ theme }) => ({
  width: "210px",
  margin: "0",
  padding: "0",
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
  width: "14rem",
  borderTop: "3px solid black",
  borderRadius: "0",
}));

const ButtonStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  padding: "1rem",
  textAlign: "left",
}));

const RowSectionBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  textAlign: "left",
  width: "80vw",
}));

function SolarRoof() {
  return (
    <>
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
                  <OutlineBtnBlack style={{ margin: "0" }}>
                    Order now
                  </OutlineBtnBlack>
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
                    <OutlineBtnBlack style={{ margin: "0" }}>
                      ORDER NOW
                    </OutlineBtnBlack>
                    <OutlineBtnBlack>LEARN MORE</OutlineBtnBlack>
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
                  <OutlineBtnBlack style={{ margin: "0" }}>
                    ORDER NOW
                  </OutlineBtnBlack>
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
                  <OutlineBtnBlack style={{ margin: "0" }}>
                    Order now
                  </OutlineBtnBlack>
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
                  <OutlineBtnBlack style={{ margin: "0" }}>
                    ORDER NOW
                  </OutlineBtnBlack>
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
                  <OutlineBtnBlack style={{ margin: "0" }}>
                    Order now
                  </OutlineBtnBlack>
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
                  <OutlineBtnBlack style={{ margin: "0" }}>
                    ORDER NOW
                  </OutlineBtnBlack>
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

export default SolarRoof;
