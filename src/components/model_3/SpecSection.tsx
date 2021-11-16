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
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2b239404-c402-4c55-9a10-a061f2cf0ae8/bvlatuR/std/947x677/global-spec-hero"
                alt=""
                loading="lazy"
                style={{
                  width: "50vw",
                  height: "100vh",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box>
              <Box style={{ padding: "5rem 3rem" }}>
                <Stack direction="column">
                  <Box>
                    <SpecTitle style={{ color: "white" }}>
                      Model 3 <span>Specs</span>{" "}
                    </SpecTitle>
                    <Box>
                      <Stack direction="row" spacing={1} marginTop="1rem">
                        <BtnOutline
                          color="white"
                          style={{
                            margin: "0",
                            padding: ".1rem 6rem",
                            textTransform: "capitalize",
                          }}
                        >
                          Performance
                        </BtnOutline>
                        <BtnOutline
                          color="white"
                          style={{
                            padding: ".1rem 6rem",
                            textTransform: "capitalize",
                          }}
                        >
                          Long Range AWD
                        </BtnOutline>
                      </Stack>
                      <Stack direction="row" spacing={1} marginTop=".2rem">
                        <BtnOutline
                          color="white"
                          style={{
                            margin: "0",
                            padding: ".1rem 6rem",
                            textTransform: "capitalize",
                          }}
                        >
                          Rear-Wheel Drive
                        </BtnOutline>
                        <BtnOutline
                          color="white"
                          style={{
                            padding: ".1rem 6rem",
                            textTransform: "capitalize",
                          }}
                        >
                          Compare
                        </BtnOutline>
                      </Stack>
                    </Box>
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
                              <p>3.1s 0-60 mph* with rollout subtracted</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Range</strong>
                              <p>315 miles (EPA est.)</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Drive</strong>
                              <p>Dual motor All-Wheel Drive</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Seating</strong>
                              <p>5 Adults</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Wheels</strong>
                              <p>20"</p>
                            </SpecSubText>
                          </Specli>
                        </SpecUl>
                      </Box>
                      <Box>
                        <SpecUl>
                          <Specli>
                            <SpecSubText>
                              <strong>Weight</strong>
                              <p>4,065 lbs</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Cargo</strong>
                              <p>23 cu ft</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Displays</strong>
                              <p>15" Center Touchscreen</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Supercharging Max/ Payment Type</strong>
                              <p>250 kW max; Pay Per Use</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Onboard Charger Max</strong>
                              <p>11.5 kW max (48A)</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Warranty</strong>
                              <p>
                                Basic Vehicle - 4 years or 50,000 mi, whichover
                                comes first Battery & Drive Unit - 8 years or
                                120,000 mi, whichover comes first
                              </p>
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
