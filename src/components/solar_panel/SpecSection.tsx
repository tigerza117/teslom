import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { Specli, SpecSubText, SpecUl } from "@components/shared/Spect";
import { SpecTitle } from "@components/shared/Title";

export function Specs() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <Box style={{ width: "100%" }}>
          <Stack direction="row">
            <Box>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2e1f9207-01b8-4455-a9c8-b4ca95b7afb4/bvlatuR/std/2880x1800/_25-Specs-D"
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
                      Solar Panel <span>Specs</span>{" "}
                    </SpecTitle>
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
                              <strong>Operating Temperature</strong>
                              <p>-40°F up to +185°F</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Dimensions</strong>
                              <p>82.4" x 40.9" x 1.57"</p>
                              <p>(including frame)</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Frame Type</strong>
                              <p>Black anodized</p>
                              <p>aluminum alloy</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Warranty</strong>
                              <p>25-year performance</p>
                              <p>guarantee</p>
                            </SpecSubText>
                          </Specli>
                        </SpecUl>
                      </Box>
                      <Box>
                        <SpecUl>
                          <Specli>
                            <SpecSubText>
                              <strong>Certifications</strong>
                              <p>IEC / UL 61730,</p>
                              <p>CE Compliant,</p>
                              <p>IEC 61215</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Inverter Power</strong>
                              <p>3.8kW / 7.6kW</p>
                              <p>97.5% efficiency</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Inverter Dimensions</strong>
                              <p>26" x 16" x 6"</p>
                            </SpecSubText>
                          </Specli>
                          <Specli>
                            <SpecSubText>
                              <strong>Inverter Warranty</strong>
                              <p>12.5 years</p>
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
