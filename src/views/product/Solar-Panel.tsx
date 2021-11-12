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

function SolarPanel() {
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
