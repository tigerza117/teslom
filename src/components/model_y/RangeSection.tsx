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

export function Range() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <Box>
              <video
                src="https://tesla-cdn.thron.com/delivery/public/video/tesla/c63301a9-96bc-463d-9e5d-65f581cd87d6/bvlatuR/WEBHD/Range_Desktop"
                style={{
                  width: "79vw",
                  height: "100vh",
                  objectFit: "cover",
                }}
                autoPlay
                loop
                preload="auto"
              />
              <Box sx={{ margin: "-10rem 5rem" }}>
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
                      <FeatureTitle>330 mi</FeatureTitle>
                      <FeatureSubTitle>
                        Go anywhere with up to 330 miles of estimated range on a
                        single charge
                      </FeatureSubTitle>
                    </SubFeatureWrapper>
                  </Box>
                  <Box>
                    <SubFeatureWrapper
                      style={{ width: "280px" }}
                      className="show"
                    >
                      <FeatureTitle>15 min</FeatureTitle>
                      <FeatureSubTitle>
                        Recharge up to 162 miles in 15 minutes at Supercharger
                        locations
                      </FeatureSubTitle>
                    </SubFeatureWrapper>
                  </Box>
                  <Box>
                    <SubFeatureWrapper
                      style={{ width: "280px" }}
                      className="show"
                    >
                      <FeatureTitle>30,000+</FeatureTitle>
                      <FeatureSubTitle>
                        Superchargers placed along well- traveled routes around
                        the world
                      </FeatureSubTitle>
                    </SubFeatureWrapper>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <HorizonWrapper style={{ height: "95vh" }}>
              <Box
                sx={{
                  padding: "3rem 1.5rem 0 1.5rem",
                }}
                className="show"
              >
                <SubTitleContent>Range</SubTitleContent>
                <MainTitleContent>Go Anywhere</MainTitleContent>
                <SubContent>
                  Model Y is fully electric, so you never need to visit a gas
                  station again. If you charge overnight at home, you can wake
                  up to a full battery every morning. And when you’re on the
                  road, it’s easy to plug in along the way—at any public station
                  or with the Tesla charging network. We currently have over
                  25,000 Superchargers worldwide, with six new locations opening
                  every week.
                </SubContent>
              </Box>
              <Box padding="0 1.5rem">
                <Box>
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Box>
            </HorizonWrapper>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
