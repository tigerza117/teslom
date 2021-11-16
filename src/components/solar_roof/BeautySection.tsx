import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { VerticalWrapper } from "@components/shared/Wrapper";
import { VerticalContent } from "@layouts/VertiContent";
import { VertiImg } from "@components/shared/Container";

export function BeautyRoof() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <VertiImg
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/de6a52fa-f842-422e-a248-c44f036154a6/bvlatuR/std/2880x1800/SR-Design-D"
          alt=""
          loading="lazy"
        />
        <VerticalContent>
          <Box>
            <Stack direction="column">
              <SubTitleContent>Design</SubTitleContent>
              <MainTitleContent>A Beautiful Roof</MainTitleContent>
              <Box>
                <BtnOutline>ORDER NOW</BtnOutline>
              </Box>
            </Stack>
          </Box>
          <VerticalWrapper>
            <SubContent>
              Install Solar Roof and power your home with a fully integrated
              solar and storage system. With a seamless design, each tile looks
              great up-close or from the street, complementing your home’s
              natural aesthetic styling.
            </SubContent>
          </VerticalWrapper>
        </VerticalContent>
      </BackgroundWrapper>
    </>
  );
}
