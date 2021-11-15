import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, TitleWrapper } from "@components/shared/Wrapper";
import { MainTitleContent, SubContent } from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function OrderNow() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <TitleWrapper style={{ justifyContent: "center" }}>
          <Stack direction="column" spacing={1}>
            <Box>
              <MainTitleContent >
                Transform Your Roof
              </MainTitleContent>
            </Box>
            <Box>
              <SubContent >
                Power your home with Solar Roof
              </SubContent>
            </Box>
            <Box>
              <BtnOutline color="white" style={{ margin: "1.5rem 0" }}>
                ORDER NOW
              </BtnOutline>
            </Box>
          </Stack>
        </TitleWrapper>
      </BackgroundWrapper>
    </>
  );
}
