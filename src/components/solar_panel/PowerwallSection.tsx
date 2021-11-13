import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { RowSectionBlock } from "@components/shared/Section";

export function Powerwall() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/173055ff-afe2-4114-947e-ba62cf8e05c6/bvlatuR/std/2880x1800/PW-Inverter-Hero-D"
          alt=""
          loading="lazy"
          style={{
            width: "100vw",
            height: "67vh",
            objectFit: "cover",
            objectPosition: "50%",
          }}
        />
        <RowSectionBlock
          style={{
            margin: "3rem auto 0 auto",
          }}
        >
          <Box style={{ width: "40%" }}>
            <Stack direction="column">
              <SubTitleContent>quod maxime placeat</SubTitleContent>
              <MainTitleContent>maxime placeat</MainTitleContent>
              <Box style={{ padding: "1rem 0" }}>
                <Stack direction="row" spacing={2}>
                  <Box>
                    <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
                  </Box>
                  <Box>
                    <BtnOutline style={{ margin: "0" }}>learn more</BtnOutline>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box>
            <SubContent>
              Enter a destination on your touchscreen and Trip Planner will
              automatically calculate your route with Superchargers along the
              way.
            </SubContent>
          </Box>
        </RowSectionBlock>
      </BackgroundWrapper>
    </>
  );
}