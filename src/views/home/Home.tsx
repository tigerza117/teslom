import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import gsap, { Power2 } from "gsap";
import { ProductList } from "@constants/home";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { BaseButton } from "@components/shared/Button";
import { useLayoutContext } from "@contexts/LayoutContext";
import { ViewAction } from "schema/types";

const FixedWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "fixed",
  opacity: 0,
  top: 0,
  display: "none",
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
  fontSize: "3rem",
  marginBottom: 0,
  color: "#393c41",
  padding: 0,
  transform: "translateY(20px)",
}));

const MainSubTitle = styled("h5")(({ theme }) => ({
  fontWeight: 200,
  fontSize: "1rem",
  "& a": {
    color: "#393c41",
  },
  opacity: 0,
}));

const Home: React.FC = () => {
  const { setDark, callViewAction } = useLayoutContext();

  useEffect(() => {
    callViewAction(ViewAction.OPENING);
    setDark(true);
    callViewAction(ViewAction.OPENED);
    return () => {
      callViewAction(ViewAction.CLOSED);
    };
  }, []);

  return (
    <>
      {ProductList.map(({ title, subTitle, image }, index) => (
        <Section
          key={index}
          index={index}
          title={title}
          subTitle={subTitle}
          image={image}
        />
      ))}
    </>
  );
};

const ExpandBtn = styled(ExpandMoreRoundedIcon)(({ theme }) => ({
  fontSize: "3.5rem",
  padding: ".5rem",
  animation: `loopUpDown 1000ms infinite`,
  "@keyframes loopUpDown": {
    "80%": {
      opacity: 1,
      transform: "translate3d(0,10px,0)",
    },
    "100%": {
      opacity: 1,
      transform: "translate3d(0,0px,0)",
    },
  },
}));

const MockExpandBtn = styled(ExpandBtn)(({ theme }) => ({
  color: "transparent",
}));

const OrderBtn = styled(BaseButton)(({ theme }) => ({
  fontSize: ".8rem",
  padding: ".55rem 4.6rem",
  borderRadius: "25px",
  backgroundColor: "black",
  opacity: ".75",
  boxShadow: "none",
  color: "white",
}));

const InventoryBtn = styled(BaseButton)(({ theme }) => ({
  fontSize: ".8rem",
  padding: ".35rem 3.6rem",
  borderRadius: "25px",
  backgroundColor: "white",
  color: "black",
  opacity: ".75",
  boxShadow: "none",
}));

interface ISession {
  image: string;
  title: string;
  subTitle: string;
  index: number;
}

const Section: React.FC<ISession> = ({ image, title, subTitle, index }) => {
  const refWrapper = useRef(null);
  const refFixed = useRef(null);
  const refTitle = useRef(null);
  const refSubTitle = useRef(null);

  useEffect(() => {
    gsap.to(refFixed.current, {
      scrollTrigger: {
        trigger: refWrapper.current,
        scrub: true,
        start: "40% 60%",
        end: "60% 60%",
      },
      display: "inline",
      opacity: 1,
    });
    gsap.to(refFixed.current, {
      scrollTrigger: {
        trigger: refWrapper.current,
        scrub: true,
        start: "40% 0%",
        end: "60% 0%",
      },
      opacity: 0,
    });
    gsap.to(refTitle.current, {
      duration: 0.5,
      east: Power2.easeIn,
      transform: "translateY(0px)",
      delay: 1,
    });
    gsap.to(refSubTitle.current, {
      duration: 0.8,
      opacity: 1,
      delay: 2,
    });
    return () => {};
  }, []);

  return (
    <BackgroundWrapper
      sx={{
        backgroundImage: `url(${image})`,
      }}
      ref={refWrapper}
    >
      <FixedWrapper ref={refFixed}>
        <TitleWrapper>
          <Box sx={{ marginTop: "16vh" }}>
            <Stack direction="column" spacing={-1}>
              <MainTitle ref={refTitle}>{title}</MainTitle>
              <MainSubTitle ref={refSubTitle}>{subTitle}</MainSubTitle>
            </Stack>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
          >
            <Box
              sx={{
                margin: "auto",
              }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 2, md: 4 }}
              >
                <OrderBtn>CUSTOM ORDER</OrderBtn>
                <InventoryBtn>EXISTING INVENTORY</InventoryBtn>
              </Stack>
            </Box>
            <Box>{index === 0 ? <ExpandBtn /> : <MockExpandBtn />}</Box>
          </Box>
        </TitleWrapper>
      </FixedWrapper>
    </BackgroundWrapper>
  );
};

export default Home;
