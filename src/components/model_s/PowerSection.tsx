import { Box, Stack, Grid } from "@mui/material";
import { BackgroundWrapper, BtnFeatTitle } from "@components/shared/Wrapper";
import { MainTitleContent, SubContent } from "@components/shared/Title";
import {
  BaseButton,
  TriBtnContent,
  TriBtnTitle,
} from "@components/shared/Button";
import { ContainerWrapper } from "@components/shared/Container";
import { useState } from "react";

const Data = [
  {
    image:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/209dce99-0353-49b1-b0ac-c3aa6de68b71/bvlatuR/std/1920x900/Model-S-Performance-Dual-Motor-Desktop",
    txt: {
      title: "Model",
      subtitle:
        "Dual Motor All-Wheel Drive platform allows for the longest range, and now delivers insane power and acceleration",
      feats: [
        {
          name: "3.1 s",
          detail: "0-60 mph",
        },
        {
          name: "405 mi",
          detail: "range (est.)",
        },
        {
          name: "670 hp",
          detail: "peak power",
        },
      ],
    },
  },
  {
    image:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/3da49427-d22a-4fe1-bc36-3653dc426dfd/bvlatuR/std/1920x900/Model-S-Performance-Tri-Motor-Desktop",
    txt: {
      title: "Model Plaid",
      subtitle:
        "Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon-sleeved rotor that maintains peak power output all the way to top speed.",
      feats: [
        {
          name: "1.99 s*",
          detail: "0-60 mph",
        },
        {
          name: "396 mi",
          detail: "range (EPA est.)",
        },
        {
          name: "1,020 hp",
          detail: "peak power",
        },
      ],
    },
  },
];

interface SlideMeta {
  image: string;
  txt: {
    title: string;
    subtitle: string;
    feats: {
      name: string;
      detail: string;
    }[];
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
        }}
      >
        <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
          {Data.map((data, i) => {
            return (
              <Grid item xs={6} key={i}>
                <BaseButton
                  className={currentIndex === i ? "active" : ""}
                  sx={{
                    width: "25rem",
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
                    <Box sx={{ margin: "0 auto", padding: "1.5rem 0 0 0" }}>
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {data.txt.feats.map(({ name, detail }, j) => (
                          <Box key={j}>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>{name}</BtnFeatTitle>
                              <TriBtnContent>{detail}</TriBtnContent>
                            </Stack>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
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

export function PowerTrain() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5", height: "auto" }}>
        <ContainerWrapper>
          <Box
            sx={{
              margin: "auto",
              padding: "4rem 0",
            }}
            className="show"
          >
            <Stack direction="column" textAlign="left" spacing={1}>
              <MainTitleContent>Electric Powertrain</MainTitleContent>
              <SubContent>
                Long Range and Plaid platforms unite powertrain and battery
                technologies for unrivaled performance, range and efficiency.
                New module and pack thermal architecture allows faster charging
                and gives you more power and endurance in all conditions.
              </SubContent>
            </Stack>
          </Box>
          <Box>
            <ImageSliderController slides={Data} />
            <TriBtnContent
              style={{
                padding: "6rem 0",
                color: "#5c5d61",
                textAlign: "center",
              }}
              className="show"
            >
              * With rollout subtracted
            </TriBtnContent>
          </Box>
        </ContainerWrapper>
      </BackgroundWrapper>
    </>
  );
}
