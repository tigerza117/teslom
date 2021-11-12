import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Installation() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <video
          src="https://www.tesla.com/sites/default/files/solarpanels/power-on/solar-assessment-desktop.mp4"
          autoPlay
          muted
          style={{
            width: "100vw",
            height: "67vh",
            objectFit: "cover",
            objectPosition: "50%",
          }}
        />
        <Box sx={{ padding: "3rem 0 6rem 0" }}>
          <Stack
            direction="row"
            spacing={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Stack direction="column">
                <SubTitleContent>Powerwall</SubTitleContent>
                <MainTitleContent>Order and Installation</MainTitleContent>
                <Box>
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box width="45%">
              <SubContent>
                From permitting to powering on, we’ll take care of everything.
                After you order, we’ll gather remote aerial imagery of your
                home, design your system, take care of any necessary permits and
                schedule your installation.
              </SubContent>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
