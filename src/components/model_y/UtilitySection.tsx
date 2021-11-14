import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { RowSectionBlock } from "@components/shared/Section";

export function Utility() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5", height: "auto" }}>
        <RowSectionBlock
          style={{
            margin: "3rem auto 0 auto",
            width: "60%",
          }}
        >
          <Box style={{ width: "100%" }}>
            <Stack direction="column">
              <SubTitleContent>Utility</SubTitleContent>
              <MainTitleContent>A Place For Everything</MainTitleContent>
              <Box style={{ padding: "1rem 0" }}>
                <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
              </Box>
            </Stack>
          </Box>
          <Box style={{ width: "100vw" }}>
            <SubContent>
              Model Y provides maximum versatility--able to carry 7 passengers
              and their cargo. Each second row seat folds flat independently,
              creating flexible storage for skis, furniture, luggage and more.
              The lifegate opens to a low trunk floor that makes loading and
              unloading easy and quick.
            </SubContent>
          </Box>
        </RowSectionBlock>
        <Box
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          {/* carousel must be build in here*/}
          <Stack>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9e4a894d-e1ea-4c66-99f5-9881f3482ddc/bvlatuR/std/1920x1080/Model-Y-Utility-Desktop-NA-KR"
              alt=""
              loading="lazy"
              style={{
                width: "55vw",
                height: "auto",
                objectFit: "cover",
                objectPosition: "0 62%",
                margin: "auto",
                padding: ".5rem",
              }}
            />
            <SubTitleContent>
              Versatile seating and storage for cargo and passengers
            </SubTitleContent>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
