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
              <InfoTitle>Eget felis eget</InfoTitle>
              <InfoSubTitle>
                Etiam non quam lacus suspendisse faucibus. Facilisis volutpat
                est velit egestas dui id ornare.
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
              <InfoTitle>Eget felis egets</InfoTitle>
              <InfoSubTitle>
                Etiam non quam lacus suspendisse faucibus. Facilisis volutpat
                est velit egestas dui id ornare.
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
              <InfoTitle>Eget felis eget</InfoTitle>
              <InfoSubTitle>
                Etiam non quam lacus suspendisse faucibus. Facilisis volutpat
                est velit egestas dui id ornare.
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
