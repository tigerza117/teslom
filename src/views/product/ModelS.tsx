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
  AllNewInterior,
} from "@components/model_s/section";

function ModelS() {
  return (
    <Container>
      <HeroSection />
      <AllNewInterior />
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
