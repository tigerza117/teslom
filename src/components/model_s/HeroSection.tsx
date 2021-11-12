import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, TitleWrapper } from "@components/shared/Wrapper";
import { BtnOutline } from "@components/shared/Button";
import {
  FeatureSubTitle,
  FeatureTitle,
  MainSubTitle,
  MainTitle,
} from "@components/shared/Title";

export const HeroSection = () => {
  return (
    <BackgroundWrapper
      sx={{
        backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop)`,
      }}
    >
      <TitleWrapper>
        <Box sx={{ marginTop: "12vh" }}>
          <Stack direction="column" spacing={-1}>
            <MainTitle>Model S</MainTitle>
            <MainSubTitle>Plaid</MainSubTitle>
          </Stack>
        </Box>
        <Box sx={{ margin: "0 auto", padding: "1.8rem 0" }}>
          <Stack direction="row" spacing={8}>
            <Box>
              <Stack direction="column" spacing={1}>
                <FeatureTitle>396 mi</FeatureTitle>
                <FeatureSubTitle>Range (EPA est.)</FeatureSubTitle>
              </Stack>
            </Box>
            <Box>
              <Stack direction="column" spacing={1}>
                <FeatureTitle>1.99 s</FeatureTitle>
                <FeatureSubTitle>0-60 mph*</FeatureSubTitle>
              </Stack>
            </Box>
            <Box>
              <Stack direction="column" spacing={1}>
                <FeatureTitle>200 mph</FeatureTitle>
                <FeatureSubTitle>Top Speed</FeatureSubTitle>
              </Stack>
            </Box>
            <Box>
              <Stack direction="column" spacing={1}>
                <FeatureTitle>1,020 hp</FeatureTitle>
                <FeatureSubTitle>Peak Power</FeatureSubTitle>
              </Stack>
            </Box>
            <Box>
              <BtnOutline color="white">ORDER NOW</BtnOutline>
            </Box>
          </Stack>
        </Box>
      </TitleWrapper>
    </BackgroundWrapper>
  );
};
