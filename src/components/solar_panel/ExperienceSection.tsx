import { Box, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { RowSectionBlock } from "@components/shared/Section";

export function Experience() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f7e7ce60-a70b-4dd9-883c-7baf1c0eb636/bvlatuR/std/2880x1800/SP-tesla-app-D"
          alt=""
          loading="lazy"
          style={{
            width: "100vw",
            height: "69vh",
            objectFit: "cover",
            objectPosition: "50%",
          }}
        />
        <Box sx={{ padding: "3rem 0 6rem 0" }}>
          <Stack
            direction="row"
            spacing={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <RowSectionBlock
              style={{
                margin: "0 auto",
              }}
            >
              <Box style={{ width: "40%" }}>
                <Stack direction="column">
                  <SubTitleContent>quod maxime placeat</SubTitleContent>
                  <MainTitleContent>maxime placeat</MainTitleContent>
                  <Box style={{ padding: "1rem 0" }}>
                    <BtnOutline style={{ margin: "0" }}>Order now</BtnOutline>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <SubContent>
                  Enter a destination on your touchscreen and Trip Planner will
                  automatically calculate your route with Superchargers along
                  the way.
                </SubContent>
              </Box>
            </RowSectionBlock>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}