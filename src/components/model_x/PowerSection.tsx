import { Box, Stack, Button } from "@mui/material";
import {
  BackgroundWrapper,
  TitleWrapper,
  ButtonStack,
  BtnFeatTitle,
} from "@components/shared/Wrapper";
import { MainTitleContent, SubContent } from "@components/shared/Title";
import { TriBtnContent, TriBtnTitle } from "@components/shared/Button";

export function PowerTrain() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5", height: "auto" }}>
        <TitleWrapper>
          <Box
            sx={{
              margin: "auto",
              width: "60vw",
              padding: "1rem 0",
            }}
          >
            <Stack direction="column" textAlign="left" spacing={1}>
              <MainTitleContent>Electric Powertrain</MainTitleContent>
              <SubContent>
                Eget sit amet tellus cras adipiscing. Volutpat commodo sed
                egestas egestas. Mattis pellentesque id nibh tortor id aliquet.
                Aliquet eget sit amet tellus cras adipiscing enim eu turpis.
                Condimentum vitae sapien pellentesque habitant morbi tristique
                senectus et netus.
              </SubContent>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Box
                sx={{
                  padding: "1rem 0",
                }}
              >
                <img
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                    display: "none",
                  }}
                  src="https://tesla-cdn.thron.com/delivery/public/image/tesla/209dce99-0353-49b1-b0ac-c3aa6de68b71/bvlatuR/std/1920x900/Model-S-Performance-Dual-Motor-Desktop"
                  alt="LongRange"
                />
                <img
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                  }}
                  src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3da49427-d22a-4fe1-bc36-3653dc426dfd/bvlatuR/std/1920x900/Model-S-Performance-Tri-Motor-Desktop"
                  alt="Plaid"
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
                  <Button
                    sx={{
                      width: "25rem",
                      borderTop: "3px solid black",
                      borderRadius: "0",
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
                      <TriBtnTitle style={{}}>Long Range</TriBtnTitle>
                      <TriBtnContent>
                        Dual Motor All-Wheel Drive platform allows for the
                        longest range, and now delivers insane power and
                        acceleration
                      </TriBtnContent>
                      <Box sx={{ margin: "0 auto", padding: "1.5rem 0 0 0" }}>
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>3.1 s</BtnFeatTitle>
                              <TriBtnContent>0-60 mph</TriBtnContent>
                            </Stack>
                          </Box>
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>405 mi</BtnFeatTitle>
                              <TriBtnContent>range (est.)</TriBtnContent>
                            </Stack>
                          </Box>
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>670 hp</BtnFeatTitle>
                              <TriBtnContent>peak power</TriBtnContent>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>
                    </Stack>
                  </Button>
                  <Button
                    sx={{
                      width: "25rem",
                      borderTop: "3px solid black",
                      borderRadius: "0",
                    }}
                  >
                    <ButtonStack spacing={2}>
                      <TriBtnTitle style={{}}>Plaid</TriBtnTitle>
                      <TriBtnContent>
                        Tri Motor All-Wheel Drive platform with torque vectoring
                        features three independent motors, each with a
                        carbon-sleeved rotor that maintains peak power output
                        all the way to top speed.
                      </TriBtnContent>
                      <Box sx={{ margin: "0 auto", padding: ".3rem 0 0 0" }}>
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>1.99 s*</BtnFeatTitle>
                              <TriBtnContent>0-60 mph</TriBtnContent>
                            </Stack>
                          </Box>
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>396 mi</BtnFeatTitle>
                              <TriBtnContent>range (EPA est.)</TriBtnContent>
                            </Stack>
                          </Box>
                          <Box>
                            <Stack direction="column" spacing={1}>
                              <BtnFeatTitle>1,020 hp</BtnFeatTitle>
                              <TriBtnContent>peak power</TriBtnContent>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>
                    </ButtonStack>
                  </Button>
                </Stack>
              </Box>
            </Stack>
            <TriBtnContent
              style={{
                padding: "0 0 5rem 0",
                color: "#5c5d61",
              }}
            >
              * With rollout subtracted
            </TriBtnContent>
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
    </>
  );
}
