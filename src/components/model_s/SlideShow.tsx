import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  SliderAdjust,
  SliderText,
} from "@components/shared/Wrapper";
import { MainTitleContent, FeatureSubTitle } from "@components/shared/Title";
import SimpleImageSlider from "react-simple-image-slider";
import { MsContainer_text } from "@constants/cybertruckSlider";
import { useState } from "react";
import { Dots } from "@components/shared/Button";

interface ImageSlide {
  title: string;
  url: string;
  subContent: string;
}
export function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState<ImageSlide>(
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
                width={"75vw"}
                height={545}
                images={MsContainer_text}
                showBullets={false}
                showNavs={true}
                navSize={35}
                slideDuration={0.01}
                onCompleteSlide={(index) => {
                  setCurrentIndex(MsContainer_text[index - 1]);
                }}
              />
              <SliderText>
                <Box padding="0 3rem">
                  <Dots />
                  <Dots />
                  <Dots />
                  <Dots />
                </Box>
                <Box width="60%">
                  <Stack spacing={2}>
                    <MainTitleContent
                      style={{ color: "white", fontSize: "1.5rem" }}
                    >
                      {currentIndex.title}
                    </MainTitleContent>
                    <FeatureSubTitle>{currentIndex.subContent}</FeatureSubTitle>
                  </Stack>
                </Box>
              </SliderText>
            </Box>
          </Stack>
        </SliderAdjust>
      </BackgroundWrapper>
    </>
  );
}
