import {
  HeroSection,
  BeyondLu,
  Utility,
  Exterior,
  GridWheel,
  Range,
  Specs,
  OrderNow,
  AllNewInterior,
} from "@components/model_x/section";
import {
  ImageSlide,
  PowerTrain,
  Travel,
  Safety,
  Autopilot,
  Feature,
} from "@components/model_s/section";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { useLayoutContext } from "@contexts/LayoutContext";
import { useEffect } from "react";
import { ViewAction } from "schema/types";

function ModelX() {
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
      <AllNewInterior />
      <ImageSlide />
      <BeyondLu />
      <PowerTrain />
      <Utility />
      <Exterior />
      <GridWheel />
      <Range />
      <Travel />
      <Safety />
      <Autopilot />
      <Feature />
      <Specs />
      <OrderNow />
    </>
  );
}

export default ModelX;
