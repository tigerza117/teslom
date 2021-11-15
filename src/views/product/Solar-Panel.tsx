import ShowCaseWrapper from "@layouts/ShowCase_SolarPanel";
import { Container } from "@components/shared/Container";
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

function SolarPanel() {
  const { setDark } = useLayoutContext();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    setDark(true);
    return () => {};
  }, []);
  
  return (
    <Container>
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
    </Container>
  );
}

export default SolarPanel;
