import {
  Efficiency,
  Installation,
  OrderNow,
  HeroSection,
  BeautyRoof,
  Storage,
  BuildLast,
  Control,
  Value,
  Specs,
} from "@components/solar_roof/section";
import { useLayoutContext } from "@contexts/LayoutContext";
import { useEffect } from "react";
import { ViewAction } from "schema/types";

function SolarRoof() {
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
      <BeautyRoof />
      <Storage />
      <BuildLast />
      <Installation />
      <Efficiency />
      <Control />
      <Value />
      <Specs />
      <OrderNow />
    </>
  );
}

export default SolarRoof;
