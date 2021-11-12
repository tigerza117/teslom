import { Box, Stack } from "@mui/material";
import {
  BackgroundWrapper,
  TitleWrapper,
  HomeFeatureWrapper,
} from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
  FeatureTitle,
  FeatureSubTitle,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";
import { RowSectionBlock } from "@components/shared/Section";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export function Perf() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "#f5f5f5" }}>
        <Box>
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3489a82e-b19c-457a-86a4-7ea9ac91aa1c/bvlatuR/std/1920x1080/lhd-performance-hero-desktop"
            alt=""
            loading="lazy"
            style={{
              width: "100vw",
              height: "72vh",
              objectFit: "cover",
              objectPosition: "0 60%",
            }}
          />
          <TitleWrapper>
            <Box margin="-8rem auto" display="flex">
              <Stack direction="column">
                <Box>
                  <Stack direction="row" margin="auto">
                    <HomeFeatureWrapper>
                      <FeatureTitle>magna</FeatureTitle>
                      <FeatureSubTitle>sapien</FeatureSubTitle>
                    </HomeFeatureWrapper>
                    <HomeFeatureWrapper>
                      <FeatureTitle>magna</FeatureTitle>
                      <FeatureSubTitle>sapien</FeatureSubTitle>
                    </HomeFeatureWrapper>
                    <HomeFeatureWrapper>
                      <FeatureTitle>magna</FeatureTitle>
                      <FeatureSubTitle>sapien</FeatureSubTitle>
                    </HomeFeatureWrapper>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </TitleWrapper>
        </Box>
        <RowSectionBlock
          style={{
            margin: "1.5rem auto 0 auto",
          }}
        >
          <Box style={{ width: "65%", marginRight: "2.5rem" }}>
            <Stack direction="column">
              <SubTitleContent>quod maxime placeat</SubTitleContent>
              <MainTitleContent>max integer placeat</MainTitleContent>
              <Box style={{ padding: ".5rem 0" }}>
                <Box>
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
                      <BtnOutline style={{ margin: "0" }}>ORDER NOW</BtnOutline>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Box>
            <SubContent>
              fermentum iaculis eu. In nulla posuere sollicitudin aliquam
              ultrices sagittis orci. Etiam erat velit scelerisque in dictum non
              consectetur a. Dui nunc mattis enim ut tellus elementum sagittis
              vitae et. A cras semper auctor neque vitae tempus quam
              pellentesque.
            </SubContent>
          </Box>
        </RowSectionBlock>
      </BackgroundWrapper>
    </>
  );
}
