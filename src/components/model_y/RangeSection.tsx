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

export function Range() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <Stack>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b6761e24-0f64-483a-b868-50c5bab803bd/bvlatuR/std/2880x1800/MS-Range-Hero-Desktop"
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
                      <FeatureTitle>330 mi</FeatureTitle>
                      <FeatureSubTitle>
                        Go anywhere with up to 330 miles of estimated range on a
                        single charge
                      </FeatureSubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction="column" spacing={1} textAlign="center">
                      <FeatureTitle>15 min</FeatureTitle>
                      <FeatureSubTitle>
                        Recharge up to 162 miles in 15 minutes at Supercharger
                        locations
                      </FeatureSubTitle>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction="column" spacing={1} textAlign="center">
                      <FeatureTitle>25,000+</FeatureTitle>
                      <FeatureSubTitle>
                        Superchargers placed along well-traveled routes around
                        the world
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
              <Stack direction="column" padding="2.5rem 1.5rem">
                <SubTitleContent>Range</SubTitleContent>
                <MainTitleContent>Go Anywhere</MainTitleContent>
                <SubContent style={{ padding: "1rem 0" }}>
                  Model Y is fully electric, so you never need to visit a gas
                  station again. If you charge overnight at home, you can wake
                  up to a full battery every morning. And when you’re on the
                  road, it’s easy to plug in along the way—at any public station
                  or with the Tesla charging network. We currently have over
                  25,000 Superchargers worldwide, with six new locations opening
                  every week.
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
    </>
  );
}
