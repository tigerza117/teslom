import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  ButtonStack,
  TitleWrapper,
  BtnFeatTitle,
} from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  TriBtnContent,
} from "@components/shared/Title";
import { MapButton, TriBtnTitle } from "@components/shared/Button";

export function Feature() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white", height: "auto" }}>
        <TitleWrapper>
          <Box
            sx={{
              margin: "auto",
              width: "55vw",
              padding: "14vh 0 2rem 0",
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
            <Stack marginBottom="3rem">
              <Box
                sx={{
                  padding: "1rem 0",
                }}
              >
                <video
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                  }}
                  autoPlay
                  loop
                  preload="auto"
                  src="https://tesla-cdn.thron.com/static/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4?xseo="
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
                  <MapButton style={{ margin: "0" }}>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <Stack direction="column" spacing={3}>
                        <BtnFeatTitle>670 hp</BtnFeatTitle>
                        <TriBtnContent>
                          Automatically change lanes while driving on the
                          highway
                        </TriBtnContent>
                      </Stack>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <Stack direction="column" spacing={3}>
                        <BtnFeatTitle>670 hp</BtnFeatTitle>
                        <TriBtnContent>
                          Automatically change lanes while driving on the
                          highway
                        </TriBtnContent>
                      </Stack>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <Stack direction="column" spacing={3}>
                        <BtnFeatTitle>670 hp</BtnFeatTitle>
                        <TriBtnContent>
                          Automatically change lanes while driving on the
                          highway
                        </TriBtnContent>
                      </Stack>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>LoremLoremLorem</TriBtnTitle>
                      <Stack direction="column" spacing={3}>
                        <BtnFeatTitle>670 hp</BtnFeatTitle>
                        <TriBtnContent>
                          Automatically change lanes while driving on the
                          highway
                        </TriBtnContent>
                      </Stack>
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
