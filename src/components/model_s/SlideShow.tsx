import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, SliderAdjust } from "@components/shared/Wrapper";
import { MainTitleContent, FeatureSubTitle } from "@components/shared/Title";

export function SlideShow() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <SliderAdjust>
          <Stack direction="column">
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "67vw" }}
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8dfd0c9e-45d5-4782-a071-c597c372429f/bvlatuR/std/2442x1124/MS-Interior-Carousel-D-Desktop"
                alt=""
              />
              <Box width="50%" padding="1.2rem">
                <Stack direction="column" spacing={2}>
                  <MainTitleContent
                    style={{ color: "white", fontSize: "1.5rem" }}
                  >
                    Redesigned Second Row
                  </MainTitleContent>
                  <FeatureSubTitle>
                    Seating for three adults, with extra legroom, headroom and a
                    stowable armrest with integrated storage and wireless
                    charging.
                  </FeatureSubTitle>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </SliderAdjust>
      </BackgroundWrapper>
    </>
  );
}
