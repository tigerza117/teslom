import { Box, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useRef } from "react";
import { PictureSliderContainer } from "@components/cybertruck/Components";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { MsContainer_text } from "@constants/cybertruckSlider";
import { SlidershowContent } from "@components/cybertruck/Components";
import { SlideSubContent, SlideTitle } from "@components/shared/Title";

const ImageSlider = ({ slides }: { slides: any }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const refText = useRef(null);
  const refTitle = useRef(null);
  const timeOut = setTimeout(function () {}, 1000);

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Box>
      <PictureSliderContainer
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            color: "#fff",
            position: "relative",
            left: "80px",
            bottom: "40px",
            border: "#fff solid 2px",
            fontSize: "25px",
            backgroundColor: "#00000066",
            transform: "rotate(180deg)",
            cursor: "pointer",
          }}
          onClick={prevSlide}
        ></ArrowForwardIosIcon>

        {MsContainer_text.map((slide, index) => {
          return (
            <Box>
              <Box
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    src={slide.image}
                    loading="lazy"
                    style={{
                      padding: "0 0 20px",
                      display: "flex",
                      width: "60vw",
                    }}
                  ></img>
                )}
              </Box>
              <Box
                className={index === current ? "slide active" : "slide"}
                key={index}
                style={{ width: "auto" }}
              >
                <Box>
                  {index === current && (
                    <SlideTitle style={{ width: "35vw" }}>
                      {slide.txt.title}
                    </SlideTitle>
                  )}
                  {index === current && (
                    <SlideSubContent style={{ width: "35vw" }}>
                      {slide.txt.subtitle}
                    </SlideSubContent>
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}

        <ArrowForwardIosIcon
          sx={{
            color: "#fff",
            position: "relative",
            right: "80px",
            bottom: "35px",
            border: "#fff solid 2px",
            fontSize: "25px",
            backgroundColor: "#00000066",
            cursor: "pointer",
          }}
          onClick={nextSlide}
        ></ArrowForwardIosIcon>
      </PictureSliderContainer>
    </Box>
  );
};

export function ImageSlide() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <ImageSlider slides={MsContainer_text}></ImageSlider>
      </BackgroundWrapper>
    </>
  );
}
