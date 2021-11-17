import {
  HeroSection,
  Perf,
  DualMotor,
  Range,
  Interior,
  Specs,
  OrderNow,
} from "@components/model_3/section";
import { Safety, Autopilot } from "@components/model_s/section";
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
