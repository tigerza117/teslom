import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export function Autopilot() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
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
