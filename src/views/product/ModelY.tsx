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
      <BackgroundWrapper style={{ backgroundColor: "black" }}>
        <img
          src="https://www.tesla.com/sites/default/files/drupal8/modely/ModelYSilhouette.png"
          loading="lazy"
          style={{
            width: "50vw",
            height: "100%",
            objectFit: "contain",
            float: "left",
          }}
          alt=""
        />
      </BackgroundWrapper>
      <OrderNow />
    </Container>
  );
}

export default ModelY;
