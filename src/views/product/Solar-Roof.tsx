import { Container } from "@components/shared/Container";
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

function SolarRoof() {
  return (
    <Container>
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
    </Container>
  );
}

export default SolarRoof;
