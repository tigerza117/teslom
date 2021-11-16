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
import { ViewAction } from "schema/types";

const Cybertruck = () => {
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
      <HeroSection />
      <Gallery />
      <ImageSlide />
      <PerfText />
      <OrderNow />
    </>
  );
};

export default Cybertruck;
