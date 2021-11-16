import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { Specli, SpecSubText, SpecUl } from "@components/shared/Spect";
import { SpecTitle } from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Specs() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <Box style={{ width: "100%" }}>
          <Stack direction="row">
            <Box>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ea201786-4dec-4ca2-b266-c7a180443853/bvlatuR/std/1440x1080/MS-Specs-Hero-Desktop"
                loading="lazy"
                style={{
                  width: "50vw",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box>
              <Box
                style={{
                  padding: "2.2rem 3rem",
                  height: "100%",
                  display: "flex",
                  alignContent: "center",
                  transform: "translateY(10%)",
                }}
                className="show"
              >
                <Stack direction="column">
                  <Box>
                    <SpecTitle style={{ color: "white" }}>
                      Model S <span>Specs</span>{" "}
                    </SpecTitle>
                  </Box>
                  <Box>
                    <Stack direction="row">
                      <BtnOutline
                        color="white"
                        style={{
                          padding: ".1rem 6rem",
                          textTransform: "capitalize",
                        }}
                      >
                        Plaid
                      </BtnOutline>
                      <BtnOutline
                        color="white"
                        style={{
                          padding: ".1rem 6rem",
                          textTransform: "capitalize",
                        }}
                      >
                        Long Range
                      </BtnOutline>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction="row">
                      <Box>
                        <SpecUl>
                          <Specli>
                            <SpecSubText>
                              <strong>Range</strong>
                              <p>396 mi (EPA est.)</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>1/4 Mile</strong>
                              <p>9.23@155 mph trap speed</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Peak Power</strong>
                              <p>1,020 hp</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wheels</strong>
                              <p>19" or 21"</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Cargo</strong>
                              <p>28 cu ft</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Weight</strong>
                              <p>4,766 lbs</p>
                            </SpecSubText>
                          </Specli>
                        </SpecUl>
                      </Box>
                      <Box>
                        <SpecUl>
                          <Specli>
                            <SpecSubText>
                              <strong>Acceleration</strong>
                              <p>1.99 s 0-60 mph*</p>
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
                              <strong>Top Speed</strong>
                              <p>200 mph†</p>
                              <p
                                style={{
                                  lineHeight: "120%",
                                  fontStyle: "italic",
                                }}
                              >
                                †when equipped with the proper wheels and tires
                                (available fall 2021)
                              </p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Drag Coefficient</strong>
                              <p>0.208 Cd</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Powertrain</strong>
                              <p>Tri Motor</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Supercharging Max</strong>
                              <p>250 kW</p>
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
