import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import VidsOverlay from "@components/shared/VdoOverlay";

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
          <VidsOverlay />
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
