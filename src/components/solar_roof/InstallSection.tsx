import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  ButtonStack,
  TitleWrapper,
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
import { RowSectionBlock } from "@components/shared/Section";

export function Installation() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5", height: "auto" }}>
        <TitleWrapper>
          <RowSectionBlock
            style={{
              margin: "3rem auto 0 auto",
            }}
          >
            <Box style={{ width: "40%" }}>
              <Stack direction="column">
                <SubTitleContent>Installation</SubTitleContent>
                <MainTitleContent>Trusted Expertise</MainTitleContent>
                <Box style={{ padding: "1rem 0" }}>
                  <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box>
              <SubContent>
                Our in-house team of energy professionals has installed more
                than 3.6 GW of clean solar energy across 400,000 roofs—the
                equivalent of 10 million traditional solar panels. From design
                to power on, we take care of everything.
              </SubContent>
            </Box>
          </RowSectionBlock>
          <Box>
            <Stack>
              <Box
                sx={{
                  padding: "1rem 0",
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
                        Aerial imagery and 3D modeling determine your custom design
                      </TriBtnContent>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>Installation</TriBtnTitle>
                      <TriBtnContent>
                        Our integrated design enables quick tile and Powerwall installation
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
        </TitleWrapper>
      </BackgroundWrapper>
    </>
  );
}
