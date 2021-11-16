import { Grid, Stack, Typography } from "@mui/material";
import {
  ContainerWrapper,
  GalleryContainer,
  InfoContainer,
} from "@components/shared/Container";
import {
  BackgroundWrapper,
  InfoFeatureWrapper,
} from "@components/shared/Wrapper";
import { InfoSubTitle, InfoTitle } from "@components/shared/Title";
import { Box } from "@mui/system";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IData {
  img: string;
  title: string;
  sub: string;
}

const Data = [
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/287c75d3-2f5d-481e-8a0f-0dc987f54e6b/bvlatuR/std/1040x584/MX-Interior-Grid-A-Desktop",
    title: "Nunc consequat",
    sub: "Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ac tortor dignissim convallis aenean et.",
  },
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/08d2e941-2be2-4e1a-bed9-924ac30fb115/bvlatuR/std/1040x584/MS-Interior-Grid-B-Desktop",
    title: "Stay Connected",
    sub: "Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ac tortor dignissim convallis aenean et.",
  },
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/dcfc40cb-6b46-4be7-b173-be10e0c9143c/bvlatuR/std/1040x584/MS-Interior-Grid-C-Desktop",
    title: "Your Best Audio System",
    sub: "Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ac tortor dignissim convallis aenean et.",
  },
  {
    img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop",
    title: "Real Storage",
    sub: "Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ac tortor dignissim convallis aenean et.",
  },
];

const Block = (data: IData, index: number) => {
  const { img, title, sub } = data;
  const isEven = index % 2 === 0;

  useEffect(() => {
    // gsap.utils.toArray(".show").forEach((box, i) => {
    //   const anim = gsap.fromTo(
    //     box,
    //     { autoAlpha: 0, y: 50 },
    //     { duration: 1, autoAlpha: 1, y: 0 }
    //   );
    //   ScrollTrigger.create({
    //     trigger: box,
    //     animation: anim,
    //     scroller: "#con",
    //     scrub: true,
    //     markers: true,
    //   });
    // });
  }, []);

  return (
    <Stack direction="row">
      <Grid container spacing={0} direction={isEven ? "row" : "row-reverse"}>
        <Grid item xs={6}>
          <img src={img} style={{ maxWidth: "100%" }} className="show" />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
            }}
            className="show"
          >
            <Box
              sx={{
                marginY: "auto",
                width: "80%",
                marginLeft: isEven ? "auto" : "0",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 400,
                  fontSize: "1rem",
                }}
              >
                {sub}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export function GridGall() {
  return (
    <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
      <ContainerWrapper>
        {Data.map((d, index) => Block(d, index))}
      </ContainerWrapper>
    </BackgroundWrapper>
  );
}
