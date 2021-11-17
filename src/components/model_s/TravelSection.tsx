import { Box, Grid, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { MainTitleContent, SubContent } from "@components/shared/Title";
import {
  BaseButton,
  BtnOutline,
  TriBtnContent,
  TriBtnTitle,
} from "@components/shared/Button";
import { ContainerWrapper } from "@components/shared/Container";
import { useState } from "react";

const Data = [
  {
    image:
      "https://cdn.discordapp.com/attachments/896728497979019294/902589779466653706/1635264436900.jpg",
    txt: {
      title: "San Jose to Los Angeles",
      subtitle: "340 miles",
    },
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/896728497979019294/902589782742417418/1635264486681.jpg",
    txt: {
      title: "Berkeley to Lake Tahoe",
      subtitle: "178 miles",
    },
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/896728497979019294/902589778741055528/1635264404630.jpg",
    txt: {
      title: "Manhattan to Boston",
      subtitle: "211 miles",
    },
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/896728497979019294/902589783585460294/1635264519801.jpg",
    txt: {
      title: "Fort Lauderdale to Orlando",
      subtitle: "195 miles",
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
        <Grid container spacing={4} sx={{ marginTop: "1rem" }}>
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
        <img
          src={current.image}
          style={{
            display: "flex",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export function Travel() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white", height: "auto" }}>
        <ContainerWrapper>
          <Box
            sx={{
              margin: "auto",
              padding: "2rem 0",
            }}
          >
            <Stack direction="column" textAlign="left" spacing={1}>
              <MainTitleContent>Freedom to Travel</MainTitleContent>
              <SubContent>
                Enter a destination on your touchscreen and Trip Planner will
                automatically calculate your route with Superchargers along the
                way.
              </SubContent>
            </Stack>
          </Box>
          <Box>
            <ImageSliderController slides={Data} />
            <Box sx={{ display: "flex" }}>
              <BtnOutline
                style={{
                  margin: "2rem auto",
                }}
                className="show"
              >
                Learn more
              </BtnOutline>
            </Box>
          </Box>
        </ContainerWrapper>
      </BackgroundWrapper>
    </>
  );
}
