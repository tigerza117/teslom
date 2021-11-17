import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  TitleWrapper,
  SubFeatureWrapper,
  VerticalWrapper,
} from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
  FeatureTitle,
  FeatureSubTitle,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { VerticalContent } from "@layouts/VertiContent";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { VertiImg } from "@components/shared/Container";

export function DualMotor() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <VertiImg
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/02b9fe62-2569-4fc8-bfa1-a8f8cdd9d48e/bvlatuR/std/1440x900/lhd-awd-hero-desktop"
            alt=""
            loading="lazy"
          />
          <TitleWrapper>
            <Box margin="-10rem auto" display="flex">
              <Stack direction="column">
                <Box>
                  <Stack direction="row" margin="auto" spacing={2}>
                    <SubFeatureWrapper className="show">
                      <FeatureTitle>2</FeatureTitle>
                      <FeatureSubTitle>
                        Independent motors digitally control torque to the front
                        and rear wheels
                      </FeatureSubTitle>
                    </SubFeatureWrapper>
                    <SubFeatureWrapper className="show">
                      <FeatureTitle>10ms</FeatureTitle>
                      <FeatureSubTitle>
                        Dual motors respond to charging conditions in as little
                        as 10 milliseconds
                      </FeatureSubTitle>
                    </SubFeatureWrapper>
                    <SubFeatureWrapper className="show">
                      <FeatureTitle>
                        <img
                          style={{
                            width: "40px",
                            height: "auto",
                            margin: "0",
                          }}
                          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ba09ef22-e9cc-4bda-a171-de1cd6f6cf6a/bvlatuR/std/0x0/weather"
                          alt=""
                        />
                      </FeatureTitle>
                      <FeatureSubTitle style={{ marginTop: "-.45rem" }}>
                        Unparelleled traction and control, in all weather
                        conditions
                      </FeatureSubTitle>
                    </SubFeatureWrapper>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </TitleWrapper>
        </Box>
        <VerticalContent>
          <Box>
            <Stack direction="column" className="show">
              <SubTitleContent>All-Wheel Drive</SubTitleContent>
              <MainTitleContent>Dual Motor</MainTitleContent>
              <Box style={{ padding: ".5rem 0" }}>
                <Box>
                  <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                </Box>
              </Box>
            </Stack>
          </Box>
          <VerticalWrapper className="show">
            <SubContent>
              Tesla All-Wheel Drive has two independent motors for improved
              redundancy, each with only one moving part for minimal maintenance
              and maximum durability. Unlike traditional all-wheel drive
              systems, they digitally control torque to the front and rear
              wheels for far better handling and traction control.
            </SubContent>
          </VerticalWrapper>
        </VerticalContent>
      </BackgroundWrapper>
    </>
  );
}
