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
  SlideShow,
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
    <>
      <HeroSection />
      <AllNewInterior />
      <SlideShow />
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
