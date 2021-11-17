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

              <Box padding="2rem 0" className="show">
                <OverAll />
              </Box>
              </Box>
              <Box padding="0 3.5rem">
                <Box>
                  <BtnOutline>ORDER NOW</BtnOutline>
                </Box>
              </Box>
            </HorizonWrapper>
            <Box>
              <HoriImg
                src="https://www.tesla.com/themes/custom/tesla_frontend/components/images/safety-model-y-hero.png"
                alt=""
                loading="lazy"
                style={{
                  objectFit: "contain",
                  objectPosition: "30% 40%",
                  backgroundColor: "#f5f5f5"
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
