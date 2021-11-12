import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, TitleWrapper } from "@components/shared/Wrapper";
import { MainTitleContent, SubContent } from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function OrderNow() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
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
                <MainTitleContent>Model X</MainTitleContent>
                <Box>
                  <Stack direction="row" spacing={4}>
                    <BtnOutline style={{ margin: "0", padding: ".4rem 4rem" }}>
                      order now
                    </BtnOutline>
                    <BtnOutline style={{ padding: ".4rem 5.5rem" }}>
                      compare
                    </BtnOutline>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f63a4f07-09f2-486b-b92f-bafdbcd2e4d3/bvlatuR/std/1660x920/MX-Order-Hero-Desktop"
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
