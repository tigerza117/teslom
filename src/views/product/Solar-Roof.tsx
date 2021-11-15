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
import { useLayoutContext } from "@contexts/LayoutContext";
import { useEffect } from "react";

function SolarRoof() {
  const { setDark } = useLayoutContext();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    setDark(false);
    return () => {};
  }, []);

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
