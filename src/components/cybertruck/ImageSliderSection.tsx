import { Box, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useRef } from "react";
import { PictureSliderContainer } from "@components/cybertruck/Components";
import {BackgroundWrapper, SliderAdjust} from "@components/shared/Wrapper";
import { CybertruckPictureSlider } from "@constants/cybertruckSlider";
import SimpleImageSlider from "react-simple-image-slider";
import {FeatureSubTitle, MainTitleContent} from "@components/shared/Title";
import {Carousel, MainSubtitleContent, SlidershowContent} from "@components/cybertruck/Components";

const ImageSlider = ({slides} : {slides : any}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const refText = useRef(null);
    const refTitle = useRef(null);
    const timeOut = setTimeout(function (){
        ;
    }, 1000 );

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };


    return  (
        <Box>
            <PictureSliderContainer sx={{
                height: "100%",
                width: "100%",
            }}>
                <ArrowForwardIosIcon sx={{
                    color: "#fff",
                    position: "relative",
                    left: "80px",
                    bottom: "40px",
                    border: "#fff solid 2px",
                    fontSize: "25px",
                    backgroundColor: "#00000066",
                    transform: "rotate(180deg)",
                    cursor: "pointer",
                }} onClick={prevSlide}></ArrowForwardIosIcon>

                {CybertruckPictureSlider.map((slide, index) => {
                    return(
                        <Box sx={{
                            padding: "0 0 20px",
                        }}>
                            <Box className={index === current ? "slide active" : "slide"} key={index}>
                                {index === current && (<img src={slide.image} loading="lazy" style={{
                                    padding: "0 0 20px",
                                    display: "flex",

                                }}></img>)}
                            </Box>
                            <Box className={index === current ? "slide active" : "slide"} key={index}>
                                {index === current && current != 0 && (<SlidershowContent><strong>{slide.txt.title}</strong><br/><br/>{slide.txt.subtitle}</SlidershowContent>)}
                                {index === current && current === 0 && (<SlidershowContent>{slide.txt.subtitle}</SlidershowContent>)}
                            </Box>
                        </Box>
                    );
                })}

                <ArrowForwardIosIcon sx={{
                    color: "#fff",
                    position: "relative",
                    right: "80px",
                    bottom: "40px",
                    border: "#fff solid 2px",
                    fontSize: "25px",
                    backgroundColor: "#00000066",
                    cursor: "pointer",
                }} onClick={nextSlide}></ArrowForwardIosIcon>
            </PictureSliderContainer>
        </Box>
    );
};

export function ImageSlide() {
  return (
    <>
        <BackgroundWrapper
            style={{backgroundColor: "black", height: "auto"}}>

            <Box>
                <Stack direction="column">
                    <ImageSlider slides={CybertruckPictureSlider}></ImageSlider>
                    <MainSubtitleContent style={{
                        color: "white",
                        margin: "0 0 16px",
                        width: "360px",
                        height: "80px",
                        fontSize: "26px",
                        position: "relative",
                        paddingLeft: "350px",
                        top: "-36px",
                    }}>VERSATILE UTILITY</MainSubtitleContent>
                </Stack>
            </Box>
        </BackgroundWrapper>
    </>
  );
}
