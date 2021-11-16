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
            <Box
                style={{
                  padding: "3rem",
                  height: "100%",
                  display: "flex",
                  alignContent: "center",
                  transform: "translateY(10%)",
                }}
              >
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
                        </SpecUl>
                      </Box>
                      <Box>
                        <SpecUl>
                          <Specli>
                            <SpecSubText>
                              <strong>Wattage</strong>
                              <p>425 W</p>
                              <p>425 W</p>
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
