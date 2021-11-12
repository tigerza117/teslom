import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  HomeFeatureWrapper,
  TitleWrapper,
} from "@components/shared/Wrapper";
import {
  FeatureSubTitle,
  FeatureTitle,
  MainTitle,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ExpandingLight from "@layouts/ExpandIcon-light";

export function HeroSection() {
  return (
    <>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2)`,
        }}
      >
        <TitleWrapper>
          <Box sx={{ marginTop: "12vh", marginBottom: "auto" }}>
            <Stack direction="column" spacing={-1}>
              <MainTitle>Model Y</MainTitle>
            </Stack>
          </Box>
          <Box margin="0 auto" display="flex">
            <Stack direction="column">
              <Box>
                <Stack direction="row" margin="auto">
                  <HomeFeatureWrapper>
                    <FeatureTitle>inferno</FeatureTitle>
                    <FeatureSubTitle>Zombie ipsum</FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>inferno</FeatureTitle>
                    <FeatureSubTitle>Zombie ipsum</FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>
                      <FeatureTitle>inferno</FeatureTitle>
                    </FeatureTitle>
                    <FeatureSubTitle>Zombie ipsum</FeatureSubTitle>
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
