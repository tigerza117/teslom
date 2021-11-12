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
                <SubTitleContent>Pharetra</SubTitleContent>
                <MainTitleContent>Facilisis volutpat</MainTitleContent>
                <SubContent style={{ padding: "4rem 0 0 0" }}>
                  Turpis egestas sed tempus urna et pharetra pharetra massa.
                  Imperdiet nulla malesuada pellentesque elit eget gravida cum
                  sociis. Nec feugiat nisl pretium fusce id velit. Diam ut
                  venenatis tellus in metus vulputate. Faucibus scelerisque
                  eleifend donec pretium vulputate sapien nec sagittis aliquam.
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
