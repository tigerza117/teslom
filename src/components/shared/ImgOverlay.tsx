import { Box, Stack } from "@mui/material";
import { VdoOverlay } from "@components/shared/Wrapper";
import { MainTitleContent, VdoOverlayText } from "@components/shared/Title";

export default function PicsOverlay() {
  return (
    <Box>
      <VdoOverlay style={{ float: "right", paddingRight: "1rem" }}>
        <Stack direction="column" spacing={10}>
          <Box zIndex={1} style={{ color: "white" }} className="show">
            <MainTitleContent style={{ color: "white" }}>
              15 inch
            </MainTitleContent>
            <VdoOverlayText>
              A touchscreen display designed to improve over time
            </VdoOverlayText>
          </Box>
          <Box zIndex={1} style={{ color: "white" }} className="show">
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
              Over-the-air software updates introduce new features,
              functionality and performance
            </VdoOverlayText>
          </Box>
          <Box zIndex={1} style={{ color: "white" }} className="show">
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
  );
}
