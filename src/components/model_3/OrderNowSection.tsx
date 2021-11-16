import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, TitleWrapper } from "@components/shared/Wrapper";
import { MainTitleContent, SubContent } from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function OrderNow() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <Box
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box alignItems="center" margin="auto" padding="0 1rem 0 10rem ">
              <Stack spacing={6}>
                <MainTitleContent style={{ color: "white" }}>
                  Experience Model 3
                </MainTitleContent>
                <Box>
                  <Stack direction="row" spacing={4}>
                    <BtnOutline
                      color="white"
                      style={{ margin: "0", padding: ".4rem 4rem" }}
                    >
                      order now
                    </BtnOutline>
                    <BtnOutline
                      color="white"
                      style={{ padding: ".4rem 5.5rem" }}
                    >
                      compare
                    </BtnOutline>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/457dd9fa-6e32-43b1-a6cf-9b3d76e9e181/bvlatuR/std/2232x720/global-order-hero"
              loading="lazy"
              style={{
                width: "50vw",
                height: "100%",
                objectFit: "contain",
                float: "right",
              }}
            />
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
