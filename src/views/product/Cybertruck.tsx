import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from "react";

const BackgroundWrapper = styled(Box)(({ theme }) => ({
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
}));

const TitleWrapper = styled(Box)(({ theme }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    margin: "auto",
}));

const MainTitleContent = styled(Typography)(({theme}) => ({
    color: "white",
    fontWeight: 600,
    fontSize: "1.8rem",
    margin: 0,
    padding: "0px 0px 8px",
}));

const MainSubtitleContent = styled(Typography)(({theme}) => ({
    color: "#BABABA",
    padding: "0px 0px 16px",
    fontWeight: 700,
    fontSize: "0.875rem",
}));

const SubtitleContent = styled(Typography)(({theme}) => ({
    color: "#BABABA",
    padding: "0px 0px 16px",
    fontSize: "0.875rem",
    margin: "auto",
}));

const FeatureContainer = styled(Box)(({theme}) => ({
    margin: "auto",
}));

const InfoFeature = styled(Box)(({ theme }) => ({
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem 0",
}));

const GalleryContainer = styled(Box)(({ theme }) => ({
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "64vh",
    width: "133vh",
    paddingBottom: "20px",
    marginBottom: "20px",
}));

const ButtonSlider = styled(Button)(({theme}) => ({
    backgroundColor: "white",
    color: "black",
    fontSize: "medium",
    padding: "10px",
}));

const InfoContainer = styled(Box)(({ theme }) => ({
    height: "10vh",
    width: "80vh",
    verticalAlign: "middle",
    margin: "auto",
    display: "inline-block",
}));


const Cybertruck = () => {
    return (
        <>
            <BackgroundWrapper
                sx={{backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/01_Main_Hero_Desktop.jpg)`}}>
                <TitleWrapper>

                </TitleWrapper>
            </BackgroundWrapper>

            <BackgroundWrapper
                style={{backgroundColor: "black", height: "auto"}}>
                <InfoFeature>
                    <Stack direction="column">

                        <GalleryContainer
                            style={{
                                backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg)`,
                            }}>
                        </GalleryContainer>

                        <FeatureContainer>
                            <MainTitleContent>
                                EXOSKELETON
                            </MainTitleContent>
                            <InfoContainer
                                style={{
                                    padding: "0px 0px 80px",
                                }}>
                                <SubtitleContent>
                                    Cybertruck is built with an exterior shell made for ultimate durability and passenger protection.
                                    Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance,
                                    from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.
                                </SubtitleContent>
                            </InfoContainer>
                        </FeatureContainer>


                            <GalleryContainer
                                style={{backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/03_Desktop.jpg)`,}}>
                            </GalleryContainer>

                            <MainSubtitleContent>
                                ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL
                            </MainSubtitleContent>
                            <InfoContainer
                                style={{
                                    padding: "0px 0px 80px",
                                }}>
                                <SubtitleContent>
                                    If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion
                                    with a smooth monochrome exoskeleton that puts the shell on the outside of the
                                    car and provides you and your passengers maximum protection.
                                </SubtitleContent>
                            </InfoContainer>

                        <GalleryContainer
                            style={{backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg)`,}}>

                        </GalleryContainer>
                            <MainSubtitleContent>
                                TESLA ARMOR GLASS
                            </MainSubtitleContent>
                            <InfoContainer
                                style={{
                                    padding: "0px 0px 80px",
                                }}>
                                <SubtitleContent>
                                    Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.
                                </SubtitleContent>
                            </InfoContainer>
                    </Stack>
                </InfoFeature>
            </BackgroundWrapper>

            <BackgroundWrapper
                style={{backgroundColor: "black", height: "auto"}}>
                //slider
            </BackgroundWrapper>

            <BackgroundWrapper
                style={{backgroundColor: "black", height: "auto"}}>
                //video
            </BackgroundWrapper>

            <BackgroundWrapper
                style={{backgroundColor: "black", height: "auto"}}>
                //Bottom
            </BackgroundWrapper>
        </>
    );
}

export default Cybertruck;