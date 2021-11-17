import { Box, Grid, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  VerticalWrapper,
} from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import {
  BaseButton,
  BtnOutline,
  TriBtnContent,
  TriBtnTitle,
} from "@components/shared/Button";
import { VerticalContent } from "@layouts/VertiContent";
import { useState } from "react";

const Data = [
  {
    content:
      "https://www.tesla.com/sites/default/files/solarroof/v3/installation/Carousel_Design.mp4",
    txt: {
      title: "Design",
      subtitle: "Aerial imagery and 3D modeling determine your custom design",
    },
  },
  {
    content:
      "https://www.tesla.com/sites/default/files/solarroof/v3/installation/Carousel_Installation2.mp4",
    txt: {
      title: "Installation",
      subtitle:
        "Our integrated design enables quick tile and Powerwall installation",
    },
  },
  {
    content:
      "https://tesla-cdn.thron.com/delivery/public/video/tesla/18fba275-3adb-4c8f-b2aa-f151350ad5c9/bvlatuR/WEBHD/Carousel-PowerOn",
    txt: {
      title: "Power On",
      subtitle: "Final cleanup is completed before system activation",
    },
  },
];

interface SlideMeta {
  content: string;
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

  const goIndex = (index: number) => {
    setCurrent(index);
  };

  return (
    <>
      <ImageSliderViewer current={slides[current]} />
      <ImageSliderDetail currentIndex={current} goIndex={goIndex} />
    </>
  );
};

interface ImageSliderDetailPorps {
  currentIndex: number;
  goIndex: (index: number) => void;
}

const ImageSliderDetail = ({
  currentIndex,
  goIndex,
}: ImageSliderDetailPorps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          margin: "0 auto",
          width: "840px",
        }}
      >
        <Grid container spacing={4} sx={{ marginTop: "1rem" }}>
          {Data.map((data, i) => {
            return (
              <Grid item xs={4} key={i}>
                <BaseButton
                  className={currentIndex === i ? "active" : ""}
                  sx={{
                    boxShadow: "0 -3px 0 0 black",
                    "&.active": {
                      boxShadow: "0 0 0 3px black",
                    },
                    padding: "1rem",
                    transition: "none",
                  }}
                  onClick={() => {
                    goIndex(i);
                  }}
                >
                  <Stack
                    direction="column"
                    sx={{
                      padding: ".6rem",
                      textAlign: "left",
                      minHeight: "5rem",
                    }}
                    spacing={2}
                  >
                    <TriBtnTitle>{data.txt.title}</TriBtnTitle>
                    <TriBtnContent>{data.txt.subtitle}</TriBtnContent>
                  </Stack>
                </BaseButton>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

interface ImageSliderViewerProps {
  current: SlideMeta;
}

const ImageSliderViewer = ({ current }: ImageSliderViewerProps) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        margin: "auto",
        display: "flex",
        padding: 0,
        width: "100%",
      }}
    >
      <Box>
        <video
          src={current.content}
          style={{
            display: "flex",
            width: "52vw",
            margin: "auto",
          }}
          autoPlay
          loop
        />
      </Box>
    </Box>
  );
};

export function Installation() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box padding="1.5rem 0">
          <VerticalContent>
            <Box>
              <Stack direction="column">
                <SubTitleContent>Installation</SubTitleContent>
                <MainTitleContent>Trusted Expertise</MainTitleContent>
                <Box>
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <VerticalWrapper>
              <SubContent>
                Our in-house team of energy professionals has installed more
                than 3.6 GW of clean solar energy across 400,000 roofs—the
                equivalent of 10 million traditional solar panels. From design
                to power on, we take care of everything.
              </SubContent>
            </VerticalWrapper>
          </VerticalContent>
        </Box>
        <ImageSliderController slides={Data} />
      </BackgroundWrapper>
    </>
  );
}
