import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  TitleWrapper,
  HomeFeatureWrapper,
} from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
  FeatureTitle,
  FeatureSubTitle,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { RowSectionBlock } from "@components/shared/Section";

export function DualMotor() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/02b9fe62-2569-4fc8-bfa1-a8f8cdd9d48e/bvlatuR/std/1440x900/lhd-awd-hero-desktop"
            alt=""
            loading="lazy"
            style={{
              width: "100vw",
              height: "72vh",
              objectFit: "cover",
              objectPosition: "0 57%",
            }}
          />
          <TitleWrapper>
            <Box margin="-8rem auto" display="flex">
              <Stack direction="column">
                <Box>
                  <Stack direction="row" margin="auto">
                    <HomeFeatureWrapper>
                      <FeatureTitle>2</FeatureTitle>
                      <FeatureSubTitle>
                        Independent motors digitally control torque to the front
                        and rear wheels
                      </FeatureSubTitle>
                    </HomeFeatureWrapper>
                    <HomeFeatureWrapper>
                      <FeatureTitle>10ms</FeatureTitle>
                      <FeatureSubTitle>
                        Dual motors respond to charging conditions in as little
                        as 10 milliseconds
                      </FeatureSubTitle>
                    </HomeFeatureWrapper>
                    <HomeFeatureWrapper>
                      <FeatureTitle>
                        <img
                          style={{
                            width: "40px",
                            height: "auto",
                          }}
                          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ba09ef22-e9cc-4bda-a171-de1cd6f6cf6a/bvlatuR/std/0x0/weather"
                          alt=""
                        />
                      </FeatureTitle>
                      <FeatureSubTitle>
                        Unparelleled traction and control, in all weather
                        conditions
                      </FeatureSubTitle>
                    </HomeFeatureWrapper>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </TitleWrapper>
        </Box>
        <RowSectionBlock
          style={{
            margin: "1.5rem auto",
          }}
        >
          <Box style={{ width: "40%" }}>
            <Stack direction="column">
              <SubTitleContent>All-Wheel Drive</SubTitleContent>
              <MainTitleContent>Dual Motor</MainTitleContent>
              <Box style={{ padding: "1rem 0" }}>
                <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
              </Box>
            </Stack>
          </Box>
          <Box>
            <SubContent>
              Tesla All-Wheel Drive has two independent motors for improved
              redundancy, each with only one moving part for minimal maintenance
              and maximum durability. Unlike traditional all-wheel drive
              systems, they digitally control torque to the front and rear
              wheels for far better handling and traction control.
            </SubContent>
          </Box>
        </RowSectionBlock>
      </BackgroundWrapper>
    </>
  );
}
