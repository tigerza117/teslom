import ShowCaseWrapper from "@layouts/ShowCase_SolarPanel";
import {
  HeroSection,
  SavingSection,
  SleekAndDurable,
  Installation,
  Powerwall,
  Efficiency,
  Experience,
  Specs,
  OrderNow,
} from "@components/solar_panel/section";
import { useEffect } from "react";
import { useLayoutContext } from "@contexts/LayoutContext";
import { ViewAction } from "schema/types";

function SolarPanel() {
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
      <ShowCaseWrapper />
      <HeroSection />
      <SavingSection />
      <SleekAndDurable />
      <Powerwall />
      <Installation />
      <Efficiency />
      <Experience />
      <Specs />
      <OrderNow />
    </>
  );
}

export default SolarPanel;
