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
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3d7892b2-7246-42e5-819a-cc119ede91b7/bvlatuR/std/1440x1080/MX-Specs-Hero-Desktop"
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
              >
                <Stack direction="column">
                  <Box>
                    <SpecTitle style={{ color: "white" }}>
                      Model X <span>Specs</span>{" "}
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
                        Model X Plaid
                      </BtnOutline>
                      <BtnOutline
                        color="white"
                        style={{
                          padding: ".1rem 6rem",
                          textTransform: "capitalize",
                        }}
                      >
                        Model X
                      </BtnOutline>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction="row">
                      <Box>
                        <SpecUl>
                          <Specli>
                            <SpecSubText>
                              <strong>Range (EPA est.)</strong>
                              <p>333 mi</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>1/4 Mile</strong>
                              <p>9.9 s</p>
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
                              <p>20" or 22"</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Towing</strong>
                              <p>5,000 lbs</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Seating</strong>
                              <p>Up to 7</p>
                            </SpecSubText>
                          </Specli>
                        </SpecUl>
                      </Box>
                      <Box>
                        <SpecUl>
                          <Specli>
                            <SpecSubText>
                              <strong>Acceleration</strong>
                              <p>2.5 s 0-60 mph*</p>

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
                              <strong>Top Speed</strong>
                              <p>163 mph</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Drag Coefficient</strong>
                              <p>0.24 Cd</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Weight</strong>
                              <p>5,390 lbs</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Powertrain</strong>
                              <p>Tro Motor</p>
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
