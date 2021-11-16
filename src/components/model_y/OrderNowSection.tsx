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
                  Order Model Y
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
              src="https://www.tesla.com/sites/default/files/drupal8/modely/ModelY_Order_Hero.jpg"
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
