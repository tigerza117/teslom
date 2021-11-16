import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
  FeatureSubTitle,
  FeatureTitle,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Exterior() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
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
        <Box sx={{ padding: "3rem 0 6rem 0", width: "75vw", margin: "0 auto" }}>
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
                With the lowest drag coefficient on Earth and unmatched
                efficiency, Model S is built for speed and range. Together with
                a wider body and chassis, these elements help you go down the
                straight or around corners quicker than ever.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
