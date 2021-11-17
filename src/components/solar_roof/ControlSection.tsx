import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, VerticalWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { VertiImg } from "@components/shared/Container";
import { VerticalContent } from "@layouts/VertiContent";

export function Control() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <VertiImg
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/7218535a-a8b7-4630-b4d5-17edcf5daa1d/bvlatuR/std/2880x1800/SR-tesla-app-D"
          alt=""
          loading="lazy"
        />
        <VerticalContent>
          <Box>
            <Stack direction="column">
              <SubTitleContent>Control</SubTitleContent>
              <MainTitleContent>Monitor and Optimize</MainTitleContent>
              <Box>
                <BtnOutline>ORDER NOW</BtnOutline>
              </Box>
            </Stack>
          </Box>
          <VerticalWrapper>
            <SubContent>
              With the Tesla app, you can monitor your energy production in real
              time. Control your system from anywhere with instant alerts and
              remote access.
            </SubContent>
          </VerticalWrapper>
        </VerticalContent>
      </BackgroundWrapper>
    </>
  );
}
