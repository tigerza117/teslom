import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, VerticalWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline, Dot } from "@components/shared/Button";
import { VerticalContent } from "@layouts/VertiContent";

export function Utility() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <VerticalContent>
          <Box>
            <Stack direction="column">
              <SubTitleContent>Utility</SubTitleContent>
              <MainTitleContent>
                A Place For
                <br /> Everything
              </MainTitleContent>
              <Box>
                <BtnOutline>ORDER NOW</BtnOutline>
              </Box>
            </Stack>
          </Box>
          <VerticalWrapper>
            <SubContent>
              Model Y provides maximum versatility--able to carry 7 passengers
              and their cargo. Each second row seat folds flat independently,
              creating flexible storage for skis, furniture, luggage and more.
              The lifegate opens to a low trunk floor that makes loading and
              unloading easy and quick.
            </SubContent>
          </VerticalWrapper>
        </VerticalContent>
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
                width: "65vw",
                height: "auto",
                objectFit: "cover",
                objectPosition: "0 62%",
                margin: "auto",
                padding: "1rem",
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
