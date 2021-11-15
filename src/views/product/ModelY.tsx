import { Container } from "@components/shared/Container";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import {
  HeroSection,
  Safety,
  Utility,
  DualMotor,
  Range,
  Autopilot,
  Interior,
  OrderNow,
  Specs
} from "@components/model_y/section";

function ModelY() {
  return (
    <Container>
      <HeroSection />
      <Safety />
      <Utility />
      <DualMotor />
      <Range />
      <Autopilot />
      <Interior />
      <Specs />
      <OrderNow />
    </Container>
  );
}

export default ModelY;
