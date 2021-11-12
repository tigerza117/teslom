import { Container } from "@components/shared/Container";
import { BackgroundWrapper, TitleWrapper } from "@components/shared/Wrapper";
import { AdsTitle } from "@components/shared/Title";
import {
  HeroSection,
  GridGall,
  BeyondLu,
  PowerTrain,
  Exterior,
  GridWheel,
  Range,
  Travel,
  Safety,
  Autopilot,
  Feature,
  Specs,
  OrderNow,
} from "@components/model_s/section";

function ModelS() {
  return (
    <Container>
      <HeroSection />
      <BackgroundWrapper style={{ backgroundColor: "black", height: "15vh" }}>
        <TitleWrapper>
          <AdsTitle>All-New Interior</AdsTitle>
        </TitleWrapper>
      </BackgroundWrapper>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/177c0faf-b852-47ea-a218-394368e15a20/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop)`,
        }}
      ></BackgroundWrapper>
      <BackgroundWrapper
        style={{ backgroundColor: "black" }}
      ></BackgroundWrapper>
      <GridGall />
      <BeyondLu />
      <PowerTrain />
      <Exterior />
      <GridWheel />
      <Range />
      <Travel />
      <Safety />
      <Autopilot />
      <Feature />
      <Specs />
      <OrderNow />
    </Container>
  );
}

export default ModelS;
