import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, SliderAdjust } from "@components/shared/Wrapper";
import { MainTitleContent, FeatureSubTitle } from "@components/shared/Title";
import SimpleImageSlider from "react-simple-image-slider";
import { MsContainer_text } from "@constants/cybertruckSlider";
import { useRef, useState } from "react";
import { keys } from "@mui/system";

interface ImageSlic {
  title: string;
  url: string;
  subContent: string;
}
export function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState<ImageSlic>(
    MsContainer_text[0]
  );
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
                height={534}
                images={MsContainer_text}
                showBullets={false}
                showNavs={true}
                navSize={30}
                slideDuration={0.1}
                onCompleteSlide={(index) => {
                  setCurrentIndex(MsContainer_text[index - 1]);
                }}
              />
              <Box width="50%" padding="1.2rem">
                <Box>
                  <MainTitleContent
                    style={{ color: "white", fontSize: "1.5rem" }}
                  >
                    {currentIndex.title}
                  </MainTitleContent>
                  <FeatureSubTitle>{currentIndex.subContent}</FeatureSubTitle>
                </Box>
              </Box>
            </Box>
          </Stack>
        </SliderAdjust>
      </BackgroundWrapper>
    </>
  );
}
