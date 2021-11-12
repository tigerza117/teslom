import { Container } from "@components/shared/Container";

import {
  HeroSection,
  Gallery,
  PerfText,
  OrderNow,
  ImageSlide,
} from "@components/cybertruck/section";

const Cybertruck = () => {
  return (
    <Container>
      <HeroSection />
      <Gallery />
      <ImageSlide />
      <PerfText />
      <OrderNow />
    </Container>
  );
};

export default Cybertruck;
