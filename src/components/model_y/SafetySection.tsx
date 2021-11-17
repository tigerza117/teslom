import { Box, Stack } from "@mui/material";
import { BackgroundWrapper, HorizonWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import OverAll from "./OverAll";
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
                  padding: "3rem 3.5rem 0 3.5rem",
                }}
                className="show"
              >
                <SubTitleContent>Safety</SubTitleContent>
                <MainTitleContent>Designed for Safety</MainTitleContent>
                <SubContent>
                  Like every Tesla, Model Y is designed to be the safest vehicle
                  in its class. The lower center of gravity, rigid body
                  structure and large crumple zones provide unparalleled
                  protection.
                </SubContent>
              </Box>
              <Box padding="0 3.5rem" className="show">
                <OverAll />
              </Box>
              <Box padding="0 3.5rem">
                <Box>
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Box>
            </HorizonWrapper>
            <Box>
              <HoriImg
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ba4f4fe9-5c46-48c2-ad03-a5c7bf68f30c/bvlatuR/std/2880x1800/model_3_safety_hero"
                alt=""
                loading="lazy"
                style={{
                  objectPosition: "100% 0",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
