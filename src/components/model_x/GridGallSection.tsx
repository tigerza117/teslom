import { Stack } from "@mui/material";
import { GalleryContainer, InfoContainer } from "@components/shared/Container";
import {
  BackgroundWrapper,
  InfoFeatureWrapper,
} from "@components/shared/Wrapper";
import { InfoSubTitle, InfoTitle } from "@components/shared/Title";

export function GridGall() {
  return (
    <BackgroundWrapper style={{ backgroundColor: "black", height: "auto" }}>
      <InfoFeatureWrapper>
        <Stack direction="row">
          <GalleryContainer
            sx={{
              backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/287c75d3-2f5d-481e-8a0f-0dc987f54e6b/bvlatuR/std/1040x584/MX-Interior-Grid-A-Desktop)`,
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
              <InfoTitle>Wireless Gaming</InfoTitle>
              <InfoSubTitle>
                Up to 10 teraflops of processing power enables in-car gaming
                on-par with today's newest consloes. Wireless controller
                compatibility lets you game from any seat.
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
              <InfoTitle>Stay Connected</InfoTitle>
              <InfoSubTitle>
                Multi-device Bluetooth, wireless and USB-C charging for every
                passenger, with enough power to fast-charge your tablets and
                laptop.
              </InfoSubTitle>
            </Stack>
          </InfoContainer>
          <GalleryContainer
            sx={{
              backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/a7e9b42b-3433-4ad3-9d25-8995c8b750f4/bvlatuR/std/1040x584/MX-Interior-Grid-B-Desktop)`,
            }}
          ></GalleryContainer>
        </Stack>
        <Stack direction="row">
          <GalleryContainer
            sx={{
              backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/b2e30e61-96ae-4e0a-813d-fa39f35c5797/bvlatuR/std/1040x584/MX-Interior-Grid-C-Desktop)`,
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
              <InfoTitle>Your Best Audio System</InfoTitle>
              <InfoSubTitle>
                A 22-speaker, 960-watt audio system with Active Road Noise
                Reduction offers the best listening exxperience wherever you
                are.
              </InfoSubTitle>
            </Stack>
          </InfoContainer>
        </Stack>
      </InfoFeatureWrapper>
    </BackgroundWrapper>
  );
}
