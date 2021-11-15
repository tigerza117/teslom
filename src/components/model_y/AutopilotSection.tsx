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
        <Box>
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
                Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake
                muffin. Halvah croissant candy canes bonbon candy. Apple pie
                jelly beans topping carrot cake danish tart cake cheesecake.
                Muffin danish chocolate soufflé pastry icing bonbon oat cake.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
