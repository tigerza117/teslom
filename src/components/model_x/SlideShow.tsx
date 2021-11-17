import { Box, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { MxContainer } from "@constants/cybertruckSlider";
import { ContainerWrapper } from "@components/shared/Container";
import { GridGall } from "./GridGallSection";
import { Dot } from "@components/shared/Button";
import { styled } from "@mui/system";
import { BackgroundWrapper } from "@components/shared/Wrapper";

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

const Galls = [
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/287c75d3-2f5d-481e-8a0f-0dc987f54e6b/bvlatuR/std/1040x584/MX-Interior-Grid-A-Desktop",
    title: "Game from Anywhere",
    sub: "Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.",
  },
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/08d2e941-2be2-4e1a-bed9-924ac30fb115/bvlatuR/std/1040x584/MS-Interior-Grid-B-Desktop",
    title: "Stay Connected",
    sub: "Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.",
  },
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/dcfc40cb-6b46-4be7-b173-be10e0c9143c/bvlatuR/std/1040x584/MS-Interior-Grid-C-Desktop",
    title: "Your Best Audio System",
    sub: "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.",
  },
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop",
    title: "Real Storage",
    sub: "With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too.",
  },
];

export function ImageSlide() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <ContainerWrapper>
          <ImageSliderController slides={MxContainer} />
        </ContainerWrapper>
      </BackgroundWrapper>
    </>
  );
}
