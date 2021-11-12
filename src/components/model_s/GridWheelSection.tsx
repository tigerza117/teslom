import { Stack } from "@mui/material";
import { GalleryContainer, InfoContainer } from "@components/shared/Container";
import {
  BackgroundWrapper,
  InfoFeatureWrapper,
} from "@components/shared/Wrapper";
import { InfoSubTitle, InfoTitle } from "@components/shared/Title";

export function GridWheel() {
  return (
    <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
      <InfoFeatureWrapper>
        <Stack direction="row">
          <InfoContainer>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                width: "80%",
                margin: "auto 0",
                float: "left",
              }}
            >
              <InfoTitle>Responsive Performance</InfoTitle>
              <InfoSubTitle>
                Staggered, performance-focused wheels and tires keep the car
                planted and transfer even more power down to the road.
              </InfoSubTitle>
            </Stack>
          </InfoContainer>
          <GalleryContainer
            sx={{
              backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/2cf7296e-1bba-40b6-9490-929b47eb50cd/bvlatuR/std/1040x584/MS-Exterior-Grid-B-Desktop)`,
            }}
          ></GalleryContainer>
        </Stack>
        <Stack direction="row">
          <GalleryContainer
            sx={{
              backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/5207af00-08c6-4b97-83c2-72b82e429977/bvlatuR/std/1040x584/MS-Exterior-Grid-A-Desktop)`,
            }}
          ></GalleryContainer>
          <InfoContainer>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                width: "80%",
                margin: "auto 0",
                float: "right",
              }}
            >
              <InfoTitle>Optimized Aerodynamics</InfoTitle>
              <InfoSubTitle>
                Attention to detail on all exterior surfaces makes Model S the
                most aerodynamic production car on Earth.
              </InfoSubTitle>
            </Stack>
          </InfoContainer>
        </Stack>
        <Stack direction="row">
          <InfoContainer>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                width: "80%",
                margin: "auto 0",
                float: "left",
              }}
            >
              <InfoTitle>Refined Styling</InfoTitle>
              <InfoSubTitle>
                Exterior design combines an iconic look with elegant
                proportions.
              </InfoSubTitle>
            </Stack>
          </InfoContainer>
          <GalleryContainer
            sx={{
              backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/2b807bf9-bd89-46a3-97a3-2fecca31beaf/bvlatuR/std/1040x584/MS-Exterior-Grid-C-Desktop)`,
            }}
          ></GalleryContainer>
        </Stack>
      </InfoFeatureWrapper>
    </BackgroundWrapper>
  );
}
