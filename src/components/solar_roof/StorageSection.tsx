import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { HoriImg } from "@components/shared/Container";
import { HorizonContentMore } from "@layouts/HoriContMore";

export function Storage() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <HorizonContentMore>
              <SubTitleContent>Energy Storage</SubTitleContent>
              <MainTitleContent>Backup Protection</MainTitleContent>
              <SubContent style={{ padding: "1rem 0" }}>
                Powerwall is a compact home battery that is bundled with every
                Tesla solar purchase, providing you with 24/7 energy security.
                It stores the energy you produce with Solar Roof, so you can
                power your home anytime—at night or during an outage.
              </SubContent>
            </HorizonContentMore>
            <Box>
              <HoriImg
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2d6d1f7e-4462-442a-ba8e-d70dec628948/bvlatuR/std/2880x1800/powerwall-energy-storage-desktop"
                alt=""
                loading="lazy"
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
