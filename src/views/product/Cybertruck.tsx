import styled from "@emotion/styled";
import { ImageAspectRatio } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
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

const MainTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: "2.5rem",
    marginBottom: 0,
    color: "#181b21",
    padding: 0,
    transform: "translateY(20px)",
}));

const MainSubTitle = styled("h5")(({ theme }) => ({
    fontWeight: 200,
    fontSize: "1.2rem",
    padding: "1.3rem 0",
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    fontWeight: 600,
    fontSize: "1.8rem",
}));

const FeatureSubTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    fontWeight: 500,
    fontSize: "0.8rem",
}));

const OutlineBtnWhite = styled(Button)(({ theme }) => ({
    fontSize: ".8rem",
    padding: ".3rem 2.5rem",
    borderRadius: "25px",
    border: "3px solid white",
    boxShadow: "none",
    color: "white",
    marginTop: ".8rem",
}));

const OutlineBtnBlack = styled(Button)(({ theme }) => ({
    fontSize: ".8rem",
    padding: ".3rem 2.5rem",
    borderRadius: "25px",
    border: "3px solid black",
    boxShadow: "none",
    color: "black",
    marginTop: ".8rem",
}));

const AdsTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    fontWeight: 600,
    fontSize: "1.8rem",
    margin: "auto 0",
    "&::after": {
        content: '""',
        display: "block",
        position: "absolute",
        width: "100%",
        height: "40vh",
        marginTop: "2vh",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgb(0, 0, 0, 0))",
    },
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
    height: "45vh",
    width: "80vh",
}));

const InfoContainer = styled(Box)(({ theme }) => ({

    height: "45vh",
    width: "80vh",
    verticalAlign: "middle",
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    fontWeight: 700,
    fontSize: ".9rem",
    padding: "6rem 0 0 0",
}));

const InfoSubTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    fontWeight: 500,
    fontSize: "0.9rem",
}));

const MainTitleContent = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: "1.8rem",
    margin: 0,
    color: "#181b21",
    padding: 0,
}));

const SubTitleContent = styled("h5")(({ theme }) => ({
    fontWeight: 200,
    fontSize: "1.2rem",
    margin: "0",
    padding: "0",
}));

const SubContent = styled("h5")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "1rem",
    margin: "0",
    padding: "0",
    color: "#393c41",
}));

const TriBtnTitle = styled("h5")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "1rem",
    margin: "0",
    padding: "0",
    color: "#393c41",
    textTransform: "capitalize",
}));

const TriBtnContent = styled("h5")(({ theme }) => ({
    fontWeight: 500,
    fontSize: ".75rem",
    margin: "0",
    padding: "0",
    color: "#393c41",
    textTransform: "capitalize",
}));

const BtnFeatTitle = styled("h5")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "1.5rem",
    margin: "0",
    padding: "0",
    color: "#393c41",
    textTransform: "capitalize",
}));


const Cybertruck = () => {
    return (
        <>
            <BackgroundWrapper
            sx={{backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/01_Main_Hero_Desktop.jpg)`}}>
                <TitleWrapper>
                    <MainTitle
                    sx={{
                        background: `url()`,
                    }}>

                    </MainTitle>
                </TitleWrapper>
            </BackgroundWrapper>

            <BackgroundWrapper
                style={{backgroundColor: "black", height: "auto"}}>
                <InfoFeature>
                    <Stack direction="row">
                        <GalleryContainer
                            style={{
                                backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg)`,
                            }}>
                        </GalleryContainer>
                    </Stack>
                </InfoFeature>
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