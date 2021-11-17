import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { CybertruckPictureSlider } from "@constants/cybertruckSlider";
import { ContainerWrapper } from "@components/shared/Container";
import { styled } from "@mui/system";
import { DotBox} from "@components/shared/Button";
import {TitleSlideShow} from "@components/cybertruck/Components";

const Arrow = styled(ArrowForwardIosIcon)(() => ({
    color: "#fff",
    position: "absolute",
    right: "-100px",
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
          <Stack direction="row">
            <TitleSlideShow>VERSATILE UTILITY</TitleSlideShow>
            <Stack
              direction="row"
              sx={{
                padding: "0rem 1rem 7rem",
              }}
              spacing={5}
            >

              <ImageSliderDetail current={slides[current]} />
              <ImageSliderBullets
                currentIndex={current}
                size={length}
                goIndex={goIndex}
              />
            </Stack>
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
                    <DotBox
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
        <Box sx={{
          color: "white" ,
          width: "43rem",
          height: "5.5rem",
        }}>
          {current.txt.title === "" && (<Box sx={{
            fontSize: "1rem",
            fontWeight: "400",
            paddingBottom: "1rem",
            paddingTop: "4px",
          }}>{current.txt.subtitle}</Box>)}

          {current.txt.title != "" && (<Box
            sx={{
              fontSize: "1rem",
              fontWeight: "600",
              paddingBottom: "1rem",
              paddingTop: "4px",
            }}
          >
            {current.txt.title}
          </Box>)}

          {current.txt.title != "" && (<Box sx={{
            paddingBottom: "60px",
          }}>{current.txt.subtitle}</Box>)}
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
                paddingBottom: "1.5rem",
            }}
        >
            <Arrow
                sx={{ transform: "rotate(180deg)", left: "-100px" }}
                onClick={prevSlide}
            />
            <Box>
                <img
                    src={current.image}
                    style={{
                        display: "flex",
                        width: "90rem",
                        height: "45rem",
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
                    <ImageSliderController slides={CybertruckPictureSlider} />
                </ContainerWrapper>
            </BackgroundWrapper>
        </>
    );
}
