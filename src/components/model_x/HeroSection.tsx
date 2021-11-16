import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, TitleWrapper } from "@components/shared/Wrapper";
import {
  FeatureSubTitle,
  FeatureTitle,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { HeroSubTitle, HeroTitle } from "@components/shared/Heroes";

export function HeroSection() {
  return (
    <>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop)`,
        }}
        id="hero"
      >
        <TitleWrapper>
          <Box sx={{ marginTop: "12vh" }}>
            <Stack direction="column" spacing={-1}>
              <HeroTitle>Model X</HeroTitle>
              <HeroSubTitle>Plaid</HeroSubTitle>
            </Stack>
          </Box>
          <Box sx={{ margin: "0 auto", padding: "1.8rem 0" }}>
            <Stack direction="row" spacing={8}>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>333mi</FeatureTitle>
                  <FeatureSubTitle>Range (EPA est.)</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>2.5s</FeatureTitle>
                  <FeatureSubTitle>0-60 mph*</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>9.9s</FeatureTitle>
                  <FeatureSubTitle>1/4 Mile</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>1,020hp</FeatureTitle>
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
    </>
  );
}
