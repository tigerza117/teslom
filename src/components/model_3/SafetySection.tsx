import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import OverAll from "@components/model_x/OverAll";
import { HorizonWrapper } from "@components/shared/Wrapper";
import { HoriImg } from "@components/shared/Container";

export function Safety() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <HorizonWrapper style={{ height: "95vh" }}>
              <Box
                sx={{
                  padding: "3rem 3rem 0 3rem",
                }}
                className="show"
              >
                <SubTitleContent>Safety</SubTitleContent>
                <MainTitleContent>Built for Safety</MainTitleContent>
                <SubContent>
                  Safety is the most important part of the overall Model 3
                  design. The metal structure is a combination of aluminum and
                  steel, for maximum strength in every area. In a roof-crush
                  test, Model 3 resisted four times its own mass, even with an
                  all-glass roof: that's the same weight as two full-grown
                  African elephants.
                </SubContent>
              </Box>
              <Box padding="4rem 3rem">
                <Box className="show">
                  <OverAll />
                </Box>
                <Stack
                  direction="row"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  className="show"
                >
                  <Box>
                    <ControlPointIcon
                      sx={{
                        padding: ".5rem 0 0 0",
                        fontSize: "2.5rem",
                      }}
                    />
                  </Box>
                  <Box>
                    <SubContent>LEARN MORE</SubContent>
                  </Box>
                  <Box>
                    <BtnOutline>ORDER NOW</BtnOutline>
                  </Box>
                </Stack>
              </Box>
            </HorizonWrapper>
            <Box>
              <HoriImg
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ba4f4fe9-5c46-48c2-ad03-a5c7bf68f30c/bvlatuR/std/2880x1800/model_3_safety_hero"
                alt=""
                loading="lazy"
                style={{
                  objectPosition: "-17vw 0",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
