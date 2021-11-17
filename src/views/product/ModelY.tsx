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
import { ViewAction } from "schema/types";

function ModelY() {
  const { setDark, callViewAction } = useLayoutContext();

  useEffect(() => {
    callViewAction(ViewAction.OPENING);
    setDark(true);
    callViewAction(ViewAction.OPENED);
    return () => {
      callViewAction(ViewAction.CLOSED);
    };
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
