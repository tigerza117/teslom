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
                <MainTitleContent>Nunc consequat</MainTitleContent>
                <SubContent style={{ padding: "4rem 0 0 0" }}>
                  Curabitur vitae nunc sed velit. Placerat in egestas erat
                  imperdiet sed. Ut faucibus pulvinar elementum integer enim
                  neque. Amet facilisis magna etiam tempor orci eu. Posuere urna
                  nec tincidunt praesent semper feugiat nibh sed pulvinar. Velit
                  euismod in pellentesque massa.
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
