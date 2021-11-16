import {
  HeroSection,
  GridGall,
  BeyondLu,
  PowerTrain,
  Utility,
  Exterior,
  GridWheel,
  Range,
  Travel,
  Safety,
  Autopilot,
  Feature,
  Specs,
  OrderNow,
  AllNewInterior
} from "@components/model_x/section";
import { BackgroundWrapper } from "@components/shared/Wrapper";
import { useLayoutContext } from "@contexts/LayoutContext";
import { useEffect } from "react";

function ModelX() {
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
      <BackgroundWrapper
        style={{ backgroundColor: "black" }}
      ></BackgroundWrapper>
      <GridGall />
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
