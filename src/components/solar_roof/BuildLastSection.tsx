import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { HorizonContent } from "@layouts/HoriContent";

export function BuildLast() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
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
                }}
              />
            </Box>
            <HorizonContent>
              <SubTitleContent>Durability</SubTitleContent>
              <MainTitleContent>Built to Last</MainTitleContent>
              <SubContent style={{ padding: "1rem 0" }}>
                Solar Roof tiles are durable, strong and engineered for
                all-weather protection. With a 25-year warranty, Solar Roof
                tiles will continue to produce clean energy for your home for
                decades to come.
              </SubContent>
            </HorizonContent>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
