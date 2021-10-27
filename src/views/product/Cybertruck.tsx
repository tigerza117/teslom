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
    fontSize: "24px",
    margin: 0,
    padding: "0px 0px 8px",
}));

const MainSubtitleContent = styled(Typography)(({theme}) => ({
    color: "#BABABA",
    padding: "0px 0px 16px",
    fontWeight: 700,

}));

const SubtitleContent = styled(Typography)(({theme}) => ({
    color: "#BABABA",
    padding: "0px 0px 16px",
    fontSize: "0.875rem",
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
}));

const PassageWrapper = styled(Box)(({theme}) => ({
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
                        <Box sx={{
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}>
                            <Box sx={{ display: "inline"}}>
                                <FeatureContainer>
                                    <InfoContainer
                                        style={{
                                            padding: "0px 0px 80px",
                                        }}>
                                        <MainTitleContent sx={{ letterSpacing: "0.188rem"}}>
                                            EXOSKELETON
                                        </MainTitleContent>

                                        <SubtitleContent>
                                            Cybertruck is built with an exterior shell made for ultimate durability and passenger protection.
                                            Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance,
                                            from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.
                                        </SubtitleContent>
                                    </InfoContainer>

                                </FeatureContainer>
                            </Box>
                        </Box>


                        <GalleryContainer
                            style={{backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/03_Desktop.jpg)`,}}>
                        </GalleryContainer>
                        <InfoContainer style={{
                            padding: "0px 0px 40px",
                        }}>
                        <Box sx={{ padding: "0px 0px 80px" , width: "133vh"}}>
                            <Stack
                                direction="row"
                                spacing={14}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >

                                <Box>
                                    <MainSubtitleContent sx={{
                                        letterSpacing: "0.110rem",
                                        padding: "0 0 1.125rem",
                                        width: "31vh",
                                    }}>
                                        ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL
                                    </MainSubtitleContent>
                                </Box>
                            <Box sx={{
                                width: "100%",
                                textAlign: "left",
                            }}>
                                <SubtitleContent>
                                    If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion
                                    with a smooth monochrome exoskeleton that puts the shell on the outside of the
                                    car and provides you and your passengers maximum protection.
                                </SubtitleContent>
                            </Box>
                            </Stack>
                        </Box>
                        </InfoContainer>


                        <GalleryContainer
                            style={{backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg)`,}}>

                        </GalleryContainer>
                        <InfoContainer style={{
                            padding: "0px 0px 40px",
                        }}>
                            <Box sx={{ padding: "0px 0px 80px" , width: "133vh"}}>
                                <Stack
                                    direction="row"
                                    spacing={14}
                                    sx={{ display: "flex", justifyContent: "center" }}
                                >

                                    <Box>
                                        <MainSubtitleContent sx={{
                                            letterSpacing: "0.110rem",
                                            padding: "0 0 1.125rem",
                                            width: "31vh"
                                        }}>
                                            TESLA ARMOR GLASS
                                        </MainSubtitleContent>
                                    </Box>
                                    <Box sx={{
                                        width:" 100%",
                                        textAlign: "left",
                                    }}>
                                        <SubtitleContent>
                                            Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.
                                        </SubtitleContent>
                                    </Box>
                                </Stack>
                            </Box>
                        </InfoContainer>


                        <video src="https://www.tesla.com/xNVh4yUEc3B9/performance_video_desktop.mp4"
                               style={{
                                   height: "64vh",
                                   width: "133vh",
                                   objectFit: "cover",
                                   paddingBottom: "20px",
                               }}
                               autoPlay
                               loop
                               preload="auto"/>

                        <InfoContainer style={{
                            padding: "0px 0px 40px",
                        }}>
                            <Box sx={{ padding: "0px 0px 80px" , width: "133vh"}}>
                                <Stack
                                    direction="row"
                                    spacing={14}
                                    sx={{ display: "flex", justifyContent: "center" }}
                                >

                                    <Box>
                                        <MainSubtitleContent sx={{
                                            letterSpacing: "0.110rem",
                                            padding: "0 0 1.125rem",
                                            width: "34vh",
                                            fontSize: "1.56rem",
                                        }}
                                        style={{
                                            color: "white",
                                        }}>
                                            PERFORMANCE AND EFFICIENCY
                                        </MainSubtitleContent>
                                    </Box>
                                    <Box sx={{
                                        width:" 100%",
                                        textAlign: "left",
                                    }}>
                                        <SubtitleContent>
                                            Now entering a new class of strength, speed and versatility—only possible with an all-electric design.
                                            The powerful drivetrain and low center of gravity provides extraordinary traction control and torque—enabling acceleration
                                            from 0-60 mph in as little as 2.9 seconds and up to 500 miles of range.
                                        </SubtitleContent>
                                    </Box>
                                </Stack>
                            </Box>
                        </InfoContainer>
                    </Stack>
                </InfoFeature>
            </BackgroundWrapper>

            <BackgroundWrapper
                style={{backgroundColor: "black", height: "auto"}}>
                //slider
                //description
            </BackgroundWrapper>

            <BackgroundWrapper
                style={{backgroundColor: "black", height: "auto"}}>


            </BackgroundWrapper>

            <BackgroundWrapper
                style={{backgroundColor: "black", height: "auto"}}>
                <GalleryContainer style={{
                    backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/c834642e-bd02-47d1-a16d-eddabd15ddb8/bvlatuR/std/1251x704/Cybertruck-Order-Hero-Global)`,
                    height: "32vh",
                    width: "67vh",
                    margin: "0",
                    padding: "0",
                }}></GalleryContainer>

            </BackgroundWrapper>
        </>
    );
}

export default Cybertruck;