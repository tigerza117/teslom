import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  TitleWrapper,
  HomeFeatureWrapper,
} from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
  FeatureTitle,
  FeatureSubTitle,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { RowSectionBlock } from "@components/shared/Section";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export function Perf() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3489a82e-b19c-457a-86a4-7ea9ac91aa1c/bvlatuR/std/1920x1080/lhd-performance-hero-desktop"
            alt=""
            loading="lazy"
            style={{
              width: "100vw",
              height: "72vh",
              objectFit: "cover",
              objectPosition: "0 60%",
            }}
          />
          <TitleWrapper>
            <Box margin="-8rem auto" display="flex">
              <Stack direction="column">
                <Box>
                  <Stack direction="row" margin="auto">
                    <HomeFeatureWrapper>
                      <FeatureTitle>3.1 s</FeatureTitle>
                      <FeatureSubTitle>
                        Quickest acceleration from zero to 60 mph* in as little
                        as 3.1 seconds
                      </FeatureSubTitle>
                    </HomeFeatureWrapper>
                    <HomeFeatureWrapper>
                      <FeatureTitle>162mph</FeatureTitle>
                      <FeatureSubTitle>
                        Improved handling and aerodynamics allow for a top speed
                        of 162 mph
                      </FeatureSubTitle>
                    </HomeFeatureWrapper>
                    <HomeFeatureWrapper>
                      <FeatureTitle>AWD</FeatureTitle>
                      <FeatureSubTitle>
                        Dual Motor All-Wheel Drive instantly controls traction
                        and torque, in all weather conditions
                      </FeatureSubTitle>
                    </HomeFeatureWrapper>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </TitleWrapper>
        </Box>
        <RowSectionBlock
          style={{
            margin: "1.5rem auto 0 auto",
          }}
        >
          <Box style={{ width: "65%", marginRight: "2.5rem" }}>
            <Stack direction="column">
              <SubTitleContent>Performance</SubTitleContent>
              <MainTitleContent>Quickest Acceleration</MainTitleContent>
              <Box style={{ padding: ".5rem 0" }}>
                <Box>
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
          <Box>
            <SubContent>
              Model 3 comes with the option of dual motor all-wheel drive, 20”
              Überturbine Wheels and Performance Brakes and lowered suspension
              for total control, in all weather conditions. And a carbon fiber
              spoiler improves stability at high speeds, all allowing Model 3 to
              accelerate from 0-60 mph* in as little as 3.1 seconds.
            </SubContent>
          </Box>
        </RowSectionBlock>
      </BackgroundWrapper>
    </>
  );
}
