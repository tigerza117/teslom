import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { RowSectionBlock } from "@components/shared/Section";

export function Control() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/7218535a-a8b7-4630-b4d5-17edcf5daa1d/bvlatuR/std/2880x1800/SR-tesla-app-D"
          alt=""
          loading="lazy"
          style={{
            width: "100vw",
            height: "65vh",
            objectFit: "cover",
            objectPosition: "0 51%",
          }}
        />
        <RowSectionBlock
          style={{
            margin: "3rem auto 0 auto",
          }}
        >
          <Box style={{ width: "40%" }}>
            <Stack direction="column">
              <SubTitleContent>Control</SubTitleContent>
              <MainTitleContent>Monitor and Optimize</MainTitleContent>
              <Box style={{ padding: "1rem 0" }}>
                <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
              </Box>
            </Stack>
          </Box>
          <Box>
            <SubContent>
              With the Tesla app, you can monitor your energy production in real
              time. Control your system from anywhere with instant alerts and
              remote access.
            </SubContent>
          </Box>
        </RowSectionBlock>
      </BackgroundWrapper>
    </>
  );
}
