import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { HorizonContent } from "@layouts/HoriContent";
import { HoriImg } from "@components/shared/Container";

export function Efficiency() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Stack direction="row">
          <HorizonContent>
            <SubTitleContent>Efficiency</SubTitleContent>
            <MainTitleContent>Maximum Solar Production</MainTitleContent>
            <SubContent style={{ padding: "1rem 0" }}>
              Tesla solar panels are designed to be highly efficient, delivering
              maximum solar production year-round, even on roofs with
              complicated angles. Powered by <a href="">Tesla Solar Inverter</a>
              , your fully integrated system is safe and reliable.
            </SubContent>
          </HorizonContent>
          <Box>
            <HoriImg
              src="https://www.tesla.com/sites/default/files/solarroof/v3/inverter/Inverter_V8_D.jpg"
              alt=""
              loading="lazy"
            />
          </Box>
        </Stack>
      </BackgroundWrapper>
    </>
  );
}
