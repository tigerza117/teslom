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
  ImageSlide,
} from "@components/model_s/section";
import { useLayoutContext } from "@contexts/LayoutContext";
import { useEffect } from "react";
import { ViewAction } from "schema/types";

function ModelS() {
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
    </>
  );
}

export default ModelS;
