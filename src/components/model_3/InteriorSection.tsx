import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, VdoOverlay } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
  VdoOverlayText,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export function Interior() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <img
            loading="lazy"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/d4f29128-35ad-4912-9282-32701225c77b/bvlatuR/std/1920x1080/lhd-interior-hero-desktop"
            style={{
              width: "100%",
              height: "72vh",
              objectFit: "cover",
            }}
          />
          <Box>
            <VdoOverlay style={{ float: "right", paddingRight: "1rem" }}>
              <Stack direction="column" spacing={3}>
                <Box zIndex={1} style={{ color: "white" }}>
                  <MainTitleContent style={{ color: "white" }}>
                  15
inch
                  </MainTitleContent>
                  <VdoOverlayText>
                  A touchscreen display designed to improve over time
                  </VdoOverlayText>
                </Box>
                <Box zIndex={1} style={{ color: "white" }}>
                <Stack direction="row" spacing={1}>
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        display: "inline",
                        marginBottom: "8px",
                      }}
                      src="https://tesla-cdn.thron.com/delivery/public/image/tesla/863c27b1-9268-486c-ab6a-b807d0e7d096/bvlatuR/std/0x0/wifi"
                      alt=""
                    />
                  </Stack>
                  <VdoOverlayText>
                  Over-the-air software updates introduce new features, functionality and performance
                  </VdoOverlayText>
                </Box>
                <Box zIndex={1} style={{ color: "white" }}>
                  <Stack direction="row" spacing={1}>
                    <img
                      style={{
                        width: "auto",
                        height: "40px",
                        display: "inline",
                        marginBottom: "8px",
                      }}
                      src="https://tesla-cdn.thron.com/delivery/public/image/tesla/af5593f2-3cc8-40b1-8063-d3f4631276a0/bvlatuR/std/4096x1905/model-3-interior-hero-roof-badge"
                      alt=""
                    />
                  </Stack>
                  <VdoOverlayText>
                  An expansive Glass Roof provides more headroom and UV protection
                  </VdoOverlayText>
                </Box>
              </Stack>
            </VdoOverlay>
          </Box>
        </Box>
        <Box padding="1.5rem 0 0 0">
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
