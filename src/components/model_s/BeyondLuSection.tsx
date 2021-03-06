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
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/06e710a1-0428-45e9-8945-580e80d77b55/bvlatuR/std/2880x1800/MS-Performance-Hero-Desktop"
          loading="lazy"
          style={{
            width: "100%",
            height: "70vh",
            objectFit: "cover",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ margin: "-10rem auto", padding: "1.8rem 0" }}>
            <Stack direction="row" spacing={8} textAlign="center">
              <Box className="show">
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>1,020 hp</FeatureTitle>
                  <FeatureSubTitle>Peak power</FeatureSubTitle>
                </Stack>
              </Box>
              <Box className="show">
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>9.23 s</FeatureTitle>
                  <FeatureSubTitle>@155 mph 1/4 mile</FeatureSubTitle>
                </Stack>
              </Box>
              <Box className="show">
                <Stack direction="column" spacing={1}>
                  <FeatureTitle>1.99 s</FeatureTitle>
                  <FeatureSubTitle>0-60 mph</FeatureSubTitle>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ padding: "3rem 0 6rem 0", width: "65vw", margin: "0 auto" }}>
          <Stack
            direction="row"
            spacing={15}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent className="show">Plaid</SubTitleContent>
                <MainTitleContent className="show">
                  Beyond Ludicrous
                </MainTitleContent>
                <Box>
                  <BtnOutline className="show">ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box width="45%" className="show">
              <SubContent>
                With the longest range and quickest acceleration of any electric
                vehicle in production, Model S Plaid is the highest performing
                sedan ever built. Both Long Range and Plaid powertrains, with
                updated battery architecture, are capable of back-to-back,
                consistent 1/4 mile runs.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
