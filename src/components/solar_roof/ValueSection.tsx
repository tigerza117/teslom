import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { HorizonContent } from "@layouts/HoriContent";
import { HoriImg } from "@components/shared/Container";

export function Value() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <HorizonContent>
              <SubTitleContent>Value</SubTitleContent>
              <MainTitleContent>Pay Less for Electricity</MainTitleContent>
              <SubContent style={{ padding: "1rem 0" }}>
                Solar Roof is the only roof that can help pay for itself with
                the enery you produce. Power your home at the lowest price per
                watt of any national provider and take control of your monthly
                electricity bill.
              </SubContent>
            </HorizonContent>
            <Box>
              <HoriImg
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/4aedd73e-cd73-4051-9cc7-68955ad4646d/bvlatuR/std/2880x1800/SR-Value-D"
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
