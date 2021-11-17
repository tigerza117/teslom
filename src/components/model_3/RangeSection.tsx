import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  HorizonWrapper,
  SubFeatureWrapper,
} from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
  FeatureTitle,
  FeatureSubTitle,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { HoriImg } from "@components/shared/Container";

export function Range() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <Stack>
              <HoriImg
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b2b118a7-7e86-4e8f-b7af-092f3e64d847/bvlatuR/std/1254x1080/lhd-range-hero-desktop"
                alt=""
                loading="lazy"
                style={{ width: "74vw" }}
              />
              <Box sx={{ margin: "-10rem 6rem 0 auto" }}>
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{
                    width: "60vw",
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <SubFeatureWrapper
                      style={{ width: "280px" }}
                      className="show"
                    >
                      <FeatureTitle>358mi</FeatureTitle>
                      <FeatureSubTitle>
                        Go anywhere with up to 358 miles of estimated range on a
                        single charge
                      </FeatureSubTitle>
                    </SubFeatureWrapper>
                  </Box>
                  <Box>
                    <SubFeatureWrapper
                      style={{ width: "280px" }}
                      className="show"
                    >
                      <FeatureTitle>15min</FeatureTitle>
                      <FeatureSubTitle>
                        Supercharge up to 175 miles in 15 minutes at
                        Supercharger locations
                      </FeatureSubTitle>
                    </SubFeatureWrapper>
                  </Box>
                  <Box>
                    <SubFeatureWrapper
                      style={{ width: "280px" }}
                      className="show"
                    >
                      <FeatureTitle>25,000+</FeatureTitle>
                      <FeatureSubTitle>
                        Superchargers placed along popular well-traveled routes
                        around the world
                      </FeatureSubTitle>
                    </SubFeatureWrapper>
                  </Box>
                </Stack>
              </Box>
            </Stack>
            <HorizonWrapper style={{ height: "95vh" }}>
              <Box
                sx={{
                  padding: "3rem 2rem 0 2rem",
                }}
                className="show"
              >
                <SubTitleContent>Range</SubTitleContent>
                <MainTitleContent>Go Anywhere</MainTitleContent>
                <SubContent>
                  Model 3 is fully electric, so you never need to visit a gas
                  station again. If you charge overnight at home, you can wake
                  up to a full battery every morning. And when you’re on the
                  road, it’s easy to plug in along the way—at any public station
                  or with the Tesla charging network. We currently have over
                  30,000 Superchargers worldwide, with six new locations opening
                  every week.
                </SubContent>
              </Box>
              <Box padding="4rem 2rem">
                <Box className="show">
                  <img
                    src="https://tesla-cdn.thron.com/delivery/public/image/tesla/31a606f1-7ae2-456e-8588-f5a779759336/bvlatuR/std/0x0/model-3-range-map"
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
                <Stack
                  direction="row"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  className="show"
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
            </HorizonWrapper>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
