import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export function Safety() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Stack direction="row">
          <Box
            sx={{
              padding: "3rem",
              display: "flex",
            }}
          >
            <Stack
              direction="column"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <SubTitleContent>Safety</SubTitleContent>
                <MainTitleContent>Built for Safety</MainTitleContent>
              </Box>
              <Box>
                <SubContent>
                  Safety is the most important part of the overall Model 3
                  design. The metal structure is a combination of aluminum and
                  steel, for maximum strength in every area. In a roof-crush
                  test, Model 3 resisted four times its own mass, even with an
                  all-glass roof: that's the same weight as two full-grown
                  African elephants.
                </SubContent>
              </Box>
              <Box padding="4rem 0">
                <Stack
                  direction="row"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
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
            </Stack>
          </Box>
          <Box>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ba4f4fe9-5c46-48c2-ad03-a5c7bf68f30c/bvlatuR/std/2880x1800/model_3_safety_hero"
              alt=""
              loading="lazy"
              style={{
                float: "right",
                width: "67.5vw",
                height: "100vh",
                objectFit: "cover",
                objectPosition: "-15rem",
                paddingRight: "1.5rem",
              }}
            />
          </Box>
        </Stack>
      </BackgroundWrapper>
    </>
  );
}
