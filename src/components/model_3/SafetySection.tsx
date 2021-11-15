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
                <SubTitleContent>vitae proin</SubTitleContent>
                <MainTitleContent>vitae proin mattis</MainTitleContent>
              </Box>
              <Box>
                <SubContent>
                  Etiam erat velit scelerisque in dictum non consectetur a. Dui
                  nunc mattis enim ut tellus elementum sagittis vitae et. A cras
                  semper auctor neque vitae tempus quam pellentesque. Tellus
                  rutrum tellus pellentesque eu tincidunt tortor aliquam nulla
                  facilisi. Lectus quam id leo in.
                </SubContent>
              </Box>

              <Box padding="4rem 0">
                <OverAll />
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
                width: "73vw",
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
