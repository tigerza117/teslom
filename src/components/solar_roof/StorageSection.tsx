import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Storage() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <Stack direction="row">
            <Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    padding: "3rem 1.5rem",
                  }}
                >
                  <SubTitleContent>Energy Storage</SubTitleContent>
                  <MainTitleContent>Backup Protection</MainTitleContent>
                  <SubContent style={{ padding: "1rem 0" }}>
                    Powerwall is a compact home battery that is bundled with
                    every Tesla solar purchase, providing you with 24/7 energy
                    security. It stores the energy you produce with Solar Roof,
                    so you can power your home anytime—at night or during an
                    outage.
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "10rem 0 0 1.5rem",
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                    <BtnOutline>LEARN MORE</BtnOutline>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2d6d1f7e-4462-442a-ba8e-d70dec628948/bvlatuR/std/2880x1800/powerwall-energy-storage-desktop"
                alt=""
                loading="lazy"
                style={{
                  width: "70vw",
                  height: "100vh",
                  objectFit: "cover",
                  float: "right",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
