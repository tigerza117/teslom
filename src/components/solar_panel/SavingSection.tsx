import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function SavingSection() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
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
                  <SubTitleContent>Savings</SubTitleContent>
                  <MainTitleContent>Electricity For Less</MainTitleContent>
                  <SubContent style={{ padding: "1rem 0" }}>
                    Use solar energy to power your home and reduce your
                    dependence on the grid. Purchase solar at the lowest price
                    of any national provider with{" "}
                    <a href="">Tesla's price match guarantee</a> and take
                    control of your monthly electricity bill. Learn more about
                    your potential savings in our Design Studio.
                  </SubContent>
                </Box>
                <Box
                  style={{
                    padding: "10rem 0 0 1.5rem",
                  }}
                >
                  <BtnOutline>SEE YOUR SAVINGS</BtnOutline>
                </Box>
              </Stack>
            </Box>
            <Box>
              <video
                src="https://tesla-cdn.thron.com/delivery/public/video/tesla/1e3dd39b-49f4-43ff-895a-74fa93dddfdf/bvlatuR/WEBHD/_25-Savings-D"
                autoPlay
                muted
                loop
                style={{
                  width: "70vw",
                  height: "100vh",
                  objectFit: "cover",
                  objectPosition: "50%",
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
