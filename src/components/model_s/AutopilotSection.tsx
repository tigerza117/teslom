import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, VdoOverlay } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
  VdoOverlayText,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Autopilot() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box position="relative">
          <video
            src="https://tesla-cdn.thron.com/static/WCL9WK_autopilot.mp4-2000_QQHSUM.mp4?xseo="
            style={{
              width: "100%",
              height: "75vh",
              objectFit: "cover",
              zIndex: 0,
              position: "relative",
            }}
            autoPlay
            loop
            preload="auto"
          />
          <VdoOverlay>
            <Stack direction="column" spacing={3}>
              <Box zIndex={1}>
                <MainTitleContent>360°</MainTitleContent>
                <VdoOverlayText>
                  Rear, side and forward-facing cameras provide maximum
                  visibility
                </VdoOverlayText>
              </Box>
              <Box zIndex={1}>
                <MainTitleContent>250 m</MainTitleContent>
                <VdoOverlayText>
                  Powerful visual processing at up to 250 meters of range
                </VdoOverlayText>
              </Box>
              <Box zIndex={1}>
                <Stack direction="row" spacing>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "inline",
                      marginBottom: "8px",
                    }}
                    src="https://tesla-cdn.thron.com/delivery/public/image/tesla/0244c34f-2054-4549-9aff-a055db265926/bvlatuR/std/0x0/autopilot"
                    alt=""
                  />
                  <MainTitleContent style={{ fontSize: ".9rem" }}>
                    Ultrasonic
                    <br />
                    Sensors
                  </MainTitleContent>
                </Stack>
                <VdoOverlayText>
                  Detects nearby cars, helps prevent potential collisions and
                  assists with parking
                </VdoOverlayText>
              </Box>
            </Stack>
          </VdoOverlay>
        </Box>
        <Box sx={{ padding: "2rem 0" }}>
          <Stack
            direction="row"
            spacing={14}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Autopilot</SubTitleContent>
                <MainTitleContent>Future of Driving</MainTitleContent>
                <Box>
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                Autopilot enables your car to steer, accelerate and brake
                automatically within its lane under your active supervision,
                assisting with the most burdensome parts of driving. With
                over-the-air software updates, the latest enhancements are
                available instantly.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
