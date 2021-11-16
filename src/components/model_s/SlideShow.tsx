import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, SliderAdjust } from "@components/shared/Wrapper";
import { MainTitleContent, FeatureSubTitle } from "@components/shared/Title";
import SimpleImageSlider from "react-simple-image-slider";
import { MsContainer_images } from "@constants/cybertruckSlider";
import { MsContainer_text } from "@constants/cybertruckSlider";
import { useRef, useState } from "react";
import { keys } from "@mui/system";

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
                height={534}
                images={MsContainer_images}
                showBullets={true}
                showNavs={true}
                navSize={30}
              />
              <Box width="50%" padding="1.2rem">
                {MsContainer_text.map(({ title, subContent }, index) => (
                  <Stack direction="column" spacing={2} key={index}>
                    <MainTitleContent
                      style={{ color: "white", fontSize: "1.5rem" }}
                    >
                      {title}
                    </MainTitleContent>
                    <FeatureSubTitle>{subContent}</FeatureSubTitle>
                  </Stack>
                ))}
              </Box>
            </Box>
          </Stack>
        </SliderAdjust>
      </BackgroundWrapper>
    </>
  );
}
