import { Box, Grid, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  ButtonStack,
  TitleWrapper,
  BtnFeatTitle,
} from "@components/shared/Wrapper";
import { MainTitleContent, SubContent } from "@components/shared/Title";
import {
  MapButton,
  TriBtnTitle,
  TriBtnContent,
  BaseButton,
} from "@components/shared/Button";
import { useState } from "react";
import { ContainerWrapper } from "@components/shared/Container";

const Data = [
  {
    image:
      "https://tesla-cdn.thron.com/static/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4",
    txt: {
      title: "Navigate on Autopilot",
      subtitle: "Active guidance from on-ramp to off-ramp",
    },
  },
  {
    image:
      "https://tesla-cdn.thron.com/static/A7I6LP_lane_change_0.mp4-2000_PYSUF4.mp4",
    txt: {
      title: "Auto Lane Change",
      subtitle: "Automatically change lanes while driving on the highway",
    },
  },
  {
    image:
      "https://tesla-cdn.thron.com/delivery/public/video/tesla/14877527-9b58-40e9-8a5e-fc47c4afb126/bvlatuR/WEBHD/summon_1",
    txt: {
      title: "Summon",
      subtitle: "Automatically retrieve your car",
    },
  },
  {
    image:
      "https://tesla-cdn.thron.com/delivery/public/video/tesla/53faf083-f129-4c48-a28f-0f56c8ca5d90/bvlatuR/WEBHD/parking",
    txt: {
      title: "Autopark",
      subtitle: "Parallel and perpendicular parking with a single touch",
    },
  },
];

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
        <Grid container spacing={4} sx={{ margin: "1rem 0" }}>
          {Data.map((data, i) => {
            return (
              <Grid item xs={3} key={i}>
                <BaseButton
                  className={currentIndex === i ? "active" : ""}
                  sx={{
                    boxShadow: "0 -3px 0 0 black",
                    "&.active": {
                      boxShadow: "0 0 0 3px black",
                    },
                    padding: "1rem",
                    transition: "none",
                    height: "100%",
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
      <Box>
        <video
          style={{
            width: "100%",
          }}
          autoPlay
          loop
          preload="auto"
          src={current.image}
        />
      </Box>
    </Box>
  );
};

export function Feature() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white", height: "auto" }}>
        <ContainerWrapper>
          <Box
            sx={{
              margin: "auto",
              padding: "1rem 0",
            }}
          >
            <Stack direction="column" textAlign="left" spacing={1}>
              <MainTitleContent>Features</MainTitleContent>
              <SubContent>
                Full Self-Driving Capability introduces additional features and
                improves existing functionality to make your car more capable
                over time including:
              </SubContent>
            </Stack>
          </Box>
          <Box>
            <ImageSliderController slides={Data} />
          </Box>
        </ContainerWrapper>
      </BackgroundWrapper>
    </>
  );
}
