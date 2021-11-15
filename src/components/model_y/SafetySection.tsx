import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import OverAll from "./OverAll";

export function Safety() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <Stack direction="row">
            <Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    padding: "0rem 0 0 2.5rem",
                  }}
                >
                  <SubTitleContent>At vero eos et</SubTitleContent>
                  <MainTitleContent>Itaque earum</MainTitleContent>
                  <SubContent style={{ padding: "3.5rem 0 0 0" }}>
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "3rem 0 0 2.5rem",
                  }}
                >
                  <OverAll />
                </Box>
                <Box
                  style={{
                    padding: "3rem 0 0 2.5rem",
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box>
              <img
                src="https://www.tesla.com/themes/custom/tesla_frontend/components/images/safety-model-y-hero.png"
                alt=""
                loading="lazy"
                style={{
                  width: "80vw",
                  height: "100vh",
                  objectFit: "cover",
                  float: "right",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
