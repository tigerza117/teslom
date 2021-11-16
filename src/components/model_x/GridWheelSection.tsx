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
              <InfoTitle>New Wheels and Tires</InfoTitle>
              <InfoSubTitle>
                New performance tires deliver better handling and ride quality with lower rolling resistance and are paired with new aerodynamics wheels for an updated look.
              </InfoSubTitle>
            </Stack>
          </InfoContainer>
          <GalleryContainer
            sx={{
              backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/a9b54155-913f-4a82-b696-89b176c95ca1/bvlatuR/std/1040x584/MX-Exterior-Grid-B-Desktop)`,
            }}
          ></GalleryContainer>
        </Stack>
        <Stack direction="row">
          <GalleryContainer
            sx={{
              backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/309b7de6-f67c-4d11-85da-2061f9124859/bvlatuR/std/1040x584/MX-Exterior-Grid-A-Desktop)`,
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
                Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth.
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
                Exterior desgin combines an iconic look with elegant proportions.
              </InfoSubTitle>
            </Stack>
          </InfoContainer>
          <GalleryContainer
            sx={{
              backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/e35bae00-d08b-40f1-b978-0b9656dc1a94/bvlatuR/std/1040x584/MX-Exterior-Grid-C-Desktop)`,
            }}
          ></GalleryContainer>
        </Stack>
      </InfoFeatureWrapper>
    </BackgroundWrapper>
  );
}
