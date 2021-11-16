import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Efficiency() {
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
                    padding: "3rem 1.5rem",
                  }}
                >
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
                </Box>
                <Box
                  style={{
                    padding: "10rem 0 0 1.5rem",
                  }}
                >
                  <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box>
              <img
                src="https://www.tesla.com/sites/default/files/solarroof/v3/inverter/Inverter_V8_D.jpg"
                alt=""
                loading="lazy"
                style={{
                  width: "73vw",
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
