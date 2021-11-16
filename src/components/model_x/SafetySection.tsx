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
              }}
            >
              <Stack direction="column" padding="2.5rem 0 0 3rem">
                <SubTitleContent>Safety</SubTitleContent>
                <MainTitleContent>Built for Safety</MainTitleContent>
                <SubContent style={{ padding: "4rem 0 0 0" }}>
                  Model X is built from the ground up as an electric vehicle,
                  with a high-strength architecture and floor-mounted battery
                  pack for incredible occupant protection and low rollover risk.
                  Every Model X includes Tesla's latest active safety features,
                  such as Automatic Emergency Braking, at no extra cost.
                </SubContent>
              </Stack>
              <Box>
                <BtnOutline
                  style={{
                    padding: ".3rem 1.5rem",
                    marginLeft: "3rem",
                    marginBottom: "7rem",
                  }}
                >
                  Order now
                </BtnOutline>
              </Box>
            </Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c072655e-fe87-438f-9f5f-54dc587f64fd/bvlatuR/std/1920x1080/MX-Safety-Hero-Desktop"
              loading="lazy"
              style={{
                width: "70vw",
                height: "100vh",
                objectFit: "cover",
              }}
            />
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
