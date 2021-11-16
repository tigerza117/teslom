import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useRef, useEffect } from "react";
import { PictureSliderContainer } from "@components/cybertruck/Components";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { MsContainer_text } from "@constants/cybertruckSlider";
import { ContainerWrapper } from "@components/shared/Container";
import { SlideSubContent, SlideTitle } from "@components/shared/Title";
import { GridGall } from "./GridGallSection";
import { styled } from "@mui/system";
import { Dot } from "@components/shared/Button";

const Arrow = styled(ArrowForwardIosIcon)(() => ({
  color: "#fff",
  position: "absolute",
  right: "50px",
  top: "45%",
  border: "#fff solid 2px",
  fontSize: "1.25rem",
  padding: "0.5rem",
  backgroundColor: "#00000066",
  cursor: "pointer",
  zIndex: 10,
}));

interface SlideMeta {
  image: string;
  txt: {
    title: string;
    subtitle: string;
  };
}

interface ImageSliderControllerProps {
  slides: SlideMeta[];
}

const ImageSliderController = ({ slides }: ImageSliderControllerProps) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goIndex = (index: number) => {
    setCurrent(index);
  };

  return (
    <>
      <ImageSliderViewer
        current={slides[current]}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <Stack
        direction="row"
        sx={{
          padding: "3rem 10rem",
        }}
        spacing={5}
      >
        <ImageSliderBullets
          currentIndex={current}
          size={length}
          goIndex={goIndex}
        />
        <ImageSliderDetail current={slides[current]} />
      </Stack>
    </>
  );
};

interface ImageSliderBulletsPorps {
  currentIndex: number;
  size: number;
  goIndex: (index: number) => void;
}

const ImageSliderBullets = ({
  currentIndex,
  size,
  goIndex,
}: ImageSliderBulletsPorps) => {
  const list = [...Array(size).keys()];

  return (
    <Stack direction="row" sx={{ paddingTop: "0.5rem" }}>
      {list.map((i) => {
        return (
          <Dot
            className={currentIndex === i ? "active" : ""}
            key={i}
            onClick={() => {
              goIndex(i);
            }}
          />
        );
      })}
    </Stack>
  );
};

interface ImageSliderDetailPorps {
  current: SlideMeta;
}

const ImageSliderDetail = ({ current }: ImageSliderDetailPorps) => {
  return (
    <Box sx={{ color: "white" }}>
      <Box
        sx={{
          fontSize: "1.75rem",
          fontWeight: "700",
          paddingBottom: "1rem",
        }}
      >
        {current.txt.title}
      </Box>
      <Box>{current.txt.subtitle}</Box>
    </Box>
  );
};

interface ImageSliderViewerProps {
  current: SlideMeta;
  nextSlide: () => void;
  prevSlide: () => void;
}

const ImageSliderViewer = ({
  current,
  nextSlide,
  prevSlide,
}: ImageSliderViewerProps) => {
  return (
    <Box
      sx={{
        backgroundPosition: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        margin: "auto",
        display: "flex",
        padding: 0,
        width: "100%",
        position: "relative",
      }}
    >
      <Arrow
        sx={{ transform: "rotate(180deg)", left: "50px" }}
        onClick={prevSlide}
      />
      <Box>
        <img
          src={current.image}
          style={{
            display: "flex",
            width: "100%",
          }}
        />
      </Box>
      <Arrow onClick={nextSlide} />
    </Box>
  );
};

export function ImageSlide() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <ContainerWrapper>
          <ImageSliderController slides={MsContainer_text} />
          <GridGall />
        </ContainerWrapper>
      </BackgroundWrapper>
    </>
  );
}
