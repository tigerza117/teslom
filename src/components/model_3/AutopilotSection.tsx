import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, VerticalWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import VidsOverlay from "@components/shared/VdoOverlay";
import { VerticalContent } from "@layouts/VertiContent";

export function Autopilot() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <video
          src="https://tesla-cdn.thron.com/delivery/public/video/tesla/65011bbb-6f1c-422e-9e7a-727ba24bad15/bvlatuR/WEBHD/autopilot"
          style={{
            width: "100vw",
            height: "66vh",
            objectFit: "cover",
            zIndex: -1,
          }}
          autoPlay
          loop
          preload="auto"
        />
        <VidsOverlay />
        <VerticalContent>
          <Box>
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
          </Box>
          <VerticalWrapper>
            <SubContent>
              Autopilot's advanced safety and convenience features are designed
              to assist you with the most burdensome parts of driving.
            </SubContent>
          </VerticalWrapper>
        </VerticalContent>
      </BackgroundWrapper>
    </>
  );
}
