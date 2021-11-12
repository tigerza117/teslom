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
              <MainTitleContent style={{ color: "white" }}>
                Power Your Home
              </MainTitleContent>
            </Box>
            <Box>
              <SubContent style={{ color: "white" }}>
                Purchase solar today
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
