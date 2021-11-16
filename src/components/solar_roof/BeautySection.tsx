import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { RowSectionBlock } from "@components/shared/Section";

export function BeautyRoof() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/de6a52fa-f842-422e-a248-c44f036154a6/bvlatuR/std/2880x1800/SR-Design-D"
          alt=""
          loading="lazy"
          style={{
            width: "100vw",
            height: "63vh",
            objectFit: "cover",
            objectPosition: "0 62%",
          }}
        />
        <RowSectionBlock
          style={{
            margin: "3rem auto 0 auto",
          }}
        >
          <Box style={{ width: "40%" }}>
            <Stack direction="column">
              <SubTitleContent>Design</SubTitleContent>
              <MainTitleContent>A Beautiful Roof</MainTitleContent>
              <Box style={{ padding: "1rem 0" }}>
                <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
              </Box>
            </Stack>
          </Box>
          <Box>
            <SubContent>
              Install Solar Roof and power your home with a fully integrated
              solar and storage system. With a seamless design, each tile looks
              great up-close or from the street, complementing your home’s
              natural aesthetic styling.
            </SubContent>
          </Box>
        </RowSectionBlock>
      </BackgroundWrapper>
    </>
  );
}
