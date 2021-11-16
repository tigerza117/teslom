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
import { ViewAction } from "schema/types";

function Model3() {
  const { setDark, callViewAction } = useLayoutContext();

  useEffect(() => {
    callViewAction(ViewAction.OPENING);
    setDark(false);
    callViewAction(ViewAction.OPENED);
    return () => {
      callViewAction(ViewAction.CLOSED);
    };
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
