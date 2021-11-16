import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { HorizonContent } from "@layouts/HoriContent";
import { HoriImg } from "@components/shared/Container";

export function Efficiency() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <HorizonContent>
              <SubTitleContent>Efficiency</SubTitleContent>
              <MainTitleContent>Maximum Solar Production</MainTitleContent>
              <SubContent style={{ padding: "1rem 0" }}>
                    Generate the most energy possible, even on roofs with
                    complicated angles and intermittent sunlight. Combined with
                    Tesla Solar Inverter, your fully integrated system is safe,
                    reliable and outage ready. With built-in connectivity, Tesla
                    Solar Inverter will continue to improve with each
                    over-the-air software update.
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
        </Box>
      </BackgroundWrapper>
    </>
  );
}
