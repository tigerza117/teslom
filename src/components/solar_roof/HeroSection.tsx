import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  HomeFeatureWrapper,
  TitleWrapper,
} from "@components/shared/Wrapper";
import { FeatureSubTitle, FeatureTitle } from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ExpandingLight from "@layouts/ExpandIcon-light";
import { HeroSubTitle, HeroTitle } from "@components/shared/Heroes";

export function HeroSection() {
  return (
    <>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/b614dd66-cc50-4cba-8c15-186b95bb4a8d/bvlatuR/std/2880x1800/sr-storm-desktop)`,
        }}
        id="hero"
      >
        <TitleWrapper>
          <Box sx={{ marginTop: "12vh", marginBottom: "auto" }}>
            <Stack direction="column" spacing={-1}>
              <HeroTitle>Solar Roof</HeroTitle>
              <HeroSubTitle>
                Transform your roof and produce clean energy
              </HeroSubTitle>
            </Stack>
          </Box>
          <Box margin="0 auto" display="flex">
            <Stack direction="column">
              <Box>
                <Stack direction="row" margin="auto">
                  <HomeFeatureWrapper>
                    <Box>
                      <img
                        style={{
                          height: "2.8rem",
                          margin: "0",
                        }}
                        src="https://www.tesla.com/sites/default/files/solarroof/v3/hero/solar-roof-hero-solar_badge.svg"
                        alt=""
                      />
                    </Box>
                    <FeatureSubTitle>
                      Beautyful Solar <br /> Without Compromise
                      <br />
                    </FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>25-Year</FeatureTitle>
                    <FeatureSubTitle style={{ marginTop: ".15rem" }}>
                      Tile
                      <br />
                      Warranty
                    </FeatureSubTitle>
                  </HomeFeatureWrapper>
                  <HomeFeatureWrapper>
                    <FeatureTitle>24/7</FeatureTitle>
                    <FeatureSubTitle style={{ marginTop: ".15rem" }}>
                      Outage
                      <br />
                      Protection
                    </FeatureSubTitle>
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
