import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, VdoOverlay } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
  VdoOverlayText
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export function Autopilot() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
        <video
          src="https://tesla-cdn.thron.com/delivery/public/video/tesla/65011bbb-6f1c-422e-9e7a-727ba24bad15/bvlatuR/WEBHD/autopilot"
          style={{
            width: "100vw",
            height: "75vh",
            objectFit: "cover",
            zIndex: -1,
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
                <Stack direction="row" spacing={1}>
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
        <Box padding="1rem 0 0 0">
          <Stack
            direction="row"
            spacing={14}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Autopilot</SubTitleContent>
                <MainTitleContent>Future of Driving</MainTitleContent>
                <Stack
                  direction="row"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
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
