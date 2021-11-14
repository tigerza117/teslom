import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Utility() {
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
              <Stack direction="column" padding="2.5rem 2rem 0 2rem">
                <SubTitleContent>Utility</SubTitleContent>
                <MainTitleContent>Even More Capable</MainTitleContent>
                <SubContent style={{ padding: "4rem 0 0 0" }}>
                  With the most storage space and towing capacity of any
                  electric SUV, and seating for up to seven adults, Model X
                  delivers maximum utility. Front doors open and close
                  automatically, Falcon Wing doors allow for easier loading and
                  a standard trailer hitch lets you bring your gear anywhere you
                  go.
                </SubContent>
              </Stack>
              <Box>
                <BtnOutline
                  style={{
                    padding: ".3rem 1.5rem",
                    marginLeft: "2rem",
                    marginBottom: "7rem",
                  }}
                >
                  Order now
                </BtnOutline>
              </Box>
            </Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/a3472e33-60ae-44ff-a0b9-43e62cf1ff31/bvlatuR/std/2880x1800/MX-Utility-Hero-Desktop"
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
