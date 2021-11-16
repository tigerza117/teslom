import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
  FeatureTitle,
  FeatureSubTitle,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export function Range() {
  return (
    <>
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
                      <FeatureTitle>358mi</FeatureTitle>
                      <FeatureSubTitle>
                        Go anywhere with up to 358 miles of estimated range on a
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
                      <FeatureTitle>15min</FeatureTitle>
                      <FeatureSubTitle>
                        Supercharge up to 175 miles in 15 minutes at
                        Supercharger locations
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
                        Superchargers placed along popular well-traveled routes
                        around the world
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
                  Model 3 is fully electric, so you never need to visit a gas
                  station again. If you charge overnight at home, you can wake
                  up to a full battery every morning. And when you’re on the
                  road, it’s easy to plug in along the way—at any public station
                  or with the Tesla charging network. We currently have over
                  25,000 Superchargers worldwide, with six new locations opening
                  every week.
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
    </>
  );
}
