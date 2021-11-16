import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  HomeFeatureWrapper,
} from "@components/shared/Wrapper";
import {
  FeatureTitle,
  FeatureSubTitle,
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function DualMotor() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/48b20b9d-9322-4cf9-b079-44797fc32600/bvlatuR/std/0x0/AWD_hero@2"
          loading="lazy"
          style={{
            width: "100%",
            height: "70vh",
            objectFit: "cover",
            objectPosition: "0% 55%",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ margin: "-10rem auto", padding: "1.8rem 0" }}>
            <Stack
              direction="row"
              spacing={8}
              textAlign="center"
              justifyContent="center"
            >
              <HomeFeatureWrapper style={{ width: "20%" }}>
                <FeatureTitle>2</FeatureTitle>
                <FeatureSubTitle>
                  Independent motors digitally control torque to the front and
                  rear wheels
                </FeatureSubTitle>
              </HomeFeatureWrapper>
              <HomeFeatureWrapper style={{ width: "20%" }}>
                <FeatureTitle>3.5 s</FeatureTitle>
                <FeatureSubTitle>
                  Quickest acceleration--from zero to 60 mph* in as little as
                  3.5 seconds
                </FeatureSubTitle>
              </HomeFeatureWrapper>
              <HomeFeatureWrapper style={{ width: "20%" }}>
                <FeatureTitle>
                  <img
                    style={{
                      width: "40px",
                      height: "auto",
                    }}
                    src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ba09ef22-e9cc-4bda-a171-de1cd6f6cf6a/bvlatuR/std/0x0/weather"
                    alt=""
                  />
                </FeatureTitle>
                <FeatureSubTitle style={{ marginTop: "-8px" }}>
                  Capable in rain, snow, mud and off-road with superior traction
                  control
                </FeatureSubTitle>
              </HomeFeatureWrapper>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ padding: "2rem" }}>
          <Stack
            direction="row"
            spacing={15}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>All-Wheel Drive</SubTitleContent>
                <MainTitleContent>Dual Motor</MainTitleContent>
                <Box>
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                Tesla All-Wheel Drive has two ultra-responsive, independent
                electric motors that digitally control torque to the front and
                rear wheels—for far better handling, traction and stability
                control. Model Y is capable in rain, snow, mud and off-road.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
