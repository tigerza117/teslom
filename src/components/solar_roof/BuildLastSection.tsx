import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function BuildLast() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <Stack direction="row">
            <Box>
              <video
                src="https://www.tesla.com/sites/default/files/solarroof/v3/durability/SR-Durability-Desktop.mp4"
                autoPlay
                muted
                style={{
                  width: "74vw",
                  height: "100vh",
                  objectFit: "cover",
                  float: "left",
                }}
              />
            </Box>
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
                    padding: "3rem 1.5rem",
                  }}
                >
                  <SubTitleContent>At vero eos et</SubTitleContent>
                  <MainTitleContent>Itaque rerum</MainTitleContent>
                  <SubContent style={{ padding: "1rem 0" }}>
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore.
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "12rem 0 0 1.5rem",
                  }}
                >
                  <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
