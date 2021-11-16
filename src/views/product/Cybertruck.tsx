import { Container } from "@components/shared/Container";

import {
  HeroSection,
  Gallery,
  PerfText,
  OrderNow,
  ImageSlide,
} from "@components/cybertruck/section";
import { useLayoutContext } from "@contexts/LayoutContext";
import { useEffect } from "react";

const Cybertruck = () => {
  const { setDark } = useLayoutContext();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    setDark(true);
    return () => {};
  }, []);

  return (
    <>
      <HeroSection />
      <Gallery />
      <ImageSlide />
      <PerfText />
      <OrderNow />
    </>
  );
};

export default Cybertruck;
