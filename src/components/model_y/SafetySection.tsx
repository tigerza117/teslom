import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import OverAll from "./OverAll";

export function Safety() {
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
                    padding: "0rem 0 0 2.5rem",
                  }}
                >
                  <SubTitleContent>Safety</SubTitleContent>
                  <MainTitleContent>Designed for Safety</MainTitleContent>
                  <SubContent style={{ padding: "3.5rem 0 0 0" }}>
                    Like every Tesla, Model Y is designed to be the safest
                    vehicle in its class. The lower center of gravity, rigid
                    body structure and large crumple zones provide unparalleled
                    protection.
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "3rem 0 0 2.5rem",
                  }}
                >
                  <OverAll />
                </Box>
                <Box
                  style={{
                    padding: "3rem 0 0 2.5rem",
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box>
              <img
                src="https://www.tesla.com/themes/custom/tesla_frontend/components/images/safety-model-y-hero.png"
                alt=""
                loading="lazy"
                style={{
                  width: "80vw",
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
