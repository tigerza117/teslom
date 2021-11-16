import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export function SleekAndDurable() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
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
                <SubTitleContent>Design</SubTitleContent>
                <MainTitleContent>Sleek and Durable</MainTitleContent>
              </Box>
              <Box>
                <SubContent>
                  Our solar panels are low-profile and durable — quietly
                  converting sunlight to energy for decades to come. Integrated
                  hardware and simple design achieve this by securing the panels
                  close to your roof and to each other for a minimalist
                  aesthetic.
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
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9ddad34a-7766-499d-b99e-65983e68f10a/bvlatuR/std/2090x1800/_25-Design-D"
              alt=""
              loading="lazy"
              style={{
                width: "70vw",
                height: "100vh",
                objectFit: "cover",
                objectPosition: "0 100%",
                float: "right",
              }}
            />
          </Box>
        </Stack>
      </BackgroundWrapper>
    </>
  );
}
