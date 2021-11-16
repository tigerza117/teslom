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

export function Experience() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <VertiImg
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f7e7ce60-a70b-4dd9-883c-7baf1c0eb636/bvlatuR/std/2880x1800/SP-tesla-app-D"
          alt=""
          loading="lazy"
        />
        <VerticalContent>
          <Box>
            <Stack direction="column">
              <SubTitleContent>Experience</SubTitleContent>
              <MainTitleContent>24/7 Monitoring</MainTitleContent>
              <Box>
                <BtnOutline>ORDER NOW</BtnOutline>
              </Box>
            </Stack>
          </Box>
          <VerticalWrapper>
            <SubContent>
              Manage your solar system from anywhere in the world with 24/7
              mobile monitoring. Watch your energy in real time or set your
              preferences to optimize for energy independence.
            </SubContent>
          </VerticalWrapper>
        </VerticalContent>
      </BackgroundWrapper>
    </>
  );
}
