import { Box, Grid, Stack } from "@mui/material";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  MainTitleContent,
  SubContent,
  SubTitleContent,
  FeatureTitle,
  FeatureSubTitle,
} from "@components/shared/Title";
import { BtnOutline } from "@components/shared/Button";

export function Range() {
  return (
    <>
      <BackgroundWrapper style={{ backgroundColor: "white" }}>
        <Box>
          <Stack direction="row">
            <Stack>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b6761e24-0f64-483a-b868-50c5bab803bd/bvlatuR/std/2880x1800/MS-Range-Hero-Desktop"
                loading="lazy"
                style={{
                  width: "80vw",
                  height: "100vh",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ margin: "-8rem auto 0 auto", display: "flex" }}>
                <Box sx={{ margin: "auto", width: "820px" }}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Box className="show">
                        <Stack
                          direction="column"
                          spacing={1}
                          textAlign="center"
                        >
                          <FeatureTitle>405 mi</FeatureTitle>
                          <FeatureSubTitle>
                            Go anywhere with up to 405 miles of estimated range
                            on a single charge
                          </FeatureSubTitle>
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box className="show">
                        <Stack
                          direction="column"
                          spacing={1}
                          textAlign="center"
                        >
                          <FeatureTitle>200 mi</FeatureTitle>
                          <FeatureSubTitle>
                            Supercharge up to 200 miles in 15 minutes
                          </FeatureSubTitle>
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box className="show">
                        <Stack
                          direction="column"
                          spacing={1}
                          textAlign="center"
                        >
                          <FeatureTitle>25,000+</FeatureTitle>
                          <FeatureSubTitle>
                            Superchargers placed along popular routes
                          </FeatureSubTitle>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Stack>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="column" padding="2.5rem 0 0 1.5rem">
                <SubTitleContent className="show">Range</SubTitleContent>
                <MainTitleContent className="show">
                  Go Anywhere
                </MainTitleContent>
                <SubContent style={{ padding: "1rem 0" }} className="show">
                  Travel farther on a single charge than any other electric
                  vehicle—and keep going with access to 25,000+ Superchargers
                  globally. By combining up to 405 miles of estimated range with
                  Tesla fast charging technology, you’ll spend less time
                  charging and even more time on the road.
                </SubContent>
              </Stack>
              <Box>
                <BtnOutline
                  style={{
                    padding: ".3rem 1.5rem",
                    marginLeft: "1.5rem",
                  }}
                  className="show"
                >
                  Order now
                </BtnOutline>
              </Box>
            </Box>
          </Stack>
        </Box>
      </BackgroundWrapper>
    </>
  );
}
