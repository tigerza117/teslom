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

export function BeyondLu() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white", height: "auto" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/e13368c8-5657-468e-aa16-a28d9dc763c6/bvlatuR/std/2880x1800/MX-Performance-Hero-Desktop"
          loading="lazy"
          style={{
            width: "100%",
            height: "80vh",
            objectFit: "cover",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ margin: "-10rem auto", padding: "1.8rem 0" }}>
            <Stack direction="row" spacing={8} textAlign="center">
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>1,020hp</FeatureTitle>
                  <FeatureSubTitle>Peak power</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>9.9s</FeatureTitle>
                  <FeatureSubTitle>1/4 mile</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>2.5s</FeatureTitle>
                  <FeatureSubTitle>0-60 mph</FeatureSubTitle>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ padding: "2rem 0 6rem 0" }}>
          <Stack
            direction="row"
            spacing={15}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Plaid</SubTitleContent>
                <MainTitleContent>Beyond Ludicrous</MainTitleContent>
                <Box>
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                With the most power ad quickest acceleration of any SUC, Model X
                Plaid is the highest performing SUV ever built. All Model X
                powertrains, with updated battery architecture, can deliver
                instant torque at any speed.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
