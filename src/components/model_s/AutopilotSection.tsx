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
            src="https://tesla-cdn.thron.com/static/WCL9WK_autopilot.mp4-2000_QQHSUM.mp4"
            style={{
              width: "100%",
              height: "70vh",
              objectFit: "cover",
            }}
            autoPlay
            loop
          />

          <VidsOverlay />
        </Box>
        <Box sx={{ padding: "2rem 0 6rem 0", width: "75vw", margin: "0 auto" }}>
          <Stack
            direction="row"
            spacing={14}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent className="show">Autopilot</SubTitleContent>
                <MainTitleContent className="show">
                  Future of Driving
                </MainTitleContent>
                <Box className="show">
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box width="45%" className="show">
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
