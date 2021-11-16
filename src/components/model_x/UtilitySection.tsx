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

export function Utility() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="column" padding="2.5rem 2rem 0 2rem">
                <SubTitleContent>Utility</SubTitleContent>
                <MainTitleContent>Even More Capable</MainTitleContent>
                <SubContent style={{ padding: "4rem 0 0 0" }}>
                  With the most storage space and towing capacity of any
                  electric SUV, and seating for up to seven adults, Model X
                  delivers maximum utility. Front doors open and close
                  automatically, Falcon Wing doors allow for easier loading and
                  a standard trailer hitch lets you bring your gear anywhere you
                  go.
                </SubContent>
              </Stack>
              <Box>
                <BtnOutline
                  style={{
                    padding: ".3rem 1.5rem",
                    marginLeft: "2rem",
                    marginBottom: "7rem",
                  }}
                >
                  Order now
                </BtnOutline>
              </Box>
            </Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/a3472e33-60ae-44ff-a0b9-43e62cf1ff31/bvlatuR/std/2880x1800/MX-Utility-Hero-Desktop"
              loading="lazy"
              style={{
                width: "70vw",
                height: "100vh",
                objectFit: "cover",
              }}
            />
          </Stack>
          <Box sx={{ margin: "-10rem auto" }}>
            <Stack
              direction="row"
              spacing={5}
              sx={{
                width: "55vw",
                display: "flex",
                justifyContent: "space-around",
                paddingLeft: "38vw",
              }}
            >
              <Box>
                <Stack direction="column" spacing={1} textAlign="center">
                  <FeatureTitle>91 ft³</FeatureTitle>
                  <FeatureSubTitle>Storage Capacity</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={1} textAlign="center">
                  <FeatureTitle>5,000 lbs</FeatureTitle>
                  <FeatureSubTitle>Towning capacity</FeatureSubTitle>
                </Stack>
              </Box>
              <Box>
                <Stack
                  direction="column"
                  spacing={1}
                  textAlign="center"
                  alignItems="center"
                >
                  <img
                    style={{ width: "50px", padding: "7px 0 5px 0" }}
                    src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2aaf5525-7188-4a96-9c6a-3ce06aa61c64/bvlatuR/std/111x84/MX-Falcon-Wings-Badge"
                    alt=""
                  />
                  <FeatureSubTitle>Falcon Wing doors</FeatureSubTitle>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
