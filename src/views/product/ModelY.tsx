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
import { useLayoutContext } from "@contexts/LayoutContext";
import { useEffect } from "react";

function ModelY() {
  const { setDark } = useLayoutContext();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    setDark(false);
    return () => {};
  }, []);

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
