import { Container } from "@components/shared/Container";

import {
  HeroSection,
  Safety,
  Perf,
  DualMotor,
  Range,
  Autopilot,
  Interior,
  Specs,
  OrderNow,
} from "@components/model_3/section";

function Model3() {
  return (
    <Container>
      <HeroSection />
      <Safety />
      <Perf />
      <DualMotor />
      <Range />
      <Autopilot />
      <Interior />
      <Specs />
      <OrderNow />
    </Container>
  );
}

export default Model3;
