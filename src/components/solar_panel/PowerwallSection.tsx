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

export function Powerwall() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <VertiImg
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/173055ff-afe2-4114-947e-ba62cf8e05c6/bvlatuR/std/2880x1800/PW-Inverter-Hero-D"
          alt=""
          loading="lazy"
        />
        <VerticalContent>
          <Box>
            <Stack direction="column">
              <SubTitleContent>Powerwall</SubTitleContent>
              <MainTitleContent>Home Batter Backup</MainTitleContent>
              <Box style={{ padding: "1rem 0" }}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
                  </Box>
                  <Box>
                    <BtnOutline style={{ margin: "0" }}>learn more</BtnOutline>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <VerticalWrapper>
            <SubContent>
              Powerwall is bundled with every Tesla solar purchase, allowing you
              to store your solar energy for use anytime—at night or during an
              outage.
            </SubContent>
          </VerticalWrapper>
        </VerticalContent>
      </BackgroundWrapper>
    </>
  );
}
