import { Box, Button, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  TitleWrapper,
  MainTitleContent,
  MainSubtitleContent,
  SubtitleContent,
  FeatureContainer,
  InfoFeatureWrapper,
  GalleryContainer,
  ButtonSlider,
  InfoContainer,
  PictureSliderContainer,
  PictureSliderImage,
  SliderBtn,
} from "@components/cybertruck/Components";

export function Gallery() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <InfoFeatureWrapper>
          <Stack direction="column">
            <GalleryContainer
              style={{
                backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg)`,
              }}
            ></GalleryContainer>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "inline" }}>
                <FeatureContainer>
                  <InfoContainer
                    style={{
                      padding: "0px 0px 80px",
                    }}
                  >
                    <MainTitleContent >
                      EXOSKELETON
                    </MainTitleContent>

                    <SubtitleContent>
                      Cybertruck is built with an exterior shell made for
                      ultimate durability and passenger protection. Starting
                      with a nearly impenetrable exoskeleton, every component is
                      designed for superior strength and endurance, from
                      Ultra-Hard 30X Cold-Rolled stainless-steel structural skin
                      to Tesla armor glass.
                    </SubtitleContent>
                  </InfoContainer>
                </FeatureContainer>
              </Box>
            </Box>

            <GalleryContainer
              style={{
                backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/03_Desktop.jpg)`,
              }}
            ></GalleryContainer>
            <InfoContainer
              style={{
                padding: "0px 0px 40px",
              }}
            >
              <Box sx={{ padding: "0px 0px 80px", width: "133vh" }}>
                <Stack
                  direction="row"
                  spacing={14}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box>
                    <MainSubtitleContent
                      sx={{
                        letterSpacing: "0.110rem",
                        padding: "0 0 1.125rem",
                        width: "31vh",
                      }}
                    >
                      ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL
                    </MainSubtitleContent>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    <SubtitleContent>
                      If there was something better, we’d use it. Help eliminate
                      dents, damage and long-term corrosion with a smooth
                      monochrome exoskeleton that puts the shell on the outside
                      of the car and provides you and your passengers maximum
                      protection.
                    </SubtitleContent>
                  </Box>
                </Stack>
              </Box>
            </InfoContainer>

            <GalleryContainer
              style={{
                backgroundImage: `url(https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg)`,
              }}
            ></GalleryContainer>

            <InfoContainer
              style={{
                padding: "0px 0px 40px",
              }}
            >
              <Box sx={{ padding: "0px 0px 80px", width: "133vh" }}>
                <Stack
                  direction="row"
                  spacing={14}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box>
                    <MainSubtitleContent
                      sx={{
                        letterSpacing: "0.110rem",
                        padding: "0 0 1.125rem",
                        width: "31vh",
                      }}
                    >
                      TESLA ARMOR GLASS
                    </MainSubtitleContent>
                  </Box>
                  <Box
                    sx={{
                      width: " 100%",
                      textAlign: "left",
                    }}
                  >
                    <SubtitleContent>
                      Ultra-strong glass and polymer-layered composite can
                      absorb and redirect impact force for improved performance
                      and damage tolerance.
                    </SubtitleContent>
                  </Box>
                </Stack>
              </Box>
            </InfoContainer>
          </Stack>
        </InfoFeatureWrapper>
      </BackgroundWrapper>
    </>
  );
}
