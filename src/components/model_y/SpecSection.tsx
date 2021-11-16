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
                              <strong>Battery</strong>
                              <p>Long Range</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Acceleration</strong>
                              <p>3.5s 0-60 mph*</p>
                              <p
                                style={{
                                  lineHeight: "120%",
                                  fontStyle: "italic",
                                }}
                              >
                                *with rollout subtracted
                              </p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Range</strong>
                              <p>303 miles (EPA est.)</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Drive</strong>
                              <p>Dual Motor All-Wheel</p>
                              <p>Drive</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Seating</strong>
                              <p>Up to 5</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wheels</strong>
                              <p>21"</p>
                            </SpecSubText>
                          </Specli>
                        </SpecUl>
                      </Box>
                      <Box>
                        <SpecUl>
                          <Specli>
                          <SpecSubText>
                              <strong>Weight</strong>
                              <p>4,416 lbs</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Max Cargo Volume</strong>
                              <p>76 cu ft</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Top Speed</strong>
                              <p>155 mph</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText
                              <strong>Displays</strong>
                              <p>15" Center Touchscreen</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Supercharging</strong>
                              <p>Pay Per Use</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Warranty</strong>
                              <p>Basic Vehicle - 4 years or</p>
                              <p>50,000 mi, whichever</p>
                              <p>comes first</p>
                              <p>Battery & Drive Unit - 8</p>
                              <p>years or 120,000 mi,</p>
                              <p>whichever comes first</p>
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
