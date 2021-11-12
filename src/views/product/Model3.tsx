import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import Chat from "@layouts/ChatSupport";
import ExpandingLight from "@layouts/ExpandIcon-light";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Container } from "@components/shared/Container";
import {
  BackgroundWrapper,
  HomeFeatureWrapper,
  TitleWrapper,
} from "@components/shared/Wrapper";
import { BtnOutline } from "@components/shared/Button";
import {
  FeatureSubTitle,
  FeatureTitle,
  MainTitle,
  MainTitleContent,
  SpecTitle,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { RowSectionBlock } from "@components/shared/Section";
import { Specli, SpecSubText, SpecUl } from "@components/shared/Spect";

function Model3() {
  return (
    <Container>
      <Chat />
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/8fa80996-ac5c-4cef-9534-a61a9457bfb3/bvlatuR/std/2880x1800/M3-Hero-LHD-US-D)`,
        }}
      >
        <TitleWrapper>
          <Box sx={{ marginTop: "12vh", marginBottom: "auto" }}>
            <Stack direction="column" spacing={-1}>
              <MainTitle>Model 3</MainTitle>
            </Stack>
          </Box>
          <Box margin="0 auto" display="flex">
            <Stack direction="column">
              <Box>
                <Stack direction="row" margin="auto">
                  <HomeFeatureWrapper>
                    <FeatureTitle>magna</FeatureTitle>
                    <FeatureSubTitle>sapien</FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>magna</FeatureTitle>
                    <FeatureSubTitle>sapien</FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>magna</FeatureTitle>
                    <FeatureSubTitle>sapien</FeatureSubTitle>
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
                <SubTitleContent>vitae proin</SubTitleContent>
                <MainTitleContent>vitae proin mattis</MainTitleContent>
              </Box>
              <Box>
                <SubContent>
                  Etiam erat velit scelerisque in dictum non consectetur a. Dui
                  nunc mattis enim ut tellus elementum sagittis vitae et. A cras
                  semper auctor neque vitae tempus quam pellentesque. Tellus
                  rutrum tellus pellentesque eu tincidunt tortor aliquam nulla
                  facilisi. Lectus quam id leo in.
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
                    <BtnOutline>ORDER NOW</BtnOutline>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ba4f4fe9-5c46-48c2-ad03-a5c7bf68f30c/bvlatuR/std/2880x1800/model_3_safety_hero"
              alt=""
              loading="lazy"
              style={{
                float: "right",
                width: "67.5vw",
                height: "100vh",
                objectFit: "cover",
                objectPosition: "-15rem",
                paddingRight: "1.5rem",
              }}
            />
          </Box>
        </Stack>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3489a82e-b19c-457a-86a4-7ea9ac91aa1c/bvlatuR/std/1920x1080/lhd-performance-hero-desktop"
            alt=""
            loading="lazy"
            style={{
              width: "100vw",
              height: "72vh",
              objectFit: "cover",
              objectPosition: "0 60%",
            }}
          />
          <TitleWrapper>
            <Box margin="-8rem auto" display="flex">
              <Stack direction="column">
                <Box>
                  <Stack direction="row" margin="auto">
                    <HomeFeatureWrapper>
                      <FeatureTitle>magna</FeatureTitle>
                      <FeatureSubTitle>sapien</FeatureSubTitle>
                    </HomeFeatureWrapper>
                    <HomeFeatureWrapper>
                      <FeatureTitle>magna</FeatureTitle>
                      <FeatureSubTitle>sapien</FeatureSubTitle>
                    </HomeFeatureWrapper>
                    <HomeFeatureWrapper>
                      <FeatureTitle>magna</FeatureTitle>
                      <FeatureSubTitle>sapien</FeatureSubTitle>
                    </HomeFeatureWrapper>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </TitleWrapper>
        </Box>
        <RowSectionBlock
          style={{
            margin: "1.5rem auto 0 auto",
          }}
        >
          <Box style={{ width: "65%", marginRight: "2.5rem" }}>
            <Stack direction="column">
              <SubTitleContent>quod maxime placeat</SubTitleContent>
              <MainTitleContent>max integer placeat</MainTitleContent>
              <Box style={{ padding: ".5rem 0" }}>
                <Box>
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
                      <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Box>
            <SubContent>
              fermentum iaculis eu. In nulla posuere sollicitudin aliquam
              ultrices sagittis orci. Etiam erat velit scelerisque in dictum non
              consectetur a. Dui nunc mattis enim ut tellus elementum sagittis
              vitae et. A cras semper auctor neque vitae tempus quam
              pellentesque.
            </SubContent>
          </Box>
        </RowSectionBlock>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/02b9fe62-2569-4fc8-bfa1-a8f8cdd9d48e/bvlatuR/std/1440x900/lhd-awd-hero-desktop"
            alt=""
            loading="lazy"
            style={{
              width: "100vw",
              height: "72vh",
              objectFit: "cover",
              objectPosition: "0 57%",
            }}
          />
          <TitleWrapper>
            <Box margin="-8rem auto" display="flex">
              <Stack direction="column">
                <Box>
                  <Stack direction="row" margin="auto">
                    <HomeFeatureWrapper>
                      <FeatureTitle>magna</FeatureTitle>
                      <FeatureSubTitle>sapien</FeatureSubTitle>
                    </HomeFeatureWrapper>
                    <HomeFeatureWrapper>
                      <FeatureTitle>magna</FeatureTitle>
                      <FeatureSubTitle>sapien</FeatureSubTitle>
                    </HomeFeatureWrapper>
                    <HomeFeatureWrapper>
                      <FeatureTitle>magna</FeatureTitle>
                      <FeatureSubTitle>sapien</FeatureSubTitle>
                    </HomeFeatureWrapper>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </TitleWrapper>
        </Box>
        <RowSectionBlock
          style={{
            margin: "1.5rem auto",
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
            <Stack>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b2b118a7-7e86-4e8f-b7af-092f3e64d847/bvlatuR/std/1254x1080/lhd-range-hero-desktop"
                loading="lazy"
                style={{
                  width: "70vw",
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
                  }}
                >
                  <Box>
                    <Stack
                      direction="column"
                      spacing={1}
                      textAlign="center"
                      width="85%"
                    >
                      <FeatureTitle>405 mi</FeatureTitle>
                      <FeatureSubTitle>
                        Go anywhere with up to 405 miles of estimated range on a
                        single charge
                      </FeatureSubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack
                      direction="column"
                      spacing={1}
                      textAlign="center"
                      width="85%"
                    >
                      <FeatureTitle>200 mi</FeatureTitle>
                      <FeatureSubTitle>
                        Supercharge up to 200 miles in 15 minutes
                      </FeatureSubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack
                      direction="column"
                      spacing={1}
                      textAlign="center"
                      width="85%"
                    >
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
                  In nulla posuere sollicitudin aliquam ultrices sagittis orci.
                  Etiam erat velit scelerisque in dictum non consectetur a. Dui
                  nunc mattis enim ut tellus elementum sagittis vitae et. A cras
                  semper auctor neque vitae tempus quam pellentesque. Tellus
                  rutrum tellus pellentesque eu tincidunt tortor aliquam nulla
                  facilisi.
                </SubContent>
              </Stack>
              <Box padding="0 2rem">
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
                    <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <video
          src="https://tesla-cdn.thron.com/delivery/public/video/tesla/65011bbb-6f1c-422e-9e7a-727ba24bad15/bvlatuR/WEBHD/autopilot"
          style={{
            width: "100vw",
            height: "75vh",
            objectFit: "cover",
            zIndex: -1,
          }}
          autoPlay
          loop
          preload="auto"
        />
        <Box padding="1rem 0 0 0">
          <Stack
            direction="row"
            spacing={14}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Autopilot</SubTitleContent>
                <MainTitleContent>Future of Driving</MainTitleContent>
                <Stack
                  direction="row"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
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
                    <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                  </Box>
                </Stack>
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
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <img
          loading="lazy"
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/d4f29128-35ad-4912-9282-32701225c77b/bvlatuR/std/1920x1080/lhd-interior-hero-desktop"
          style={{
            width: "100%",
            height: "72vh",
            objectFit: "cover",
          }}
        />
        <Box padding="1.5rem 0 0 0">
          <Stack
            direction="row"
            spacing={14}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Autopilot</SubTitleContent>
                <MainTitleContent>Future of Driving</MainTitleContent>
                <Stack
                  direction="row"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
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
                    <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                  </Box>
                </Stack>
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
      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <Box style={{ width: "100%" }}>
          <Stack direction="row">
            <Box>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2b239404-c402-4c55-9a10-a061f2cf0ae8/bvlatuR/std/947x677/global-spec-hero"
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
                      Model 3 <span>Specs</span>{" "}
                    </SpecTitle>
                    <Box>
                      <Stack direction="row" spacing={1} marginTop="1rem">
                        <BtnOutline
                          color="white"
                          style={{
                            margin: "0",
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
                      <Stack direction="row" spacing={1} marginTop=".2rem">
                        <BtnOutline
                          color="white"
                          style={{
                            margin: "0",
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
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
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
                <MainTitleContent style={{ color: "white" }}>
                  Experience Model 3
                </MainTitleContent>
                <Box>
                  <Stack direction="row" spacing={4}>
                    <BtnOutline
                      color="white"
                      style={{ margin: "0", padding: ".4rem 4rem" }}
                    >
                      order now
                    </BtnOutline>
                    <BtnOutline
                      color="white"
                      style={{ padding: ".4rem 5.5rem" }}
                    >
                      compare
                    </BtnOutline>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/457dd9fa-6e32-43b1-a6cf-9b3d76e9e181/bvlatuR/std/2232x720/global-order-hero"
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

export default Model3;
