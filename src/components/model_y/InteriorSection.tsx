import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import PicsOverlay from "@components/shared/ImgOverlay";

export function Interior() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
        <img
          loading="lazy"
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8288d520-cd1a-468d-89eb-e73cfde99355/bvlatuR/std/2880x1800/Model-Y-Interior-Hero-Desktop-NA-KR"
          style={{
            width: "100%",
            height: "72vh",
            objectFit: "cover",
          }}
          alt=""
        />
        <PicsOverlay />
        </Box>
        <Box sx={{ padding: "2rem 0" }}>
          <Stack
            direction="row"
            spacing={14}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Interior</SubTitleContent>
                <MainTitleContent>Built Around the Driver</MainTitleContent>
                <Box>
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                With an elevated seating position and low dash, the driver has a
                commanding view of the road ahead. The interior of Model Y is
                simple and clean, with a 15-inch touch screen, immersive sound
                system and an expansive all-glass roof that creates extra
                headroom and provides a seamless view of the sky.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
