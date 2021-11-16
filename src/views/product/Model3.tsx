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
import { useLayoutContext } from "@contexts/LayoutContext";
import { useEffect } from "react";

function Model3() {
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
      <Perf />
      <DualMotor />
      <Range />
      <Autopilot />
      <Interior />
      <Specs />
      <OrderNow />
    </>
  );
}

export default Model3;
