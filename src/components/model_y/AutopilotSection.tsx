import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Autopilot() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <video
          src="https://tesla-cdn.thron.com/static/WCL9WK_autopilot.mp4-2000_QQHSUM.mp4?xseo="
          style={{
            width: "100%",
            height: "72vh",
            objectFit: "cover",
          }}
          autoPlay
          loop
          preload="auto"
        />
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
                Autopilot's advanced safety and convenience features are
                designed to assist you with the most burdensome parts of
                driving.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
