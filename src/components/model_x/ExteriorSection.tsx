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
                  <FeatureSubTitle>
                    New wheels and improved handling
                  </FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={0.5}>
                  <FeatureTitle style={{ textAlign: "left" }}>
                    0.24 <i style={{ fontSize: "1rem" }}>Cd</i>
                  </FeatureTitle>
                  <FeatureSubTitle>Lowest-drag SUV Earth</FeatureSubTitle>
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
                With the lowest drag coefficient of any SUV, Model X is built
                for speed and range. Refined aerodynamic elements work together
                with new wheels and tires to help you travel farther, with
                sharper handling and better ride comfort.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
