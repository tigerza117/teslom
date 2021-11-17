import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { VerticalWrapper } from "@components/shared/Wrapper";
import { VerticalContent } from "@layouts/VertiContent";

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
        <VerticalContent>
          <Box>
            <Stack direction="column">
              <SubTitleContent>Power On</SubTitleContent>
              <MainTitleContent>Order and Installation</MainTitleContent>
              <Box style={{ padding: "1rem 0" }}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <VerticalWrapper>
            <SubContent>
              From permitting to powering on, we’ll take care of everything.
              After you order, we’ll gather remote aerial imagery of your home,
              design your system, take care of any necessary permits and
              schedule your installation.
            </SubContent>
          </VerticalWrapper>
        </VerticalContent>
      </BackgroundWrapper>
    </>
  );
}
