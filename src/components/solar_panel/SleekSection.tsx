import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

import { HorizonWrapper } from "@components/shared/Wrapper";
import { HoriImg } from "@components/shared/Container";

export function SleekAndDurable() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Stack direction="row">
          <Box
            sx={{
              padding: "3rem 3rem 0 3rem",
            }}
          >
            <HorizonWrapper>
              <Box>
                <Box>
                  <SubTitleContent>Design</SubTitleContent>
                  <MainTitleContent>Sleek and Durable</MainTitleContent>
                </Box>
                <Box marginTop=".5rem">
                  <SubContent>
                    Our solar panels are low-profile and durable — quietly
                    converting sunlight to energy for decades to come.
                    Integrated hardware and simple design achieve this by
                    securing the panels close to your roof and to each other for
                    a minimalist aesthetic.
                  </SubContent>
                </Box>
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
            </HorizonWrapper>
          </Box>
          <Box>
            <HoriImg
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9ddad34a-7766-499d-b99e-65983e68f10a/bvlatuR/std/2090x1800/_25-Design-D"
              alt=""
              loading="lazy"
              style={{
                objectPosition: "0 80%",
              }}
            />
          </Box>
        </Stack>
      </BackgroundWrapper>
    </>
  );
}
