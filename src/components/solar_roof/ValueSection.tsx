import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Value() {
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
                  <SubTitleContent>Value</SubTitleContent>
                  <MainTitleContent>Pay Less for Electricity</MainTitleContent>
                  <SubContent style={{ padding: "1rem 0" }}>
                    Solar Roof is the only roof that can help pay for itself
                    with the enery you produce. Power your home at the lowest
                    price per watt of any national provider and take control of
                    your monthly electricity bill.
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
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/4aedd73e-cd73-4051-9cc7-68955ad4646d/bvlatuR/std/2880x1800/SR-Value-D"
                alt=""
                loading="lazy"
                style={{
                  width: "70vw",
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
