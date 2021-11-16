import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import PicsOverlay from "@components/shared/ImgOverlay";

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
          <PicsOverlay />
        </Box>
        <Box padding="1.5rem 0 0 0">
          <Stack
            direction="row"
            spacing={14}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Interior</SubTitleContent>
                <MainTitleContent>Built Around the Driver</MainTitleContent>
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
                The inside of Model 3 is unlike any other car. You can use your
                smartphone as a key, and access all driver controls in the
                central 15-inch touchscreen. The all-glass roof extends from
                front to back, creating a sense of openness from every seat.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
