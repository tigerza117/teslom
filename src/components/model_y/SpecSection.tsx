import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { Specli, SpecSubText, SpecUl } from "@components/shared/Spect";
import { SpecTitle } from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Specs() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
        <Box style={{ width: "100%" }}>
          <Stack direction="row">
            <Box>
              <img
                src="https://www.tesla.com/sites/default/files/drupal8/modely/ModelYSilhouette.png"
                loading="lazy"
                style={{
                  width: "50vw",
                  height: "100%",
                  objectFit: "contain",
                  float: "left",
                }}
                alt=""
              />
            </Box>
            <Box>
              <Box style={{ padding: "2.2rem 3rem" }}>
                <Stack direction="column">
                  <Box>
                    <SpecTitle style={{ color: "white" }}>
                      Model Y <span>Specs</span>{" "}
                    </SpecTitle>
                  </Box>
                  <Box>
                    <Stack direction="row">
                      <BtnOutline
                        color="white"
                        style={{
                          padding: ".1rem 4rem",
                          textTransform: "capitalize",
                        }}
                      >
                        Performance
                      </BtnOutline>
                      <BtnOutline
                        color="white"
                        style={{
                          padding: ".1rem 4rem",
                          textTransform: "capitalize",
                        }}
                      >
                        Long Range AWD
                      </BtnOutline>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction="row">
                      <Box>
                        <SpecUl>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                              <p
                                style={{
                                  lineHeight: "120%",
                                  fontStyle: "italic",
                                }}
                              >
                                †with rollout subtracted
                              </p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                        </SpecUl>
                      </Box>
                      <Box>
                        <SpecUl>
                          <Specli>
                          <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                              <p>425 W</p>
                              <p>425 W</p>
                              <p>425 W</p>
                              <p>425 W</p>
                              <p>425 W</p>
                            </SpecSubText>
                          </Specli>
                        </SpecUl>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
