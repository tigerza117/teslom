import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Safety() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "4rem 2rem",
              }}
            >
              <Stack direction="column">
                <SubTitleContent className="show">Safety</SubTitleContent>
                <MainTitleContent className="show">
                  High Impact Protection
                </MainTitleContent>
                <SubContent style={{ padding: "4rem 0 0 0" }} className="show">
                  Model S is built from the ground up as an electric vehicle,
                  with a high-strength architecture and floor-mounted battery
                  pack for incredible occupant protection and low rollover risk.
                  Every Model S includes Tesla’s latest active safety features,
                  such as Automatic Emergency Braking, at no extra cost.
                </SubContent>
              </Stack>
              <Box>
                <BtnOutline className="show">Order now</BtnOutline>
              </Box>
            </Box>
            <Box sx={{ display: "flex", height: "100vh" }}>
              <img
                src="https://media.discordapp.net/attachments/896728497979019294/910434771757322280/Screenshot_2.png"
                loading="lazy"
                style={{
                  width: "75vw",
                  height: "auto",
                  objectFit: "cover",
                  margin: "auto 0",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
