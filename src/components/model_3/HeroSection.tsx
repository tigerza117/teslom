import { Box, Stack } from "@mui/material";
import ExpandingLight from "@layouts/ExpandIcon-light";
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
} from "@components/shared/Title";

export function HeroSection() {
  return (
    <>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/8fa80996-ac5c-4cef-9534-a61a9457bfb3/bvlatuR/std/2880x1800/M3-Hero-LHD-US-D)`,
        }}
        id="hero"
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
    </>
  );
}
