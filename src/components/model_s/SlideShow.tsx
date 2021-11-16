import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, SliderAdjust } from "@components/shared/Wrapper";
import { MainTitleContent, FeatureSubTitle } from "@components/shared/Title";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/82d678c3-1d60-4827-887b-eb44bbac528f/bvlatuR/std/2442x1124/MS-Interior-Carousel-A-Desktop" },
  { url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/bb2fe12c-36d1-4e56-957c-cd6c1b8a8f40/bvlatuR/std/2442x1124/MS-Interior-Carousel-B-Desktop" },
  { url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/118a3cee-9850-437d-b9e8-e88695d58906/bvlatuR/std/2442x1124/MS-Interior-Carousel-C-Desktop" },
  { url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/8dfd0c9e-45d5-4782-a071-c597c372429f/bvlatuR/std/2442x1124/MS-Interior-Carousel-D-Desktop" },
];

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
              <SimpleImageSlider
                width={"65vw"}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
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
