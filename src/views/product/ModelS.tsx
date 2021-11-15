import { Container } from "@components/shared/Container";
import { BackgroundWrapper } from "@components/shared/Wrapper";
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
import { useLayoutContext } from "@contexts/LayoutContext";
import { useEffect } from "react";

function ModelS() {
  const { setDark } = useLayoutContext();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    setDark(true);
    return () => {};
  }, []);

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
