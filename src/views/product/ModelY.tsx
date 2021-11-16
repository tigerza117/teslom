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
  Specs,
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
    <>
      <HeroSection />
      <Safety />
      <Utility />
      <DualMotor />
      <Range />
      <Autopilot />
      <Interior />
      <Specs />
      <OrderNow />
    </>
  );
}

export default ModelY;
