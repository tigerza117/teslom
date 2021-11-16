import { Box, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useRef } from "react";
import { PictureSliderContainer } from "@components/cybertruck/Components";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { CybertruckPictureSlider } from "@constants/cybertruckSlider";

interface picSub {
  image: string;
  txt: string;
  title: string;
}

const ImageSlider = ({ slides }: { slides: any }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const refText = useRef(null);
  const refTitle = useRef(null);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
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
          border: "#fff solid 2px",
          fontSize: "25px",
          backgroundColor: "#00000066",
          transform: "rotate(180deg)",
          cursor: "pointer",
        }}
        onClick={prevSlide}
      ></ArrowForwardIosIcon>
      {CybertruckPictureSlider.map((slide, index) => {
        return (
          <BackgroundWrapper
            style={{ backgroundColor: "black", height: "auto" }}
          >
            <Box
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image}></img>}
            </Box>
            <Box>
              <Stack direction="column">
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <Box
                      ref={refTitle}
                      sx={{
                        color: "white",
                        fontSize: "100px",
                      }}
                    >
                      {slide.title}
                    </Box>
                  )}
                </Box>
                <Box
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <Box
                      ref={refText}
                      sx={{
                        color: "white",
                        fontSize: "100px",
                      }}
                    >
                      {slide.txt}
                    </Box>
                  )}
                </Box>
              </Stack>
            </Box>
          </BackgroundWrapper>
        );
      })}
      <ArrowForwardIosIcon
        sx={{
          color: "#fff",
          position: "relative",
          right: "80px",
          border: "#fff solid 2px",
          fontSize: "25px",
          backgroundColor: "#00000066",
          cursor: "pointer",
        }}
        onClick={nextSlide}
      ></ArrowForwardIosIcon>
    </PictureSliderContainer>
  );
};

export function ImageSlide() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <PictureSliderContainer
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <BackgroundWrapper
            style={{ backgroundColor: "black", height: "auto" }}
          >
            <PictureSliderContainer>
              <ImageSlider slides={CybertruckPictureSlider}></ImageSlider>
            </PictureSliderContainer>
          </BackgroundWrapper>
        </PictureSliderContainer>
      </BackgroundWrapper>
    </>
  );
}
