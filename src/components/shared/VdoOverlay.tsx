import { Box, Stack } from "@mui/material";
import { VdoOverlay } from "@components/shared/Wrapper";
import { MainTitleContent, VdoOverlayText } from "@components/shared/Title";

export default function VidsOverlay() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        padding: "10rem",
        width: "15vw",
      }}
    >
      <Stack direction="column" spacing={10}>
        <Box zIndex={1} className="show">
          <MainTitleContent>360°</MainTitleContent>
          <VdoOverlayText>
            Rear, side and forward-facing cameras provide maximum visibility
          </VdoOverlayText>
        </Box>
        <Box zIndex={1} className="show">
          <MainTitleContent>250 m</MainTitleContent>
          <VdoOverlayText>
            Powerful visual processing at up to 250 meters of range
          </VdoOverlayText>
        </Box>
        <Box zIndex={1} className="show">
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
            <MainTitleContent style={{ fontSize: ".9rem" }} className="show">
              Ultrasonic
              <br />
              Sensors
            </MainTitleContent>
          </Stack>
          <VdoOverlayText className="show">
            Detects nearby cars, helps prevent potential collisions and assists
            with parking
          </VdoOverlayText>
        </Box>
      </Stack>
    </Box>
  );
}
