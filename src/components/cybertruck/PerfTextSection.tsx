import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";

import {
  MainSubtitleContent,
  SubtitleContent,
  InfoFeatureWrapper,
  InfoContainer,
} from "@components/cybertruck/Components";

export function PerfText() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <InfoFeatureWrapper>
          <Stack direction="column">
            <video
              src="https://www.tesla.com/xNVh4yUEc3B9/performance_video_desktop.mp4"
              style={{
                height: "64vh",
                width: "133vh",
                objectFit: "cover",
                paddingBottom: "20px",
              }}
              autoPlay
              loop
              preload="auto"
            />
            <InfoContainer
              style={{
                padding: "0px 0px 40px",
              }}
            >
              <Box sx={{ padding: "0px 0px 80px", width: "133vh" }}>
                <Stack
                  direction="row"
                  spacing={14}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box>
                    <MainSubtitleContent
                      sx={{
                        letterSpacing: "0.110rem",
                        padding: "0 0 1.125rem",
                        width: "34vh",
                        fontSize: "1.56rem",
                      }}
                      style={{
                        color: "white",
                      }}
                    >
                      PERFORMANCE AND EFFICIENCY
                    </MainSubtitleContent>
                  </Box>
                  <Box
                    sx={{
                      width: " 100%",
                      textAlign: "left",
                    }}
                  >
                    <SubtitleContent>
                      Now entering a new class of strength, speed and
                      versatility—only possible with an all-electric design. The
                      powerful drivetrain and low center of gravity provides
                      extraordinary traction control and torque—enabling
                      acceleration from 0-60 mph in as little as 2.9 seconds and
                      up to 500 miles of range.
                    </SubtitleContent>
                  </Box>
                </Stack>
              </Box>
            </InfoContainer>
          </Stack>
        </InfoFeatureWrapper>
      </BackgroundWrapper>
    </>
  );
}
