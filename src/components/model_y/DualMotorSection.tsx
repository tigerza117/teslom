import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  HomeFeatureWrapper,
  SubFeatureWrapper,
  TitleWrapper,
  VerticalWrapper,
} from "@components/shared/Wrapper";
import {
  FeatureTitle,
  FeatureSubTitle,
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { VerticalContent } from "@layouts/VertiContent";
import { VertiImg } from "@components/shared/Container";

export function DualMotor() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <VertiImg
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/48b20b9d-9322-4cf9-b079-44797fc32600/bvlatuR/std/0x0/AWD_hero@2"
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
                      <FeatureTitle>3.5s</FeatureTitle>
                      <FeatureSubTitle>
                        Quickest acceleration—from zero to 60 mph* in as little
                        as 3.5 seconds
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
                        Capable in rain, snow, mud and off-road with superior
                        traction control
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
              Tesla All-Wheel Drive has two ultra-responsive, independent
              electric motors that digitally control torque to the front and
              rear wheels—for far better handling, traction and stability
              control. Model Y is capable in rain, snow, mud and off-road.
            </SubContent>
          </VerticalWrapper>
        </VerticalContent>
      </BackgroundWrapper>
    </>
  );
}
