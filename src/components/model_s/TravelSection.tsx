import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  ButtonStack,
  TitleWrapper,
  BtnFeatTitle,
} from "@components/shared/Wrapper";
import { MainTitleContent, SubContent } from "@components/shared/Title";
import { BtnOutline, MapButton, TriBtnTitle } from "@components/shared/Button";

export function Travel() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white", height: "auto" }}>
        <TitleWrapper>
          <Box
            sx={{
              margin: "auto",
              width: "55vw",
              padding: "22vh 0 2rem 0",
            }}
          >
            <Stack direction="column" textAlign="left" spacing={1}>
              <MainTitleContent>Freedom to Travel</MainTitleContent>
              <SubContent>
                Enter a destination on your touchscreen and Trip Planner will
                automatically calculate your route with Superchargers along the
                way.
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
                  }}
                  src="https://cdn.discordapp.com/attachments/896728497979019294/902589779466653706/1635264436900.jpg"
                  alt="SanJose"
                />
                <img
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                    display: "none",
                  }}
                  src="https://cdn.discordapp.com/attachments/896728497979019294/902589782742417418/1635264486681.jpg"
                  alt="Berkeley"
                />
                <img
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                    display: "none",
                  }}
                  src="https://cdn.discordapp.com/attachments/896728497979019294/902589778741055528/1635264404630.jpg"
                  alt="Manhattan"
                />
                <img
                  style={{
                    width: "80vw",
                    margin: "0 auto",
                    display: "none",
                  }}
                  src="https://cdn.discordapp.com/attachments/896728497979019294/902589783585460294/1635264519801.jpg"
                  alt="Fort"
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
                      <TriBtnTitle>San Jose to Los Angeles</TriBtnTitle>
                      <BtnFeatTitle>340 miles</BtnFeatTitle>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>Berkeley to Lake Tahoe</TriBtnTitle>
                      <BtnFeatTitle>178 miles</BtnFeatTitle>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>Manhattan to Boston</TriBtnTitle>
                      <BtnFeatTitle>211 miles</BtnFeatTitle>
                    </ButtonStack>
                  </MapButton>
                  <MapButton>
                    <ButtonStack spacing={2}>
                      <TriBtnTitle>Fort Lauderdale to Orlando</TriBtnTitle>
                      <BtnFeatTitle>195 miles</BtnFeatTitle>
                    </ButtonStack>
                  </MapButton>
                </Stack>
              </Box>
            </Stack>
            <BtnOutline
              style={{
                margin: "2rem 0",
              }}
              className="show"
            >
              Learn more
            </BtnOutline>
          </Box>
        </TitleWrapper>
      </BackgroundWrapper>
    </>
  );
}
