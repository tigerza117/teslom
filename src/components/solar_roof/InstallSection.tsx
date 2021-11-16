import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  ButtonStack,
  TitleWrapper,
  VerticalWrapper,
} from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import {
  BtnOutline,
  MapButton,
  TriBtnContent,
  TriBtnTitle,
} from "@components/shared/Button";
import { VerticalContent } from "@layouts/VertiContent";

export function Installation() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
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
              Our in-house team of energy professionals has installed more than
              3.6 GW of clean solar energy across 400,000 roofs—the equivalent
              of 10 million traditional solar panels. From design to power on,
              we take care of everything.
            </SubContent>
          </VerticalWrapper>
        </VerticalContent>
        <Box>
          <Stack>
            <Box
              sx={{
                padding: "1rem 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <video
                autoPlay
                muted
                style={{
                  width: "45vw",
                  margin: "0 auto",
                  display: "none",
                }}
                src="https://www.tesla.com/sites/default/files/solarroof/v3/installation/Carousel_Design.mp4"
              />
              <video
                autoPlay
                muted
                style={{
                  width: "45vw",
                  margin: "0 auto",
                }}
                src="https://www.tesla.com/sites/default/files/solarroof/v3/installation/Carousel_Installation2.mp4"
              />
              <video
                autoPlay
                muted
                style={{
                  width: "45vw",
                  margin: "0 auto",
                  display: "none",
                }}
                src="https://tesla-cdn.thron.com/delivery/public/video/tesla/18fba275-3adb-4c8f-b2aa-f151350ad5c9/bvlatuR/WEBHD/Carousel-PowerOn"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem 0",
              }}
            >
              <Stack direction="row" spacing={4}>
                <MapButton style={{ margin: "0", padding: "0 0 1rem 0" }}>
                  <ButtonStack spacing={2}>
                    <TriBtnTitle>Design</TriBtnTitle>
                    <TriBtnContent>
                      Aerial imagery and 3D modeling determine your custom
                      design
                    </TriBtnContent>
                  </ButtonStack>
                </MapButton>
                <MapButton>
                  <ButtonStack spacing={2}>
                    <TriBtnTitle>Installation</TriBtnTitle>
                    <TriBtnContent>
                      Our integrated design enables quick tile and Powerwall
                      installation
                    </TriBtnContent>
                  </ButtonStack>
                </MapButton>
                <MapButton>
                  <ButtonStack spacing={2}>
                    <TriBtnTitle>Power On</TriBtnTitle>
                    <TriBtnContent>
                      Final cleanup is completed before system activation
                    </TriBtnContent>
                  </ButtonStack>
                </MapButton>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
